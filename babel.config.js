module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [],
  "env": {
    "utils": {
      "presets": [
        [
          "@babel/preset-env",
          {
            // "loose": true,
            "modules": "commonjs",
            "targets": {
              "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
          }
        ]
      ],
      "plugins": [
        [
          "module-resolver", {
            "root": ["mist-ui"],
            "alias": {
              "mist-ui/src": "mist-ui/lib"
            }
          }
        ],
        [
          "@babel/plugin-transform-runtime", {
            "corejs": 3
          }
        ]
      ]
    }

  }
}