import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { merge } from 'webpack-merge';
import webpack, { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
import common from './webpack.common.config';

type Configuration = WebpackConfig & {
  devServer?: WebpackDevServerConfig;
};

const isDevelopment = process.env.NODE_ENV !== 'production';

const devConfig: Configuration = {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map', // eval-source-map
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
};
const config = merge<Configuration>(common, devConfig);
export default config;
