var map = require('map-stream'),
	gutil = require('gulp-util'),
	getFileSize = require('filesize'),
	zlib = require('zlib');

module.exports = function(options){
	'use strict';

	if (typeof options === 'undefined') {
		options = {};
	}

	return map(function(file, callback){
		var filenameShort = file.path.split(/\/|\\/).pop(),
			//Check if file.stat exists (gulp.concat removes it for example)
			filesize = file.stat && file.stat.size ? file.stat.size : Buffer.byteLength(String(file.contents)),
			formattedFilesize = getFileSize(filesize),
			gzippedFilesize = 0,
			formattedGzippedFilesize,
			message = '';

		if (options.enableGzip) {
			gzippedFilesize = zlib.gzipSync(file.contents).length;
			formattedGzippedFilesize = getFileSize(gzippedFilesize);
		}

		if (typeof options.fileSizeLimit !== 'undefined' && filesize > options.fileSizeLimit) {
			message = gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan(filenameShort) +
				' exceeded filesize limit of ' + getFileSize(options.fileSizeLimit) + ': ' +
				gutil.colors.red(formattedFilesize) + ' ';
		}

		if (typeof options.fileSizeLimitGzipped !== 'undefined' && gzippedFilesize > options.fileSizeLimitGzipped) {
			message += gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan(filenameShort) +
				' exceeded gzipped filesize limit of ' + getFileSize(options.fileSizeLimitGzipped) + ': ' +
				gutil.colors.red(formattedGzippedFilesize);
		}

		if (message === '') {
			message = 'Size of ' + gutil.colors.cyan(filenameShort) + ': ' + gutil.colors.magenta(formattedFilesize);
			if (options.enableGzip) {
				message += gutil.colors.yellow(' (' + formattedGzippedFilesize + ' gzipped)');
			}
		}

		gutil.log(message);

		callback(null,file);
	});
};
