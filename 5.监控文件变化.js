/**
 * Created by Elite on 2015/9/8.
 */
var gulp=require('gulp');
/*
 * 拷贝多个文件
 * pipe管道
 * **匹配任何字符，包括路径分隔符
 * * 匹配除了路径分隔符之外的所有字符
 * ！ 表示拒绝匹配，排除文件
 * */

gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('dist'));
});
/*任务监视
gulp.task('watch',function(){
    gulp.watch('路径',['任务名称']);
})*/
gulp.task('watch',function(){
    gulp.watch('./app/*.html',['copyHtml']);
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



gulp.task('default',['copyHtml','copyImage','copyScripts']);
