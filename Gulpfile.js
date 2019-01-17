const gulp      = require('gulp');
const gulpBabel = require('gulp-babel');
const del       = require('del');

gulp.task('clean', () => {
    return del(['./lib']);
});

gulp.task('transpilation', () => {
    return gulp.src(['./acorn/*.js'])
            .pipe(gulpBabel())
            .pipe(gulp.dest('lib/'));
});

gulp.task('build', gulp.series('clean', 'transpilation'));

