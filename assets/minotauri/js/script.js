!function(a){var e,b=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(e,a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}}),a.fn.outerFind=function(a){return this.find(a).addBack(a)},a.fn.scrollEnd=function(b,c){a(this).scroll(function(){var d=a(this);d.data("scrollTimeout")&&clearTimeout(d.data("scrollTimeout")),d.data("scrollTimeout",setTimeout(b,c))})},a.fn.footerReveal=function(){var b=a(this),e=b.prev(),c=a(window),f=!!document.documentMode;function d(){!f&&b.outerHeight()<=c.outerHeight()?(b.css({"z-index":-999,position:"fixed",bottom:0}),b.css({width:e.outerWidth()}),e.css({"margin-bottom":b.outerHeight()})):(b.css({"z-index":"",position:"",bottom:""}),b.css({width:""}),e.css({"margin-bottom":""}))}return d(),c.on("load resize",function(){d()}),this},jQuery,e="smartresize",jQuery.fn[e]=function(a){var b,c,d,f;return a?this.bind("resize",(b=a,function(){var a=this,e=arguments;f?clearTimeout(f):d&&b.apply(a,e),f=setTimeout(function(){d||b.apply(a,e),f=null},c||100)})):this.trigger(e)},a.isMobile=function(b){var c=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return"*"==(b="undefined"==a.type(b)?"*":b.toLowerCase())?c=a.map(d,function(a){return a}):b in d&&c.push(d[b]),!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var f,c,g,h,k=(c=(f=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"))[0],g=parseInt(window.innerHeight/2,10),h=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,10),f.remove(),h==g);if(a(function(){function e(){a(this).css("height",9*a(this).parent().width()/16)}function c(b){setTimeout(function(){a(b).outerFind(".mnt-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}a("html").addClass(a.isMobile()?"mobile":"desktop"),a(window).scroll(function(){a(".mnt-navbar--sticky").each(function(){var b=a(window).scrollTop()>10?"addClass":"removeClass";a(this)[b]("mnt-navbar--stuck").not(".mnt-navbar--open")[b]("mnt-navbar--short")})}),a.isMobile()&&navigator.userAgent.match(/Chrome/i)?(f=a(window).width(),g=a(window).height(),(h=[f,f])[g>f?0:1]=g,a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,h)&&(b=h[a(window).width()>b?1:0]),a(".mnt-section--full-height").css("height",b+"px")})):k||(a(window).smartresize(function(){a(".mnt-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mnt-site-loaded")&&a(b.target).outerFind(".mnt-section--full-height").length&&a(window).resize()})),a(window).smartresize(function(){a(".mnt-section--16by9").each(e)}),a(document).on("add.cards changeParameter.cards",function(b){var c=a(b.target).outerFind(".mnt-section--16by9");c.length?c.attr("data-16by9","true").each(e):a(b.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")}),a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",function(b){setTimeout(function(){var b=a(".mnt-parallax-background");b.jarallax("coverImage"),b.jarallax("clipContainer"),b.jarallax("onScroll")},0)}),b?(a(document).on("add.cards",function(b){c(b.target),a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(b,e,d,f){if("bg"===e)switch(a(b.target).jarallax("destroy").css("position",""),f){case"type":case"parallax":!0===d.parallax&&c(b.target);break;case"value":"image"===d.type&& !0===d.parallax&&c(b.target)}a(window).trigger("update.parallax")})):c(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var f,g,h,i,j,l=0,m=null,n=!a.isMobile();function d(c){a(c).outerFind("[data-bg-video]").each(function(){var e=a(this).attr("data-bg-video"),c=e.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),f=a('<div class="mnt-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});if(a("> *:eq(0)",this).before(f),c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3]))){if(c&&/youtu\.?be/g.test(c[3])){var g="http"+("https:"===location.protocol?"s":"")+":";g+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg",a("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case"maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");break;default:b&&f.css("background-image",'url("images/no-video.jpg")').show()}}else f.css("background-image",'url("'+this.src+'")').show()}).attr("src",g),!a.fn.YTPlayer||b||a.isMobile()||a("> *:eq(1)",this).before('<div class="mnt-background-video"></div>').prev().YTPlayer({videoURL:c[6],containment:"self",showControls:!1,mute:!0})}else if(c&&/vimeo/g.test(c[3])){var d=new XMLHttpRequest;d.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0),d.onreadystatechange=function(){if(4===this.readyState){if(this.status>=200&&this.status<400){var a=JSON.parse(this.responseText);f.css("background-image",'url("'+a[0].thumbnail_large+'")').show()}else b&&f.css("background-image",'url("images/no-video.jpg")').show()}},d.send(),d=null,!a.fn.vimeo_player||b||a.isMobile()||a("> *:eq(1)",this).before('<div class="mnt-background-video"></div>').prev().vimeo_player({videoURL:e,containment:"self",showControls:!1,mute:!0})}}else b&&f.css("background-image",'url("images/video-placeholder.jpg")').show()})}a(window).scroll(function(){j&&clearTimeout(j);var b=a(window).scrollTop(),d=b<=l||n;if(l=b,m){var c=b>m.breakPoint;d?c!=m.fixed&&(n?(m.fixed=c,a(m.elm).toggleClass("is-fixed")):j=setTimeout(function(){m.fixed=c,a(m.elm).toggleClass("is-fixed")},40)):(m.fixed=!1,a(m.elm).removeClass("is-fixed"))}}),a(document).on("add.cards delete.cards",function(b){i&&clearTimeout(i),i=setTimeout(function(){m&&(m.fixed=!1,a(m.elm).removeClass("is-fixed")),a(".mnt-fixed-top:first").each(function(){m={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this},a(window).scroll()})},650)}),a(window).smartresize(function(){a(".mnt-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})}),a(document).on("add.cards",function(b){a("html").hasClass("mnt-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()}),b?a(document).on("add.cards",function(a){d(a.target)}):d(document.body),a(document).on("changeParameter.cards",function(b,e,c,f){if("bg"===e)switch(f){case"type":a(b.target).find(".mnt-background-video-preview").remove(),"video"===c.type&&d(b.target);break;case"value":"video"===c.type&&(a(b.target).find(".mnt-background-video-preview").remove(),d(b.target))}}),b||a("body > *:not(style, script)").trigger("add.cards"),a("html").addClass("mnt-site-loaded"),a(window).resize().scroll(),b||a(document).click(function(c){try{var b=c.target;if(a(b).parents().hasClass("carousel"))return;do if(b.hash){var d=/#bottom|#top/g.test(b.hash);a(d?"body":b.hash).each(function(){c.preventDefault();var d=a(b).parents().hasClass("navbar-fixed-top")?60:0,e="#bottom"==b.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:e},800,"easeInOutCubic")});break}while(b=b.parentNode)}catch(e){}}),a(".cols-same-height .mnt-figure").each(function(){var c=a(this),b=c.children("img"),e=c.parent(),f=b[0].width,g=b[0].height;function d(){if(b.css({width:"",maxWidth:"",marginLeft:""}),g&&f){var a=g/f;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var h=e.height()/e.width();if(h>a){var d=100*(h-a)/a;b.css({width:d+100+"%",maxWidth:d+100+"%",marginLeft:-d/2+"%"})}}}b.one("load",function(){f=b[0].width,g=b[0].height,d()}),a(window).on("resize",d),d()})}),b||(a.fn.socialLikes&&a(document).on("add.cards",function(b){a(b.target).outerFind(".mnt-social-likes").on("counter.social-likes",function(c,d,b){b>999&&a(".social-likes__counter",c.target).html(Math.floor(b/1e3)+"k")}).socialLikes({initHtml:!1})}),a(document).on("add.cards",function(b){a(b.target).hasClass("mnt-reveal")&&a(b.target).footerReveal()}),a(document).ready(function(){if(!a.isMobile()&&a("input[name=animation]").length){a("input[name=animation]").remove();var c=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mnt-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mnt-figure, .mnt-map, .mnt-testimonial .card-block, .mnt-price-value, .mnt-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is("a, p, .navbar, .mnt-arrow, footer, .iconbox, .mnt-slider, .mnt-gallery, .mnt-testimonial .card-block, #cookiesdirective, .mnt-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).not(function(){return a(this).parents().is("form")&&a(this).is("li")}).addClass("hidden animate__animated animate__delay-1s"),b=a(window);b.on("scroll resize",function(){var b=window.innerHeight,d=document.documentElement.scrollTop||document.body.scrollTop,e=d+b-100;a.each(c,function(){var b=a(this),c=b[0],g=c.offsetHeight,f=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a)return b}(c);(f+g>=d&&f-50<=e||function(a){if("none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animate__animated").lenght)return!1;if(b.attr("data-visible")>1){var c=b.attr("data-visible");return!!(a.parents().is(".cloneditem-"+(c-1))&&a.parents(".cloneditem-"+(c-1)).attr("data-cloned-index")>=c)||(a.removeClass("animate__animated animate__delay-1s hidden"),!1)}return!0}(b))&&b.hasClass("hidden")&&b.removeClass("hidden").addClass("animate__fadeInUp animate__delay-1s").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b.removeClass("animate__animated animate__delay-1s animate__fadeInUp")})})}),b.trigger("scroll")}}),a(".nav-dropdown").length&&a(".nav-dropdown").swipe({swipeLeft:function(b,c,d,e,f){a(".navbar-close").click()}})),a(document).ready(function(){if(a(".mnt-arrow-up").length){var b=a("#scrollToTop"),d=a("body,html"),c=a(window);b.css("display","none"),c.scroll(function(){var c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);a(this).scrollTop()>c/2-document.documentElement.clientHeight/2?b.fadeIn():b.fadeOut()}),b.click(function(){return d.animate({scrollTop:0},400),!1})}}),b||a(".mnt-arrow").on("click",function(c){var b=a(c.target).closest("section").next();b.hasClass("engine")&&(b=b.closest("section").next());var d=b.offset();a("html, body").stop().animate({scrollTop:d.top},800,"linear")}),a("nav.navbar").length){var i=a("nav.navbar").height();a(".mnt-after-navbar.mnt-fullscreen").css("padding-top",i+"px")}if(!b&&(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&a(document).on("add.cards",function(c){var b=a(c.target);b.hasClass("mnt-fullscreen")&&a(window).on("load resize",function(){b.css("height","auto"),b.outerHeight()<=a(window).height()&&b.css("height","1px")}),(b.hasClass("mnt-slider")||b.hasClass("mnt-gallery"))&&(b.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),b.hasClass("mnt-slider")&&b.find(".full-screen .slider-fullscreen-image").css("height","1px"))}),a(document).ready(function(){b||(a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a(this).attr("src","https://youtube.com/embed/"+c[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a(this).attr("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0")}),a("[data-modal]").click(function(){!function(b){var c=a(b).parents("section").find("iframe")[0],d=a(c).attr("src");if(b.parents("section").css("z-index","5000"),-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==d.indexOf("vimeo")){var e=new Vimeo.Player(a(c));e.play()}a(b).parents("section").find(a(b).attr("data-modal")).css("display","table").click(function(){-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==d.indexOf("vimeo")&&e.pause(),a(this).css("display","none").off("click"),b.parents("section").css("z-index","0")})}(a(this))}))}),!b&&!a.isMobile()){var d=a("section.menu"),j=a(window).width();d.find(".navbar").hasClass("collapsed")||j>991&&(d.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}),d.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}function l(d){var b=a(d),c=b.attr("ID")+"-carousel";b.find(".carousel").attr("id",c),b.find(".carousel-controls a").attr("href","#"+c),b.find(".carousel-indicators li").attr("data-target","#"+c),function(b){a(b).find(".carousel-item:first").addClass("active")}(b)}function m(a){a.stopPropagation(),a.preventDefault()}(b||(void 0===window.initClientPlugin&&0!=a(document.body).find(".clients").length&&(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(f,g){var e,b,d,c;a(this).attr("data-isinit")||(l(a(this)),e=a(this),b=a(e),d=b.find(".carousel-item").length,c=b.find(".carousel-inner").attr("data-visible"),d<c&&(c=d),b.find(".carousel-inner").attr("class","carousel-inner slides"+c),b.find(".clonedCol").remove(),b.find(".carousel-item .col-md-12").each(function(){c<2?a(this).attr("class","col-md-12"):"5"==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)}),b.find(".carousel-item").each(function(){for(var b=a(this),d=1;d<c;d++){(b=b.next()).length||(b=a(this).siblings(":first"));var e=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+d).addClass("clonedCol").attr("data-cloned-index",e).appendTo(a(this).children().eq(0))}}))})),void 0===window.initPopupBtnPlugin&&0!=a(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,a("section.popup-btn-cards .card-wrapper").each(function(b,c){a(this).addClass("popup-btn")})),void 0===window.initTestimonialsPlugin&&0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,a(".testimonials-slider").each(function(){l(this)})),void 0===window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,a(document).ready(function(){0!=a(".accordionStyles").length&&a('.accordionStyles .card-header a[role="button"]').each(function(){a(this).hasClass("collapsed")||a(this).addClass("collapsed")})}),a('.accordionStyles .card-header a[role="button"]').click(function(){var b=a(this).closest(".accordionStyles").attr("id");!a(this).closest(".card").find(".panel-collapse").hasClass("collapsing")&&(-1!=b.indexOf("toggle")?a(this).hasClass("collapsed")?a(this).find("span.sign").removeClass("mnti-arrow-down").addClass("mnti-arrow-up"):a(this).find("span.sign").removeClass("mnti-arrow-up").addClass("mnti-arrow-down"):-1!=b.indexOf("accordion")&&(a(this).closest(".accordionStyles ").children(".card").each(function(){a(this).find("span.sign").removeClass("mnti-arrow-up").addClass("mnti-arrow-down")}),a(this).hasClass("collapsed")&&a(this).find("span.sign").removeClass("mnti-arrow-down").addClass("mnti-arrow-up")))})),0!=a(".mnt-slider.carousel").length&&a(".mnt-slider.carousel").each(function(){var b=a(this),c=b.find(".carousel-control"),d=b.find(".carousel-indicators li");b.on("slide.bs.carousel",function(){c.bind("click",function(a){m(a)}),d.bind("click",function(a){m(a)}),b.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){c.unbind("click"),d.unbind("click"),b.carousel({keyboard:!0}),b.find(".carousel-item.active").length>1&&(b.find(".carousel-item.active").eq(1).removeClass("active"),b.find(".carousel-control li.active").eq(1).removeClass("active"))})})),b)?a(document).on("add.cards",function(c){if(a(c.target).find(".form-with-styler").length){var b=a(c.target).find(".form-with-styler");a(b).find('select:not("[multiple]")').each(function(){a(this).styler()}),a(b).find("input[type=number]").each(function(){a(this).styler(),a(this).parent().parent().removeClass("form-control")}),a(b).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(b).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})})}}):a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).styler()}),a(this).find("input[type=number]").each(function(){a(this).styler(),a(this).parent().parent().removeClass("form-control")}),navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)||!a(this).datetimepicker||(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",datepicker:!1})}))}),a(document).on("change",'input[type="range"]',function(b){a(b.target).parents(".form-group").find(".value")[0].innerHTML=b.target.value});var n=0;setInterval(function(){0==n?(a(".change-color-link").addClass("change-color-link-reverse").removeClass("change-color-link"),n=1):(a(".change-color-link-reverse").addClass("change-color-link").removeClass("change-color-link-reverse"),n=0)},600*Math.random()+700),a(document).ready(function(){a(".mnt-carousel-autoplay").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:900,pauseOnFocus:!1,pauseOnHover:!1,pauseOnClick:!1,draggable:!1}),a(".mnt-carousel-autoplay2").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:900,initialSlide:12,pauseOnFocus:!1,pauseOnHover:!1,pauseOnClick:!1,draggable:!1,rtl:!0})})}(jQuery)