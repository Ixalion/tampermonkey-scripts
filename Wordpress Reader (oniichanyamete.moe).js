// ==UserScript==
// @name         Wordpress Reader (oniichanyamete.moe)
// @namespace    https://github.com/Ixalion/tampermonkey-scripts
// @version      0.1
// @description  Special Wordpress reader for oniichanyamete as due to covering multiple books, the previous/next buttons may not necessarily be the next chapter.
// @author       Christopher Britt (Sukkubix)
// @match        https://oniichanyamete.moe/*/*/*/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;

    // Page load
    $(document).ready(function(){
        var headerHeight = $(".site-header").height();
        console.log("Load");

        $(document).on("mousemove", function(event){
            if(event.clientY <= 5) {
                $(".site-header").slideDown();
            }
        });

        $(".site-header").on("mouseleave", function(){
            if(event.clientY >= 20) {
                $(".site-header").slideUp();
            }
        });


        $("#page").on("click", function(){
            let percentThreshold = 0.45;
            let nextThreshold = (1-percentThreshold)*$(document).width();
            let prevThreshold = percentThreshold*$(document).width();
            if(!$(event.target).parents().is(".site-header")) {
                if(event.pageX > nextThreshold) {
                    let href = $(".site-content .entry-content a:contains(Next Chapter)").attr("href");
                    if(href) {
                        window.location = href;
                    }
                } else if(event.pageX < prevThreshold) {
                    let href = $(".site-content .entry-content a:contains(Previous Chapter)").attr("href");
                    if(href) {
                        window.location = href;
                    }
                }
            }
        });
    });
})();
