const CracoLessPlugin = require('craco-less');

module.export = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessloaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}