// build.js
import esbuild from 'esbuild';
import { readFileSync } from 'fs';

// Parse your src/index.js to know exactly which inputs to build
const getEntryPoints = () => {
  const content = readFileSync('./src/index.js', 'utf-8');
  return content
    .split('\n')
    .map(line => line.match(/export \* from ["']\.\/inputs\/(.+?)["'];/))
    .filter(Boolean)
    .map(match => `./src/inputs/${match[1]}.js`);
};

const individualEntryPoints = getEntryPoints();

const isWatch = process.argv.includes('--watch') || process.argv.includes('-w');

const commonOptions = {
  bundle: true,
  format: 'iife',
  globalName: 'Inputs',
  minify: true,
  target: 'es2017',
  treeShaking: true,
  logLevel: 'info',
};

// 1. Single bundle (all inputs)
const singleCtx = await esbuild.context({
  entryPoints: ['./src/index.js'],
  outfile: 'dist/index.js',
  ...commonOptions,
});

// 2. Individual inputs
const individualCtx = await esbuild.context({
  entryPoints: individualEntryPoints,
  outdir: 'dist/inputs',
  outbase: 'src/inputs',
  ...commonOptions,
});

if (isWatch) {
  console.log('Watching for changes...');
  await Promise.all([
    singleCtx.watch(),
    individualCtx.watch(),
  ]);
} else {
  await Promise.all([
    singleCtx.rebuild(),
    individualCtx.rebuild(),
  ]);
  console.log(`Build complete! ${individualEntryPoints.length} inputs → dist/`);
  process.exit(0);
}
