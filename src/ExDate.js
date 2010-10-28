/*
* ExDate - Date class wrapper for using conbination with Date libraly which leads to prototype pollution.
*
* http://github.com/monjudoh/ExDate
* version: 0.1
*
* Copyright (c) 2010 monjudoh
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*/
ExDate = (function(Date) {
	function ExDate(){
		var date,
			args = arguments;
		switch(arguments.length){
			case 0:
				date = new Date();
				break;
			case 1:
				date = new Date(args[0]);
				break;
			case 2:
				date = new Date(args[0],args[1]);
				break;
			case 3:
				date = new Date(args[0],args[1],args[2]);
				break;
			case 4:
				date = new Date(args[0],args[1],args[2],args[3]);
				break;
			case 5:
				date = new Date(args[0],args[1],args[2],args[3],args[4]);
				break;
			case 6:
				date = new Date(args[0],args[1],args[2],args[3],args[4],args[5]);
				break;
			default:
			 break;
		}	
		this.__value__ = date;
	};
	var methods = [
		'getFullYear','setFullYear','getUTCFullYear','setUTCFullYear','getDate','getDay','getHours','getMilliseconds',
		'getMinutes','getMonth','getSeconds','getTime','getTimezoneOffset','getUTCDate','getUTCDay','getUTCHours',
		'getUTCMilliseconds','getUTCMinutes','getUTCMonth','getUTCSeconds','getYear','setDate','setHours','setMilliseconds',
		'setMinutes','setMonth','setSeconds','setTime','setUTCDate','setUTCHours','setUTCMilliseconds','setUTCMinutes',
		'setUTCMonth','setUTCSeconds','setYear','toDateString','toGMTString','toUTCString','toLocaleDateString',
		'toLocaleFormat','toLocaleTimeString','toTimeString',
		'toString','valueOf'
	];
	for (var i = methods.length - 1; i >= 0; i--){
		(function(name){
			if (!Date.prototype[name]) return;
			ExDate.prototype[name] = function() {
				var args = [].slice.apply(arguments);
				return Date.prototype[name].apply(this.__value__,args);
			};
		})(methods[i]);
	};
	var classMethods = ['now','parse','UTC'];
	for (var j = classMethods.length - 1; j >= 0; j--){
		(function(name){
			if (!Date[name]) return;
			ExDate[name] = function() {
				var args = [].slice.apply(arguments);
				return Date[name].apply(null,args);
			};
		})(classMethods[j]);
	};
	return ExDate;
})(Date);


