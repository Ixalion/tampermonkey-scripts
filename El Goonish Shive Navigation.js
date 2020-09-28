// ==UserScript==
// @name         El Goonish Shive Navigation
// @namespace    https://github.com/Ixalion/tampermonkey-scripts
// @version      0.1
// @description  Manages navigation by clicking on the right/left sides of the screen. 
// @author       Christopher Britt (Sukkubix)
// @match        https://www.egscomics.com/comic/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;

    // Page load
    $(document).ready(function(){
        $("body").on("click", function(){
            let percentThreshold = 0.45;
            let nextThreshold = (1-percentThreshold)*$(document).width();
            let prevThreshold = percentThreshold*$(document).width();

            if(!$(event.target).parents().is(".not-a-class") && !$(event.target).is(".not-a-class")) {
                if(event.pageX > nextThreshold) {
                    let href = $("#leftarea> .cc-nav:first-of-type > a.cc-next").attr("href");
                    if(href) {
                        window.location = href;
                    }
                } else if(event.pageX < prevThreshold) {
                    let href = $("#leftarea> .cc-nav:first-of-type > a.cc-prev").attr("href");
                    if(href) {
                        window.location = href;
                    }
                }
            }
        });
    });
})();
