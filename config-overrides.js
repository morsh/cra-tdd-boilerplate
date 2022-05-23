const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/index2.tsx',
    template: 'public/index.html',
    outPath: '/landing.html'
  }
]);

module.exports = {
  webpack: function(config, env) {
    multipleEntry.addMultiEntry(config);
    return config;
  }
};
