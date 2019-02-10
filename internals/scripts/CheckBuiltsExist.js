// @flow
// Check if the renderer and main bundles are built
import path from 'path';
import chalk from 'chalk';
import fs from 'fs';

function CheckBuildsExist() {
  const mainPath = path.join(__dirname, '..', '..', 'app', 'main.prod.js');
  const window1RendererPath = getRendererPath('window1');
  const window2RendererPath = getRendererPath('window2');

  if (!fs.existsSync(mainPath)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        'The main process is not built yet. Build it by running "yarn build-main"'
      )
    );
  }

  if (!fs.existsSync(window1RendererPath)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        'The window1 renderer process is not built yet. Build it by running "yarn build-renderer"'
      )
    );
  }

  if (!fs.existsSync(window2RendererPath)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        'The window2 renderer process is not built yet. Build it by running "yarn build-renderer"'
      )
    );
  }
}

CheckBuildsExist();

function getRendererPath(name: string) {
  return path.join(
    __dirname,
    '..',
    '..',
    'app',
    'dist',
    `${name}.renderer.prod.js`
  );
}
