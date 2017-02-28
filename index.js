'use strict';
const fs		= require('fs');
const path		= require('path');

exports.resolvedPath = function(directoryPath, fileName){
	return path.resolve(directoryPath, fileName);
}

exports.readFile = function(filePath){
	return new Promise(resolve, reject){
		fs.readFile(filePath, 'utf8', (err, data) => {
			if(err) return reject("readFile didn't work.");
			resolve(data);
		});
	}
}

exports.readDir = function(directoryPath){
	return new Promise(resolve, reject){
		fs.readdir(directoryPath, (err, files) => {
			if(err) return reject("readDir didn't work.");
			resolve(files);
		});
	}
}

exports.readDirFiles = function(directoryPath){
	return new Promise(resolve, reject){
		
	}
}
