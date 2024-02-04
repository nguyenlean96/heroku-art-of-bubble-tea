import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.dev.config';

const compiler = webpack(config);
export default {
  comp: webpackDevMiddleware(compiler, {
    publicPath: config.output?.publicPath,
  }),
  hot: webpackHotMiddleware(compiler, {
    heartbeat: 10 * 1000,
  }),
};
