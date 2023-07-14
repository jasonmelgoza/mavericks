/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ mode: "static" })({
  reactStrictMode: true,
  pageExtensions: ["js", "md", "mdoc"]
});
