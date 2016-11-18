"use strict";!function(e){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e(function(){var t=e(window),a=e("body"),l=(e("#page-wrapper"),e("#banner")),i=e("#header");a.addClass("is-loading"),t.on("load",function(){window.setTimeout(function(){a.removeClass("is-loading")},100),e("#three").poptrox({caption:function(e){return e.next("h3").text()},overlayColor:"#2c2c2c",overlayOpacity:.85,popupCloserText:"",popupLoaderText:"",selector:".ref-item a.image",usePopupCaption:!0,usePopupDefaultStyling:!1,usePopupEasyClose:!1,usePopupNav:!0,windowMargin:skel.breakpoint("small").active?0:50}),e("#five").poptrox({caption:function(e){return e.next("h3").text()},overlayColor:"#2c2c2c",overlayOpacity:.85,popupCloserText:"",popupLoaderText:"",selector:".ag-item a.image",usePopupCaption:!0,usePopupDefaultStyling:!1,usePopupEasyClose:!1,usePopupNav:!0,windowMargin:skel.breakpoint("small").active?0:50})}),skel.vars.mobile?a.addClass("is-mobile"):skel.on("-medium !medium",function(){a.removeClass("is-mobile")}).on("+medium",function(){a.addClass("is-mobile")}),e("form").placeholder(),skel.on("+medium -medium",function(){e.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)}),e(".scrolly").scrolly({speed:1500,offset:i.outerHeight()}),e("#menu").append('<a href="#menu" class="close"></a>').appendTo(a).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right",target:a,visibleClass:"is-menu-visible"}),skel.vars.IEVersion<9&&i.removeClass("alt"),l.length>0&&i.hasClass("alt")&&(t.on("resize",function(){t.trigger("scroll")}),l.scrollex({bottom:i.outerHeight()+1,terminate:function(){i.removeClass("alt")},enter:function(){i.addClass("alt")},leave:function(){i.removeClass("alt")}}))}),e.fn.visible=function(t){var a=e(this),l=e(window),i=l.scrollTop(),o=i+l.height(),n=a.offset().top,r=n+a.height(),s=t===!0?r:n,p=t===!0?n:r;return p<=o&&s>=i}}(jQuery);var win=$(window),allMods=$(".module");allMods.each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("already-visible")}),win.scroll(function(e){allMods.each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("come-in")})}),function(e){e.fn.navList=function(){var t=e(this);return $a=t.find("a"),b=[],$a.each(function(){var t=e(this),a=Math.max(0,t.parents("li").length-1),l=t.attr("href"),i=t.attr("target");b.push('<a class="link depth-'+a+'"'+("undefined"!=typeof i&&""!=i?' target="'+i+'"':"")+("undefined"!=typeof l&&""!=l?' href="'+l+'"':"")+'><span class="indent-'+a+'"></span>'+t.text()+"</a>")}),b.join("")},e.fn.panel=function(t){if(0==this.length)return i;if(this.length>1){for(var a=0;a<this.length;a++)e(this[a]).panel(t);return i}var l,i=e(this),o=e("body"),n=e(window),r=i.attr("id");return l=e.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:i,visibleClass:"visible"},t),"jQuery"!=typeof l.target&&(l.target=e(l.target)),i._hide=function(e){l.target.hasClass(l.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),l.target.removeClass(l.visibleClass),window.setTimeout(function(){l.resetScroll&&i.scrollTop(0),l.resetForms&&i.find("form").each(function(){this.reset()})},l.delay))},i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),l.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",function(t){var a=e(this),o=a.attr("href"),n=a.attr("target");o&&"#"!=o&&""!=o&&o!="#"+r&&(t.preventDefault(),t.stopPropagation(),i._hide(),window.setTimeout(function(){"_blank"==n?window.open(o):window.location.href=o},l.delay+10))})),i.on("touchstart",function(e){i.touchPosX=e.originalEvent.touches[0].pageX,i.touchPosY=e.originalEvent.touches[0].pageY}),i.on("touchmove",function(e){if(null!==i.touchPosX&&null!==i.touchPosY){var t=i.touchPosX-e.originalEvent.touches[0].pageX,a=i.touchPosY-e.originalEvent.touches[0].pageY,o=i.outerHeight(),n=i.get(0).scrollHeight-i.scrollTop();if(l.hideOnSwipe){var r=!1,s=20,p=50;switch(l.side){case"left":r=a<s&&a>-1*s&&t>p;break;case"right":r=a<s&&a>-1*s&&t<-1*p;break;case"top":r=t<s&&t>-1*s&&a>p;break;case"bottom":r=t<s&&t>-1*s&&a<-1*p}if(r)return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}(i.scrollTop()<0&&a<0||n>o-2&&n<o+2&&a>0)&&(e.preventDefault(),e.stopPropagation())}}),i.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),i.on("click",'a[href="#'+r+'"]',function(e){e.preventDefault(),e.stopPropagation(),l.target.removeClass(l.visibleClass)}),o.on("click touchend",function(e){i._hide(e)}),o.on("click",'a[href="#'+r+'"]',function(e){e.preventDefault(),e.stopPropagation(),l.target.toggleClass(l.visibleClass)}),l.hideOnEscape&&n.on("keydown",function(e){27==e.keyCode&&i._hide(e)}),i},e.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder)return e(this);if(0==this.length)return a;if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder();return a}var a=e(this);return a.find("input[type=text],textarea").each(function(){var t=e(this);""!=t.val()&&t.val()!=t.attr("placeholder")||t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")}),a.find("input[type=password]").each(function(){var t=e(this),a=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&a.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&a.attr("name",t.attr("name")+"-polyfill-field"),a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():a.hide(),t.on("blur",function(e){e.preventDefault();var a=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),a.show())}),a.on("focus",function(e){e.preventDefault();var t=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),a.val("")})}),a.on("submit",function(){a.find("input[type=text],input[type=password],textarea").each(function(t){var a=e(this);a.attr("name").match(/-polyfill-field$/)&&a.attr("name",""),a.val()==a.attr("placeholder")&&(a.removeClass("polyfill-placeholder"),a.val(""))})}).on("reset",function(t){t.preventDefault(),a.find("select").val(e("option:first").val()),a.find("input,textarea").each(function(){var t,a=e(this);switch(a.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":a.val(a.attr("defaultValue")),t=a.parent().find("input[name="+a.attr("name")+"-polyfill-field]"),""==a.val()?(a.hide(),t.show()):(a.show(),t.hide());break;case"checkbox":case"radio":a.attr("checked",a.attr("defaultValue"));break;case"text":case"textarea":a.val(a.attr("defaultValue")),""==a.val()&&(a.addClass("polyfill-placeholder"),a.val(a.attr("placeholder")));break;default:a.val(a.attr("defaultValue"))}})}),a},e.prioritize=function(t,a){var l="__prioritize";"jQuery"!=typeof t&&(t=e(t)),t.each(function(){var t,i=e(this),o=i.parent();if(0!=o.length)if(i.data(l)){if(a)return;t=i.data(l),i.insertAfter(t),i.removeData(l)}else{if(!a)return;if(t=i.prev(),0==t.length)return;i.prependTo(o),i.data(l,t)}})}}(jQuery);