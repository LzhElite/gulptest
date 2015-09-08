/**
 * Created by Elite on 2015/9/8.
 */
var gulp=require('gulp');
/*
 * 拷贝多个文件
 * pipe管道
 * **匹配任何字符，包括路径分隔符
 * * 匹配除了路径分隔符之外的所有字符
 * */

 gulp.task('copyImage',function(){
    //return gulp.src('./app/images/*.jpg')
    //   .pipe(gulp.dest('dist/images'));

    //return gulp.src('./app/images/*.{jpg,png}')
    //    .pipe(gulp.dest('dist/images'));

    //return gulp.src('./app/images/**/*.{jpg,png}')
    //    .pipe(gulp.dest('dist/images'));

    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('dist/images'));
});
