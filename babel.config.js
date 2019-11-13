module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    {
      "plugins": [["import", {
        "libraryName": "view-design",
        "libraryDirectory": "src/components"
      }]],
      "plugins": [["import", {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }]]
    }
  ]
}
