// ==UserScript==
// @name         Sukkubix's Webtoon Changes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to allow easy navigation of webtoons by clicking in the margin
// @author       Sukkubix
// @match        https://www.webtoons.com/*/viewer*
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $("#_imageList").on("click", function(){
        let percentThreshold = 0.25;
        let nextThreshold = (1-percentThreshold)*$(this).width();
        let prevThreshold = percentThreshold*$(this).width();
        if(event.pageX > nextThreshold) {
            if($("a[title='Next Episode']").attr("href")) {
                window.location = $("a[title='Next Episode']").attr("href");
            }
        } else if(event.pageX < prevThreshold) {
            if($("a[title='Previous Episode']").attr("href")) {
                window.location = $("a[title='Previous Episode']").attr("href");
            }
        }
    })
})();
