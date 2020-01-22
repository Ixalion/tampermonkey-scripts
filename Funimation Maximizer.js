// ==UserScript==
// @name         Sukkubix's Funimation Maximizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to maximize the funimation player on page load
// @author       Sukkubix
// @match        https://www.funimation.com/player/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function checkNextEpisode(){
        if(document.getElementById("funimation-play-next")) {
            document.getElementById("funimation-play-next").click();
            console.log("Going to next episode");
        } else {
            setTimeout(checkNextEpisode, 100);
        }
    }

    function checkFullScreenUpdate(){
        if(document.getElementById("funimation-control-fullscreen")) {
            setTimeout(function(){
                console.log("Maximized, enjoy the show!");
                document.getElementById("funimation-control-fullscreen").click();
            }, 1000);
        } else {
            console.log("Maximize delaying");
            setTimeout(checkFullScreenUpdate, 100);
        }
    }

    setTimeout(checkFullScreenUpdate, 100);
})();
