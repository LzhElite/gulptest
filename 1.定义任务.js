/**
 * Created by Elite on 2015/9/8.
 */
var gulp=require('gulp');
/*
* 定义一个任务
* gulp.task(任务名称,任务定义fn);
* */
gulp.task('hello',function(){
    console.log('hello');
});

gulp.task('world',function(){
    console.log('world');
});
//定义个组合任务
gulp.task('default',['hello','world'],function(){
    console.log('done')
});