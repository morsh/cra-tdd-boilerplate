const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/second-entry.tsx',
    template: 'public/index.html',
    outPath: '/second-entry.html'
  }
]);

module.exports = {
  webpack: function(config, env) {
    multipleEntry.addMultiEntry(config);
    return {
      ...config,
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    };
  }
};
