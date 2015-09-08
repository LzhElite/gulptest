/**
 * Created by Elite on 2015/9/8.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');//sass插件
var less=require('gulp-less');//less插件

var connect=require('gulp-connect');//启动一个自动刷新的服务器
var concat=require('gulp-concat');//合并文件
var uglify=require('gulp-uglify');//压缩
var rename=require('gulp-rename');//重命名 gulp-rename is a gulp plugin to rename files easily.

var minifyCss =require('gulp-minify-css');//压缩css
var imagemin=require('gulp-imagemin');//压缩图片

/*
* 合并js文件*/
gulp.task('concatScript',function(){
    return gulp.src(['./app/scripts/*.js'])
        .pipe(concat('join.js'))
        .pipe(uglify())
        .pipe(rename(function(path){
            path.basename +='.min';
        }))
        .pipe(gulp.dest('dist/scripts'));
});
/*
 * 实时预览
 * */
gulp.task('server',function(){
    connect.server({
        root:'dist',//设置文件根目录
        port:8080,//设置端口
        livereload:true//动态加载，实时刷新
    });
});

gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
/*任务监视
 gulp.task('watch',function(){
 gulp.watch('路径',['任务名称']);
 })*/
gulp.task('watch',function(){
    gulp.watch('./app/*.html',['copyHtml']);
    gulp.watch('./app/styles/page.less',['less']);
    gulp.watch('./app/styles/main.scss',['sass']);
});

gulp.task('copyImage',function(){
    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copyScripts',function(){
    //return gulp.src(['./app/scripts/base.js','./app/scripts/page.js'])
    //    .pipe(gulp.dest('dist/scripts'));

    return gulp.src(['./app/scripts/*.js','!./app/scripts/page.js'])
        .pipe(gulp.dest('dist/scripts'));
});

/* sass编译 */
gulp.task('sass',function(){
    return gulp.src('./app/styles/main.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename(function(path){
            path.basename +='.min';
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload())
});

/*less编译*/

gulp.task('less',function(){
    return gulp.src('./app/styles/page.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(rename(function(path){
            path.basename +='.min';
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload())
});
gulp.task('default',['server','watch']);
//gulp.task('default',['copyHtml','copyImage','copyScripts','sass','less']);
