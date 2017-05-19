/*global describe, it*/
"use strict";

var fs = require("fs"),
	should = require("should");

require("mocha");

var gutil = require("gulp-util"),
	checkFilesize = require("../");

describe("gulp-check-filesize", function () {

	it('should log the correct filesize', function(done) {
		var stream = checkFilesize();
		var srcFile = new gutil.File({
			path: "test/fixtures/test.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.css")
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		var count = 0;
		var writtenValue = '';

		// Stub process.stdout.write
		var stdout_write = process.stdout.write;
		process.stdout.write = function(value) {
			writtenValue += value;
			if(++count > 0){
				// Restore process.stdout.write after test
				process.stdout.write = stdout_write;
			}
		};

		stream.on("data", function () {

			var time = gutil.date(new Date(), 'HH:MM:ss');
			writtenValue.should.eql(
				'[' + gutil.colors.grey(time) + '] Size of ' + gutil.colors.cyan('test.css') + ': ' +
				gutil.colors.magenta('206 B') + '\n'
			);

			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it('should warn about exceeded filesize limit', function(done) {
		var stream = checkFilesize({
			fileSizeLimit: 150
		});
		var srcFile = new gutil.File({
			path: "test/fixtures/test.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.css")
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		var count = 0;
		var writtenValue = '';

		// Stub process.stdout.write
		var stdout_write = process.stdout.write;
		process.stdout.write = function(value) {
			writtenValue += value;
			if(++count > 0){
				// Restore process.stdout.write after test
				process.stdout.write = stdout_write;
			}
		};

		stream.on("data", function () {

			var time = gutil.date(new Date(), 'HH:MM:ss');
			writtenValue.should.eql(
				'[' + gutil.colors.grey(time) + '] ' +
				gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan('test.css') +
				' exceeded filesize limit of 150 B: ' + gutil.colors.red('206 B') + ' \n'
			);

			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it('should log correct gzipped filesize', function(done) {
		var stream = checkFilesize({
			enableGzip: true
		});
		var srcFile = new gutil.File({
			path: "test/fixtures/test.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.css")
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		var count = 0;
		var writtenValue = '';

		// Stub process.stdout.write
		var stdout_write = process.stdout.write;
		process.stdout.write = function(value) {
			writtenValue += value;
			if(++count > 0){
				// Restore process.stdout.write after test
				process.stdout.write = stdout_write;
			}
		};

		stream.on("data", function () {

			var time = gutil.date(new Date(), 'HH:MM:ss');
			writtenValue.should.eql(
				'[' + gutil.colors.grey(time) + '] Size of ' + gutil.colors.cyan('test.css') + ': ' +
				gutil.colors.magenta('206 B') + gutil.colors.yellow(' (158 B gzipped)') + '\n'
			);

			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it('should warn about exceeded gzipped filesize limit', function(done) {
		var stream = checkFilesize({
			enableGzip: true,
			fileSizeLimitGzipped: 100
		});
		var srcFile = new gutil.File({
			path: "test/fixtures/test.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.css")
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		var count = 0;
		var writtenValue = '';

		// Stub process.stdout.write
		var stdout_write = process.stdout.write;
		process.stdout.write = function(value) {
			writtenValue += value;
			if(++count > 0){
				// Restore process.stdout.write after test
				process.stdout.write = stdout_write;
			}
		};

		stream.on("data", function () {

			var time = gutil.date(new Date(), 'HH:MM:ss');
			writtenValue.should.eql(
				'[' + gutil.colors.grey(time) + '] ' +
				gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan('test.css') +
				' exceeded gzipped filesize limit of 100 B: ' + gutil.colors.red('158 B') + '\n'
			);

			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it('should warn about exceeded filesize limit (gzipped and normal)', function(done) {
		var stream = checkFilesize({
			enableGzip: true,
			fileSizeLimit: 150,
			fileSizeLimitGzipped: 100
		});
		var srcFile = new gutil.File({
			path: "test/fixtures/test.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.css")
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		var count = 0;
		var writtenValue = '';

		// Stub process.stdout.write
		var stdout_write = process.stdout.write;
		process.stdout.write = function(value) {
			writtenValue += value;
			if(++count > 0){
				// Restore process.stdout.write after test
				process.stdout.write = stdout_write;
			}
		};

		stream.on("data", function () {

			var time = gutil.date(new Date(), 'HH:MM:ss');
			writtenValue.should.eql(
				'[' + gutil.colors.grey(time) + '] ' +
				gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan('test.css') +
				' exceeded filesize limit of 150 B: ' + gutil.colors.red('206 B') + ' ' +
				gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan('test.css') +
				' exceeded gzipped filesize limit of 100 B: ' + gutil.colors.red('158 B') + '\n'
			);

			done();
		});

		stream.write(srcFile);
		stream.end();
	});

});
