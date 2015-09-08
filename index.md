
#gulp介绍
    http://www.dbpoo.com/getting-started-with-gulp/
#安装
npm install -g gulp

#初始化node项目
npm init

#安装本地gulp
npm install gulp --save-dev

>npm install gulp-sass --save-dev
>npm install gulp-less --save-dev

#压缩css (Minify css with clean-css.)
npm install gulp-minify-css --save-dev

# 建立一个自动刷新服务器 Gulp plugin to run a webserver (with LiveReload)
npm install --save-dev gulp-connect

#合并js (Concatenates files)
>npm install gulp-concat --save-dev

#压缩js (Minify files with UglifyJS.)
npm install gulp-uglify --save-dev

#重命名 （gulp-rename is a gulp plugin to rename files easily.）
npm install gulp-rename --save-dev

#压缩图片（Issues with the output should be reported on the imagemin issue tracker.）
npm install gulp-imagemin --save-dev

#真实项目
1、自动修改引用
2、自动注入js css
3、学习gulp使用 http://yeoman.io/generators/

#新成一个新的项目
npm install -g yo
npm install generator-gulp-webapp -g
yo gulp-webapp gulptest

