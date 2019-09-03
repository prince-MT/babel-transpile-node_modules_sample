module.exports = {
  overrides: [
    {
      test: ["./node_modules/__testTranspilePackage"],
      presets: ["@babel/preset-react"]
    }
  ]
};
