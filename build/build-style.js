const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('gulp4-run-sequence');

// 编译less
gulp.task('css', async () => {
    return gulp.src('../src/styles/index.less')
        .pipe(less({javascriptEnabled: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('sbox-ds.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('iconfonts',  async () => {
    return gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('textfonts',  async () => {
    return gulp.src('../src/styles/common/textfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

// gulp.task('default', ['css', 'fonts']);

gulp.task('default', function(done) {
    runSequence('css', 'iconfonts', 'textfonts', done);
});
