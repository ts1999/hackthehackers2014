// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
var tabs = require("sdk/tabs");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: [/.*facebook.*/, /.*chrome.*/],
  contentScriptFile: self.data.url("fblock.js")
  //contentScript: 'document.body.innerHTML = ' + ' "<h1>Redircting </h1>" + window.top.location.href;'
});

// include: "*.com",

//contentScript: 'document.body.innerHTML = ' + ' "<h1>Redircting </h1>" + window.top.location.href;'


// main.js



tabs.on('ready', function(tab) {
  tab.attach({
  	contentScriptFile: self.data.url("fboutrewrite.js")
      //contentScript: 'window.alert(self.options.message);',
      //contentScriptOptions: {"message" : "hello world"}
  });
});