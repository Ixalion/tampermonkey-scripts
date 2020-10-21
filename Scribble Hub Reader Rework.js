// ==UserScript==
// @name         Scribble Hub Reader Rework
// @namespace    https://github.com/Ixalion/tampermonkey-scripts
// @version      0.2
// @description  try to take over the world!
// @author       Christopher Britt (Sukkubix)
// @match        https://www.scribblehub.com/read/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;

    // Page load
    $(document).ready(function(){
        var headerHeight = $(".writeit-header").height();
        console.log("Load");

        $(document).on("mousemove", function(event){
            if(event.clientY <= 5) {
                $(".writeit-header").slideDown();
            }
        });

        $(".writeit-header").on("mouseleave", function(){
            if(event.clientY >= 20) {
                $(".writeit-header").slideUp();
            }
        });


        $("#page").on("click", function(){
            let percentThreshold = 0.45;
            let nextThreshold = (1-percentThreshold)*$(document).width();
            let prevThreshold = percentThreshold*$(document).width();

            if(!$(event.target).parents().is(".spoiler, .pollstart") && !$(event.target).is(".spoiler")) {
                if(event.pageX > nextThreshold) {
                    let href = $(".next_nav_links > .btn-next").attr("href");
                    if(href) {
                        window.location = href;
                    }
                } else if(event.pageX < prevThreshold) {
                    let href = $(".next_nav_links > .btn-prev").attr("href");
                    if(href) {
                        window.location = href;
                    }
                }
            }
        });
    });
})();
