mkdir -p my-project/{css, js, img} //создание главной папки проекта и подпапок в ней
cd my-project //переход в папку
mkdir text-folder/some-folder //создание папки
touch .gitignore gulpfile.js readme.md //создание файлов
touch index.html css/style.css js/script.js //создание файлов в папках
ls -a //показывает скрытые файлы
rm -rf test-folder //удалине папки
echo node_modules > .gitignore //записывает в файл содержимое
cat .gitignore //посмотреть содержимое файла
vim .gitignore //текстовый редактор в консоли

														npm
npm i gulpjs/gulp#4.0 -D // установка gulp 4 версии в ветку Devdependens(не видно для итогового сайта)
npm init -y //для начала работы в проекте (создание файла package.json)
npm i -g gulp-cli yarn bower //установка глобально
npm -g list --depth=0 //список установленных пользователем
npm i gulp stylelint //установка локально
npm outdate, npm update //проверка обновлний

														gulp
gulp.scr('scss/*.scss') //команда, с помощью которой выбираются файлы для обработки
	.pipe(sass()) //табулирует файл .scss
	.pipe(postcss(postCssPlugins)) //
	.pipe(gulp.dest('build/css')); //куда записать обработанный файл
gulp.dest
gulp.pipe
gulp.watch //Следит за файлами и выполняет какие-либо функции при их изменении
	gulp.watch('js/**/*.js', ['uglify', 'reload']); 
gulp.task // объявление задачи для ее последующего вызова
	gulp.task('build', gulp.series(
		clean,
		gulp.parallel(styles,scripts)
		));
gulp.series
gulp.parallel