const path = require('path');

module.exports = {
    entry: './entry.js', //入口
    output: {
        //出口
        path: path.join(__dirname, './dist'),
        filename: 'hello.bundle.js' //出口文件名
    },
    module: {
        //  规则数组，里面的每一个对象都是一个loader，loader可以讲不同文件从不同的语言转为js，获奖内联图像转换为dataURL，成为webpack能识别的文件
        rules: [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
        ]
    },
    mode: 'development'
}