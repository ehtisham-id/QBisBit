#!/usr/bin/env node

import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execSync } from 'node:child_process';

function run(command, options = {}) {
    execSync(command, {
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
    });
}

function runWithOutput(command, options = {}) {
    return execSync(command, {
        stdio: ['ignore', 'pipe', 'pipe'],
        encoding: 'utf8',
        ...options,
    }).trim();
}

const args = new Set(process.argv.slice(2));
const noPush = args.has('--no-push');

const repoRoot = runWithOutput('git rev-parse --show-toplevel');
const distDir = path.join(repoRoot, 'dist');

if (!existsSync(distDir)) {
    throw new Error('dist directory not found. Run the build first.');
}

const remoteUrl = runWithOutput('git config --get remote.origin.url', {
    cwd: repoRoot,
});

const tempDir = mkdtempSync(path.join(os.tmpdir(), 'qbisbit-gh-pages-'));

try {
    run('git init', { cwd: tempDir });
    run('git checkout --orphan gh-pages', { cwd: tempDir });
    run(`git remote add origin ${JSON.stringify(remoteUrl)}`, { cwd: tempDir });
    run('git config user.name "GitHub Actions"', { cwd: tempDir });
    run('git config user.email "github-actions[bot]@users.noreply.github.com"', {
        cwd: tempDir,
    });

    for (const entry of readdirSync(distDir, { withFileTypes: true })) {
        const sourcePath = path.join(distDir, entry.name);
        const targetPath = path.join(tempDir, entry.name);
        cpSync(sourcePath, targetPath, { recursive: true });
    }

    run('git add -A', { cwd: tempDir });
    run('git commit -m "Deploy site"', { cwd: tempDir });

    if (!noPush) {
        run('git push origin gh-pages --force', { cwd: tempDir, stdio: 'inherit' });
    }

    process.stdout.write(`Prepared gh-pages deployment from ${distDir}\n`);
    if (noPush) {
        process.stdout.write('Skipped push because --no-push was provided.\n');
    }
} finally {
    rmSync(tempDir, { recursive: true, force: true });
}