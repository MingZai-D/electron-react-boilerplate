import { rimrafSync } from 'rimraf';
import fs from 'fs';
import path from 'path';
import webpackPaths from '../configs/webpack.paths';

const foldersToRemove = [
  webpackPaths.distPath,
  webpackPaths.buildPath,
  webpackPaths.dllPath,
];

foldersToRemove.forEach((folder) => {
  if (fs.existsSync(folder)) rimrafSync(folder);
});

const appName = process.env.VERSION || 'Configurator';
const packageJsonPath = path.join(webpackPaths.rootPath, 'package.json');
const packageJson = require(packageJsonPath);
packageJson.build.productName = appName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));