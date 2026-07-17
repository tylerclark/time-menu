// electron-builder afterPack hook: ad-hoc sign the app so it runs locally
// without an Apple certificate. Not valid for distribution to other machines.
const { execSync } = require('child_process');

exports.default = async function (context) {
  if (context.electronPlatformName !== 'darwin') return;
  const appPath = `${context.appOutDir}/${context.packager.appInfo.productFilename}.app`;
  execSync(`codesign --force --deep --sign - "${appPath}"`, { stdio: 'inherit' });
};
