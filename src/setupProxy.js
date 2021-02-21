// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://api.gustavfredriksson.com",
      changeOrigin: true,
    })
  );
};
