! function(t) {
    
    var e, i = t("html").hasClass("is-builder");
    t.extend(t.easing, {
        easeInOutCubic: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        }
    }), t.fn.outerFind = function(t) {
        return this.find(t).addBack(t)
    }, t.fn.scrollEnd = function(e, i) {
        t(this).scroll(function() {
            var n = t(this);
            n.data("scrollTimeout") && clearTimeout(n.data("scrollTimeout")), n.data("scrollTimeout", setTimeout(e, i))
        })
    }, t.fn.footerReveal = function() {
        var e = t(this),
            i = e.prev(),
            n = t(window),
            a = !!document.documentMode;

        function o() {
            !a && e.outerHeight() <= n.outerHeight() ? (e.css({
                "z-index": -999,
                position: "fixed",
                bottom: 0
            }), e.css({
                width: i.outerWidth()
            }), i.css({
                "margin-bottom": e.outerHeight()
            })) : (e.css({
                "z-index": "",
                position: "",
                bottom: ""
            }), e.css({
                width: ""
            }), i.css({
                "margin-bottom": ""
            }))
        }
        return o(), n.on("load resize", function() {
            o()
        }), this
    }, jQuery, e = "smartresize", jQuery.fn[e] = function(t) {
        return t ? this.bind("resize", (i = t, function() {
            var t = this,
                e = arguments;
            o ? clearTimeout(o) : a && i.apply(t, e), o = setTimeout(function() {
                a || i.apply(t, e), o = null
            }, n || 100)
        })) : this.trigger(e);
        var i, n, a, o
    }, t.isMobile = function(e) {
        var i = [],
            n = {
                blackberry: "BlackBerry",
                android: "Android",
                windows: "IEMobile",
                opera: "Opera Mini",
                ios: "iPhone|iPad|iPod"
            };
        return "*" == (e = "undefined" == t.type(e) ? "*" : e.toLowerCase()) ? i = t.map(n, function(t) {
            return t
        }) : e in n && i.push(n[e]), !(!i.length || !navigator.userAgent.match(new RegExp(i.join("|"), "i")))
    };
    var n, a, o, s, r = (n = t('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"), a = n[0], o = parseInt(window.innerHeight / 2, 10), s = parseInt((window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).height, 10), n.remove(), s == o);
    if (t(function() {
            var e, n, a;

            function o() {
                t(this).css("height", 9 * t(this).parent().width() / 16)
            }

            function s(e) {
                setTimeout(function() {
                    t(e).outerFind(".mnt-parallax-background").jarallax({
                        speed: .6
                    }).css("position", "relative")
                }, 0)
            }
            t("html").addClass(t.isMobile() ? "mobile" : "desktop"), t(window).scroll(function() {
                t(".mnt-navbar--sticky").each(function() {
                    var e = t(window).scrollTop() > 10 ? "addClass" : "removeClass";
                    t(this)[e]("mnt-navbar--stuck").not(".mnt-navbar--open")[e]("mnt-navbar--short")
                })
            }), t.isMobile() && navigator.userAgent.match(/Chrome/i) ? (e = t(window).width(), n = t(window).height(), (a = [e, e])[n > e ? 0 : 1] = n, t(window).smartresize(function() {
                var e = t(window).height();
                t.inArray(e, a) < 0 && (e = a[t(window).width() > e ? 1 : 0]), t(".mnt-section--full-height").css("height", e + "px")
            })) : r || (t(window).smartresize(function() {
                t(".mnt-section--full-height").css("height", t(window).height() + "px")
            }), t(document).on("add.cards", function(e) {
                t("html").hasClass("mnt-site-loaded") && t(e.target).outerFind(".mnt-section--full-height").length && t(window).resize()
            })), t(window).smartresize(function() {
                t(".mnt-section--16by9").each(o)
            }), t(document).on("add.cards changeParameter.cards", function(e) {
                var i = t(e.target).outerFind(".mnt-section--16by9");
                i.length ? i.attr("data-16by9", "true").each(o) : t(e.target).outerFind("[data-16by9]").css("height", "").removeAttr("data-16by9")
            }), t.fn.jarallax && !t.isMobile() && (t(window).on("update.parallax", function(e) {
                setTimeout(function() {
                    var e = t(".mnt-parallax-background");
                    e.jarallax("coverImage"), e.jarallax("clipContainer"), e.jarallax("onScroll")
                }, 0)
            }), i ? (t(document).on("add.cards", function(e) {
                s(e.target), t(window).trigger("update.parallax")
            }), t(document).on("changeParameter.cards", function(e, i, n, a) {
                if ("bg" === i) switch (o = e.target, t(o).jarallax("destroy").css("position", ""), a) {
                    case "type":
                        !0 === n.parallax && s(e.target);
                        break;
                    case "value":
                        "image" === n.type && !0 === n.parallax && s(e.target);
                        break;
                    case "parallax":
                        !0 === n.parallax && s(e.target)
                }
                var o;
                t(window).trigger("update.parallax")
            })) : s(document.body), t(window).on("shown.bs.tab", function(e) {
                t(window).trigger("update.parallax")
            }));
            var c, d, l = 0,
                u = null,
                h = !t.isMobile();

            function m(e) {
                t(e).outerFind("[data-bg-video]").each(function() {
                    var e = t(this).attr("data-bg-video"),
                        n = e.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
                        a = t('<div class="mnt-background-video-preview">').hide().css({
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        });
                    if (t("> *:eq(0)", this).before(a), n && (/youtu\.?be/g.test(n[3]) || /vimeo/g.test(n[3]))) {
                        if (n && /youtu\.?be/g.test(n[3])) {
                            var o = "http" + ("https:" === location.protocol ? "s" : "") + ":";
                            o += "//img.youtube.com/vi/" + n[6] + "/maxresdefault.jpg", t("<img>").on("load", function() {
                                if (120 === (this.naturalWidth || this.width)) {
                                    var t = this.src.split("/").pop();
                                    switch (t) {
                                        case "maxresdefault.jpg":
                                            this.src = this.src.replace(t, "sddefault.jpg");
                                            break;
                                        case "sddefault.jpg":
                                            this.src = this.src.replace(t, "hqdefault.jpg");
                                            break;
                                        default:
                                            i && a.css("background-image", 'url("images/no-video.jpg")').show()
                                    }
                                } else a.css("background-image", 'url("' + this.src + '")').show()
                            }).attr("src", o), !t.fn.YTPlayer || i || t.isMobile() || t("> *:eq(1)", this).before('<div class="mnt-background-video"></div>').prev().YTPlayer({
                                videoURL: n[6],
                                containment: "self",
                                showControls: !1,
                                mute: !0
                            })
                        } else if (n && /vimeo/g.test(n[3])) {
                            var s = new XMLHttpRequest;
                            s.open("GET", "https://vimeo.com/api/v2/video/" + n[6] + ".json", !0), s.onreadystatechange = function() {
                                if (4 === this.readyState)
                                    if (this.status >= 200 && this.status < 400) {
                                        var t = JSON.parse(this.responseText);
                                        a.css("background-image", 'url("' + t[0].thumbnail_large + '")').show()
                                    } else i && a.css("background-image", 'url("images/no-video.jpg")').show()
                            }, s.send(), s = null, !t.fn.vimeo_player || i || t.isMobile() || t("> *:eq(1)", this).before('<div class="mnt-background-video"></div>').prev().vimeo_player({
                                videoURL: e,
                                containment: "self",
                                showControls: !1,
                                mute: !0
                            })
                        }
                    } else i && a.css("background-image", 'url("images/video-placeholder.jpg")').show()
                })
            }
            t(window).scroll(function() {
                d && clearTimeout(d);
                var e = t(window).scrollTop(),
                    i = e <= l || h;
                if (l = e, u) {
                    var n = e > u.breakPoint;
                    i ? n != u.fixed && (h ? (u.fixed = n, t(u.elm).toggleClass("is-fixed")) : d = setTimeout(function() {
                        u.fixed = n, t(u.elm).toggleClass("is-fixed")
                    }, 40)) : (u.fixed = !1, t(u.elm).removeClass("is-fixed"))
                }
            }), t(document).on("add.cards delete.cards", function(e) {
                c && clearTimeout(c), c = setTimeout(function() {
                    u && (u.fixed = !1, t(u.elm).removeClass("is-fixed")), t(".mnt-fixed-top:first").each(function() {
                        u = {
                            breakPoint: t(this).offset().top + 3 * t(this).height(),
                            fixed: !1,
                            elm: this
                        }, t(window).scroll()
                    })
                }, 650)
            }), t(window).smartresize(function() {
                t(".mnt-embedded-video").each(function() {
                    t(this).height(t(this).width() * parseInt(t(this).attr("height") || 315) / parseInt(t(this).attr("width") || 560))
                })
            }), t(document).on("add.cards", function(e) {
                t("html").hasClass("mnt-site-loaded") && t(e.target).outerFind("iframe").length && t(window).resize()
            }), i ? t(document).on("add.cards", function(t) {
                m(t.target)
            }) : m(document.body), t(document).on("changeParameter.cards", function(e, i, n, a) {
                if ("bg" === i) switch (a) {
                    case "type":
                        t(e.target).find(".mnt-background-video-preview").remove(), "video" === n.type && m(e.target);
                        break;
                    case "value":
                        "video" === n.type && (t(e.target).find(".mnt-background-video-preview").remove(), m(e.target))
                }
            }), i || t("body > *:not(style, script)").trigger("add.cards"), t("html").addClass("mnt-site-loaded"), t(window).resize().scroll(), i || t(document).click(function(e) {
                try {
                    var i = e.target;
                    if (t(i).parents().hasClass("carousel")) return;
                    do {
                        if (i.hash) {
                            var n = /#bottom|#top/g.test(i.hash);
                            t(n ? "body" : i.hash).each(function() {
                                e.preventDefault();
                                var n = t(i).parents().hasClass("navbar-fixed-top") ? 60 : 0,
                                    a = "#bottom" == i.hash ? t(this).height() - t(window).height() : t(this).offset().top - n;
                                t(this).hasClass("panel-collapse") || t(this).hasClass("tab-pane") || t("html, body").stop().animate({
                                    scrollTop: a
                                }, 800, "easeInOutCubic")
                            });
                            break
                        }
                    } while (i = i.parentNode)
                } catch (e) {}
            }), t(".cols-same-height .mnt-figure").each(function() {
                var e = t(this),
                    i = e.children("img"),
                    n = e.parent(),
                    a = i[0].width,
                    o = i[0].height;

                function s() {
                    if (i.css({
                            width: "",
                            maxWidth: "",
                            marginLeft: ""
                        }), o && a) {
                        var t = o / a;
                        e.addClass({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        });
                        var s = n.height() / n.width();
                        if (s > t) {
                            var r = 100 * (s - t) / t;
                            i.css({
                                width: r + 100 + "%",
                                maxWidth: r + 100 + "%",
                                marginLeft: -r / 2 + "%"
                            })
                        }
                    }
                }
                i.one("load", function() {
                    a = i[0].width, o = i[0].height, s()
                }), t(window).on("resize", s), s()
            })
        }), i || (t.fn.socialLikes && t(document).on("add.cards", function(e) {
            t(e.target).outerFind(".mnt-social-likes").on("counter.social-likes", function(e, i, n) {
                n > 999 && t(".social-likes__counter", e.target).html(Math.floor(n / 1e3) + "k")
            }).socialLikes({
                initHtml: !1
            })
        }), t(document).on("add.cards", function(e) {
            t(e.target).hasClass("mnt-reveal") && t(e.target).footerReveal()
        }), t(document).ready(function() {
            if (!t.isMobile() && t("input[name=animation]").length) {
                t("input[name=animation]").remove();
                var e = t("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mnt-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mnt-figure, .mnt-map, .mnt-testimonial .card-block, .mnt-price-value, .mnt-price-figure, .dataTable, .dataTables_info").not(function() {
                    return t(this).parents().is("a, p, .navbar, .mnt-arrow, footer, .iconbox, .mnt-slider, .mnt-gallery, .mnt-testimonial .card-block, #cookiesdirective, .mnt-wowslider, .accordion, .tab-content, .engine, #scrollToTop")
                }).not(function() {
                    return t(this).parents().is("form") && t(this).is("li")
                }).addClass("hidden animate__animated animate__delay-1s");
                var i = t(window);
                i.on("scroll resize", function() {
                    var i = window.innerHeight,
                        n = document.documentElement.scrollTop || document.body.scrollTop,
                        a = n + i - 100;
                    t.each(e, function() {
                        var e = t(this),
                            i = e[0],
                            o = i.offsetHeight,
                            s = function(t) {
                                var e = 0;
                                do {
                                    e += t.offsetTop || 0, t = t.offsetParent
                                } while (t);
                                return e
                            }(i);
                        (s + o >= n && s - 50 <= a || function(t) {
                            if ("none" !== t.parents(".carousel-item").css("display")) return !1;
                            var e = t.parents(".carousel-item").parent();
                            if (e.find(".carousel-item.active .hidden.animate__animated").lenght) return !1;
                            if (e.attr("data-visible") > 1) {
                                var i = e.attr("data-visible");
                                return !!(t.parents().is(".cloneditem-" + (i - 1)) && t.parents(".cloneditem-" + (i - 1)).attr("data-cloned-index") >= i) || (t.removeClass("animate__animated animate__delay-1s hidden"), !1)
                            }
                            return !0
                        }(e)) && e.hasClass("hidden") && e.removeClass("hidden").addClass("animate__fadeInUp animate__delay-1s").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                            e.removeClass("animate__animated animate__delay-1s animate__fadeInUp")
                        })
                    })
                }), i.trigger("scroll")
            }
        }), t(".nav-dropdown").length && t(".nav-dropdown").swipe({
            swipeLeft: function(e, i, n, a, o) {
                t(".navbar-close").click()
            }
        })), t(document).ready(function() {
            if (t(".mnt-arrow-up").length) {
                var e = t("#scrollToTop"),
                    i = t("body,html"),
                    n = t(window);
                e.css("display", "none"), n.scroll(function() {
                    var i = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                    t(this).scrollTop() > i / 2 - document.documentElement.clientHeight / 2 ? e.fadeIn() : e.fadeOut()
                }), e.click(function() {
                    return i.animate({
                        scrollTop: 0
                    }, 400), !1
                })
            }
        }), i || t(".mnt-arrow").on("click", function(e) {
            var i = t(e.target).closest("section").next();
            i.hasClass("engine") && (i = i.closest("section").next());
            var n = i.offset();
            t("html, body").stop().animate({
                scrollTop: n.top
            }, 800, "linear")
        }), t("nav.navbar").length) {
        var c = t("nav.navbar").height();
        t(".mnt-after-navbar.mnt-fullscreen").css("padding-top", c + "px")
    }
    if (!i && (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && t(document).on("add.cards", function(e) {
            var i = t(e.target);
            i.hasClass("mnt-fullscreen") && t(window).on("load resize", function() {
                i.css("height", "auto"), i.outerHeight() <= t(window).height() && i.css("height", "1px")
            }), (i.hasClass("mnt-slider") || i.hasClass("mnt-gallery")) && (i.find(".carousel-indicators").addClass("ie-fix").find("li").css({
                display: "inline-block",
                width: "30px"
            }), i.hasClass("mnt-slider") && i.find(".full-screen .slider-fullscreen-image").css("height", "1px"))
        }), t(document).ready(function() {
            if (!i) {
                t(".modalWindow-video iframe").each(function() {
                    var e = t(this).attr("data-src");
                    t(this).removeAttr("data-src");
                    var i = e.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/); - 1 !== e.indexOf("youtu") ? t(this).attr("src", "https://youtube.com/embed/" + i[6] + "?rel=0&enablejsapi=1") : -1 !== e.indexOf("vimeo") && t(this).attr("src", "https://player.vimeo.com/video/" + i[6] + "?autoplay=0&loop=0")
                }), t("[data-modal]").click(function() {
                    ! function(e) {
                        var i = t(e).parents("section").find("iframe")[0],
                            n = t(i).attr("src");
                        if (e.parents("section").css("z-index", "5000"), -1 !== n.indexOf("youtu") && i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"), -1 !== n.indexOf("vimeo")) {
                            var a = new Vimeo.Player(t(i));
                            a.play()
                        }
                        t(e).parents("section").find(t(e).attr("data-modal")).css("display", "table").click(function() {
                            -1 !== n.indexOf("youtu") && i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"), -1 !== n.indexOf("vimeo") && a.pause(), t(this).css("display", "none").off("click"), e.parents("section").css("z-index", "0")
                        })
                    }(t(this))
                })
            }
        }), !i && !t.isMobile()) {
        var d = t("section.menu"),
            l = t(window).width();
        d.find(".navbar").hasClass("collapsed") || l > 991 && (d.find("ul.navbar-nav li.dropdown").hover(function() {
            t(this).hasClass("open") || t(this).find("a")[0].click()
        }, function() {
            t(this).hasClass("open") && t(this).find("a")[0].click()
        }), d.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function() {
            t(this).hasClass("open") || t(this).find("a")[0].click()
        }, function() {
            t(this).hasClass("open") && t(this).find("a")[0].click()
        }))
    }

    function u(e) {
        var i = t(e),
            n = i.attr("ID") + "-carousel";
        i.find(".carousel").attr("id", n), i.find(".carousel-controls a").attr("href", "#" + n), i.find(".carousel-indicators li").attr("data-target", "#" + n),
            function(e) {
                t(e).find(".carousel-item:first").addClass("active")
            }(i)
    }

    function h(t) {
        t.stopPropagation(), t.preventDefault()
    }
    if (i || (void 0 === window.initClientPlugin && 0 != t(document.body).find(".clients").length && (window.initClientPlugin = !0, t(document.body).find(".clients").each(function(e, i) {
            var n, a, o, s;
            t(this).attr("data-isinit") || (u(t(this)), n = t(this), a = t(n), o = a.find(".carousel-item").length, s = a.find(".carousel-inner").attr("data-visible"), o < s && (s = o), a.find(".carousel-inner").attr("class", "carousel-inner slides" + s), a.find(".clonedCol").remove(), a.find(".carousel-item .col-md-12").each(function() {
                s < 2 ? t(this).attr("class", "col-md-12") : "5" == s ? t(this).attr("class", "col-md-12 col-lg-15") : t(this).attr("class", "col-md-12 col-lg-" + 12 / s)
            }), a.find(".carousel-item").each(function() {
                for (var e = t(this), i = 1; i < s; i++) {
                    (e = e.next()).length || (e = t(this).siblings(":first"));
                    var n = e.index();
                    e.find(".col-md-12:first").clone().addClass("cloneditem-" + i).addClass("clonedCol").attr("data-cloned-index", n).appendTo(t(this).children().eq(0))
                }
            }))
        })), void 0 === window.initPopupBtnPlugin && 0 != t(document.body).find("section.popup-btn-cards").length && (window.initPopupBtnPlugin = !0, t("section.popup-btn-cards .card-wrapper").each(function(e, i) {
            t(this).addClass("popup-btn")
        })), void 0 === window.initTestimonialsPlugin && 0 != t(document.body).find(".testimonials-slider").length && (window.initTestimonialsPlugin = !0, t(".testimonials-slider").each(function() {
            u(this)
        })), void 0 === window.initSwitchArrowPlugin && (window.initSwitchArrowPlugin = !0, t(document).ready(function() {
            0 != t(".accordionStyles").length && t('.accordionStyles .card-header a[role="button"]').each(function() {
                t(this).hasClass("collapsed") || t(this).addClass("collapsed")
            })
        }), t('.accordionStyles .card-header a[role="button"]').click(function() {
            var e = t(this).closest(".accordionStyles").attr("id");
            if (!t(this).closest(".card").find(".panel-collapse").hasClass("collapsing"))
                if (-1 != e.indexOf("toggle")) t(this).hasClass("collapsed") ? t(this).find("span.sign").removeClass("mnti-arrow-down").addClass("mnti-arrow-up") : t(this).find("span.sign").removeClass("mnti-arrow-up").addClass("mnti-arrow-down");
                else if (-1 != e.indexOf("accordion")) {
                t(this).closest(".accordionStyles ").children(".card").each(function() {
                    t(this).find("span.sign").removeClass("mnti-arrow-up").addClass("mnti-arrow-down")
                }), t(this).hasClass("collapsed") && t(this).find("span.sign").removeClass("mnti-arrow-down").addClass("mnti-arrow-up")
            }
        })), 0 != t(".mnt-slider.carousel").length && t(".mnt-slider.carousel").each(function() {
            var e = t(this),
                i = e.find(".carousel-control"),
                n = e.find(".carousel-indicators li");
            e.on("slide.bs.carousel", function() {
                i.bind("click", function(t) {
                    h(t)
                }), n.bind("click", function(t) {
                    h(t)
                }), e.carousel({
                    keyboard: !1
                })
            }).on("slid.bs.carousel", function() {
                i.unbind("click"), n.unbind("click"), e.carousel({
                    keyboard: !0
                }), e.find(".carousel-item.active").length > 1 && (e.find(".carousel-item.active").eq(1).removeClass("active"), e.find(".carousel-control li.active").eq(1).removeClass("active"))
            })
        })), i) t(document).on("add.cards", function(e) {
        if (t(e.target).find(".form-with-styler").length) {
            var i = t(e.target).find(".form-with-styler");
            t(i).find('select:not("[multiple]")').each(function() {
                t(this).styler()
            }), t(i).find("input[type=number]").each(function() {
                t(this).styler(), t(this).parent().parent().removeClass("form-control")
            }), t(i).find("input[type=date]").each(function() {
                t(this).datetimepicker && t(this).datetimepicker({
                    format: "Y-m-d",
                    timepicker: !1
                })
            }), t(i).find("input[type=time]").each(function() {
                t(this).datetimepicker && t(this).datetimepicker({
                    format: "H:i",
                    datepicker: !1
                })
            })
        }
    });
    else {
        t("section .form-with-styler").each(function() {
            t(this).find('select:not("[multiple]")').each(function() {
                t(this).styler()
            }), t(this).find("input[type=number]").each(function() {
                t(this).styler(), t(this).parent().parent().removeClass("form-control")
            }), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Firefox/i) || !t(this).datetimepicker || (t(this).find("input[type=date]").each(function() {
                t(this).datetimepicker({
                    format: "Y-m-d",
                    timepicker: !1
                })
            }), t(this).find("input[type=time]").each(function() {
                t(this).datetimepicker({
                    format: "H:i",
                    datepicker: !1
                })
            }))
        })
    }
    t(document).on("change", 'input[type="range"]', function(e) {
        t(e.target).parents(".form-group").find(".value")[0].innerHTML = e.target.value
    });
    var m = 0;
    setInterval(function() {
        0 == m ? (t(".change-color-link").addClass("change-color-link-reverse").removeClass("change-color-link"), m = 1) : (t(".change-color-link-reverse").addClass("change-color-link").removeClass("change-color-link-reverse"), m = 0)
    }, 600 * Math.random() + 700), t(document).ready(function() {
        t(".mnt-carousel-autoplay").slick({
            arrows: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 900,
            pauseOnFocus: !1,
            pauseOnHover: !1,
            pauseOnClick: !1,
            draggable: !1
        }), t(".mnt-carousel-autoplay2").slick({
            arrows: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 900,
            initialSlide: 12,
            pauseOnFocus: !1,
            pauseOnHover: !1,
            pauseOnClick: !1,
            draggable: !1,
            rtl: !0
        })
    })
    setInterval(function() {
        console.log("hello")
        fetch("https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/mints?asset_identifier=SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.minotauri-nft::MinoTauri")
            .then(response => response.json())
            .then(data => $('.mnt-minted.minted-number').html(data.total + "/2500"));
    }, 1000);

}(jQuery);