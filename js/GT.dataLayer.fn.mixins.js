(function(a,d,c){if(!d||(a.dtmParameter!="A"&&a.dtmParameter!="B")){return;}d.notify("Running: datalayer.v2.fn.mixins.js",2);var b=a._DigitalData.prototype.fn=a._DigitalData.prototype.fn||{};b.Optional=function(e){return{getOrElse:function(f){if(e&&e!=null){return e;}else{return f;}}};};b.normalized=function(e){e=d.trim(e);e=b.replaceTurkish(e);e=e.toLowerCase();return e;};b.replaceTurkish=function(f){if(typeof f!=="string"){return f;}if(typeof f==="undefined"||f==null){return null;}var k="ığüşöçİĞÜŞÖÇé";var j="igusocIGUSOCe";var e="";var g="";for(var h=0;h<f.length;h++){g=f.charAt(h);if(k.indexOf(g)>=0){e+=j.charAt(k.indexOf(g));}else{e+=g;}}return e;};})(window,window._satellite,window.jq111);