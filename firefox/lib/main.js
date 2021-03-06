var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");


var newsfeed = panels.Panel({
  width: 475,
  height: 500,
  contentURL: self.data.url("popup.html"),
  contentScriptFile: [self.data.url("jquery.js"),self.data.url("popup.js")]
});


var button = buttons.ActionButton({
  id: "HackerNews-feed",
  label: "Displays current feeds from HackerNews",
  icon: {
    "16": "./icon16.png",
    "32": "./icon32.png",
    "48": "./icon48.png",
    "64": "./icon48.png",
    "128":"./icon128.png"
  },
  onClick: popup 
})

function popup(){
  newsfeed.show({ position: button });
 };


newsfeed.port.on("postClicked", function (text) {
  tabs.open(text);
});

