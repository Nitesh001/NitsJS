(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Dom = {
	"getAllElements" : function(selector){
		//Function to get all elements with particular selector
		var elem = document.querySelectorAll(selector);
		if(elem){
			return elem;
		}
		return false;
	},
	"getFirstElement" : function(selector){
		//Function to get first of all elements with particular selector
		var elem = document.querySelectorAll(selector);
		if(elem){
			return elem[0];
		}
		return false;
	},
	"addClass" : function(elem,className){
		console.log("addingClass to DOM...");
		try{
			if(elem && elem.length){
				var arr = Array.prototype.slice.call(elem);
				arr.map(function(elem){
					elem.className = elem.className + " " + className;
				});
			}else if(elem){
				elem.className = elem.className + " " + className;
			}else{
				console.log("No such element exists...");
			}
		}catch(e){
			console.log("Error generated");
		}
	},
	"removeClass" : function(elem,className){
		console.log("removingClass from DOM...");
		try{
			if(elem){
				elem.className = elem.className.replace(className.trim(),"");
			}else{
				console.log("No such element exists...");
			}
		}catch(e){
			console.log("Error generated");
		}		
	},
	"addAttribute" : function(elem,obj){
		//Obj accepts argument as {name:"attrName", val:"attrValue"} to add or set attribute
		console.log("Adding Attribute to DOM...");
		try{
			if(elem){
				var attr = document.createAttribute(obj['name']);

					attr.value = obj['val']
					elem.setAttributeNode(attr);	
			}else{
				console.log("No such element exists...");
			}
		}catch(e){
			console.log("Error generated or invalid parameters");
		}	
	},
	"removeAttribute" : function(elem,attr){
		console.log("Removing Attribute from DOM...");	
		try{
			if(elem){
				elem.removeAttribute(attr);	
			}else{
				console.log("No such element exists...");
			}
		}catch(e){
			console.log("Error generated or invalid parameters");
		}
	},
	"appendContent" : function(elem,content){
		console.log("Appending content...");
		try{
			if(elem){
				var div = document.createElement("div");
				div.innerHTML = content;
				elem.appendChild(div);					
			}else{
				console.log("No such element exists...");
			}
		}catch(e){
			console.log("Error generated or invalid parameters");
		}			
	}	
}

module.exports = Dom;
},{}],2:[function(require,module,exports){
"use strict";

var Effect = {
	"slideUp" : function(obj){
		console.log("Sliding up...");
	},
	"slideDown" : function(obj){
		console.log("Sliding Down...");
	}
}

module.exports = Effect;

},{}],3:[function(require,module,exports){
/*import {dom} from "/.dom";
import {effect} from "/.effect";*/

var dom = require("./dom/dom");
var effect = require("./effect/effect");

window.nLib = Object.assign({},dom,effect);


},{"./dom/dom":1,"./effect/effect":2}]},{},[3]);
