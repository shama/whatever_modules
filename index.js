var fs = require('fs');
var path = require('path');
module.exports = function(filepath, cwd, cb) {
  cwd = cwd || process.cwd();
  filepath = path.join(cwd, (filepath || 'whatever_modules'));
  if (!fs.exists(filepath)) {
    fs.symlink(path.join(cwd, 'node_modules'), filepath, 'dir', function() {
      if (cb) cb(null, filepath);
    });
  } else {
    if (cb) cb(null, filepath);
  }
};
