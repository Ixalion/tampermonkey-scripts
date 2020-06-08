// ==UserScript==
// @name         Royal Road Reader Rework
// @namespace    https://github.com/Ixalion/tampermonkey-scripts
// @version      0.2
// @description  try to take over the world!
// @author       Christopher Britt (Sukkubix)
// @match        https://www.royalroad.com/fiction/*/*/chapter/*/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;

    // Page load
    $(document).ready(function(){
        var headerHeight = $(".page-header").height();
        console.log("Load");

        $(document).on("mousemove", function(event){
            if(event.clientY <= 5) {
                $(".page-header").slideDown();
            }
        });

        $(".page-header").on("mouseleave", function(){
            if(event.clientY >= 20) {
                $(".page-header").slideUp();
            }
        });

        $(".page-header .hor-menu > ul").append(
            $("<li>", {
                html: $("<a>",
                        {
                    text: "Toggle Controls"
                }
                       ).on("click", function(){
                    $(".page-container .chapter>.portlet-title, .page-container .chapter>.portlet-body>.nav-buttons, .page-container .chapter>.portlet-body>hr:first-of-type").toggle();
                })
            })
        )


        $(".page-container, .page-prefooter, .page-footer").on("click", function(){
            let percentThreshold = 0.45;
            let nextThreshold = (1-percentThreshold)*$(document).width();
            let prevThreshold = percentThreshold*$(document).width();
            if(!$(event.target).parents().is(".spoilerButton, .chapter > .portlet-title, .chapter > .portlet-body > .nav-buttons, #rewind-container")) {
                if(event.pageX > nextThreshold) {
                    let href = $(".chapter .nav-buttons > :nth-child(2) > a").attr("href");
                    if(href) {
                        window.location = href;
                    }
                } else if(event.pageX < prevThreshold) {
                    let href = $(".chapter .nav-buttons > :nth-child(1) > a").attr("href");
                    if(href) {
                        window.location = href;
                    }
                }
            }
        });
    });
})();
