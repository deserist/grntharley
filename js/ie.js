function detectIE(a){var b=document.createElement("link");b.rel="stylesheet";b.href=STATIC_ASSET_URL_VAR+"/assets/css/ie.css"+CACHE_PARM_CSS_VAR;document.getElementsByTagName("head")[0].appendChild(b);var c=document.createElement("link");c.rel="stylesheet";c.href=STATIC_ASSET_URL_VAR+"/assets/css/gt-facelift-ie-style.css"+CACHE_PARM_CSS_VAR;document.getElementsByTagName("head")[0].appendChild(c);document.documentElement.className+=" ie ie"+a+" ";}if(document.documentMode){detectIE(document.documentMode);if(document.documentMode<10&&typeof Pace!="undefined"){setTimeout(function(){Pace.stop();$("body").removeClass("pace-running");},1000);}if(document.documentMode==8){Array.prototype.forEach=function(b){for(var a=0;a<this.length;a++){b.apply(this,[this[a],a,this]);}};if(document.getElementsByTagName("html")[0].className.indexOf("login")>=0){document.documentElement.className+=" hide ";}}}function typeButtonFix(){$('button[type="button"]').on("click",function(){return false;});if($("html").hasClass("ie9")||$("html").hasClass("ie8")){$("input").removeAttr("placeholder");}}window.onload=function(){if(document.documentMode){if(document.documentMode==8){setTimeout(function(){if(document.getElementsByTagName("html")[0].className.indexOf("login")>=0){$("html").removeClass("hide");}modalHeightCheck=true;modalHeight();labelHeight();ie8lastchild();},1000);setTimeout(function(){$('.help-icon, a[data-toggle="collapse"]').focus().blur();},1100);}}};