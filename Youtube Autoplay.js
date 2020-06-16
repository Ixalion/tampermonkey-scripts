// ==UserScript==
// @name         Youtube autoplay
// @namespace    https://github.com/Ixalion/tampermonkey-scripts
// @version      0.2
// @description  try to take over the world!
// @author       Christopher Britt (Sukkubix)
// @match        https://www.youtube.com/watch*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;

    // Page load
    $(document).ready(function(){
        console.log("Load");

        function checkPopup() {
            let dialog = $("ytd-popup-container > paper-dialog");
            if(dialog.length > 0) {
                if(dialog.is(":visible")) {
                    console.log("Popup visible");
                    dialog.find("#confirm-button #button").trigger("click")
                }
            } else {
                console.log("Popup doesn't exist");
            }

            // Check for age warning
            if($("[aria-label='I understand and wish to proceed']").length > 0) {
                console.log("Bypassing age restriction");
                $("[aria-label='I understand and wish to proceed']").trigger("click");
            }
            setTimeout(checkPopup, 1000);
        }

        setTimeout(checkPopup, 1000);
    });
})();
