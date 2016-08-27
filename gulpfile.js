var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less = require('gulp-less');
var path = require('path');
 var concat = require('gulp-concat');
 var minifyCss = require('gulp-minify-css'); 
// 同步
var gulpSequence = require('gulp-sequence');
// 替换
var rev = require('gulp-rev');
//- 多个文件合并为一个；
var revCollector = require('gulp-rev-collector');
//- 路径替换
var minifyHTML   = require('gulp-minify-html');


gulp.task('less', function(){
	var processors = [
		autoprefixer({
			browsers:['last 4 version']
		}),
		mqpacker,
		csswring
	];

	return gulp.src('./less/*.less')
			.pipe(less())
			.pipe(postcss(processors))
			.pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./css/wiki.css', './css/system.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('wap.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./css'))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});

// 同步
gulp.task('sequ', gulpSequence('less', 'concat'));

// 替换
// gulp.task('css', function () {
//     return gulp.src('./css/*.css')
//         .pipe(rev())
//         .pipe(gulp.dest('dist/css'))
//         .pipe( rev.manifest() )
//         .pipe( gulp.dest( 'rev/css' ) );
// });

// gulp.task('scripts', function () {
//     return gulp.src('src/js/*.js')
//         .pipe(rev())
//         .pipe(gulp.dest('dist/js'))
//         .pipe( rev.manifest() )
//         .pipe( gulp.dest( 'rev/js' ) );
// });

gulp.task('rev', function () {
    return gulp.src(['rev/*.json', './html/*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                // 'css': '/dist/css/',
                // 'js/': '/dist/js/',
                // 'cdn/': function(manifest_value) {
                //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                // }
            }
        }) )
        .pipe( minifyHTML({
                empty:true,
                spare:true
            }) )
        .pipe( gulp.dest('./') );
});

gulp.task('default', ['sequ', 'rev']);
