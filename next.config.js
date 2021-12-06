const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  env: {
    WEATHER_KEY: "d2edeca8d612bc0f975e367efabe2392",
  },
  images: {
    domains: ["openweathermap.org"],
  },
  pwa: {
    dest: "public",
    publicExcludes: ["!google*.html", "!_error*.js"],
  },
});
