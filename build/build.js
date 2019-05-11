const rimraf = require('rimraf')
const ora = require('ora') // 进度条
const webpack = require('webpack')
const chalk = require('chalk')
const webpackConfig = require('./webpack.config')
process.env.NODE_ENV = 'production'

const spinner = ora('building for production... 正在飞速为您打包')
spinner.start()

rimraf('dist',{},(err)=>{
    if (err) throw err
    webpack(webpackConfig,(err,stats)=>{
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
        ))
    })

})