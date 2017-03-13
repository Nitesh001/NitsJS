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