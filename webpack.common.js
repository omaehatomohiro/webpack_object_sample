const path = require('path');

module.exports = {
    entry: {
        // outputでfilenameを指定しない場合
        // ここのkey名がoutputファイル名になる
        context: path.resolve(__dirname,'src','Pop.js'),
    },
    target: ["web","es6"]
}