// ==UserScript==
// @name         Sukkubix's Funimation Player Viewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to maximize the funimation player on page load
// @author       Sukkubix
// @match        https://www.funimation.com/shows/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function goToPlayerScreen(){
        if(document.getElementById("player")) {
            window.location = document.getElementById("player").getAttribute("src");
        } else {
            setTimeout(goToPlayerScreen, 100);
        }
    }

    setTimeout(goToPlayerScreen, 100);
})();
