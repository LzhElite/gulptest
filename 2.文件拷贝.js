/**
 * Created by Elite on 2015/9/8.
 */

var gulp=require('gulp');
/*
 * 拷贝一个文件
 * pipe管道
 * */
gulp.task('copyHtml',function(){
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('dist'));
});
