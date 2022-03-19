// ==UserScript==
// @name         pr0game Space Fren Background 
// @namespace    
// @version      0.1
// @description  Adds a nice Fren background image to the game.
// @author       Reginleifr
// @match        https://pr0game.com/*
// @updateURL    
// @downloadURL  
// @supportURL   
// @icon         https://pr0game.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        html {
            animation: movingbg 10s linear infinite;
        }
        @media {
            html {
                background-image: url("https://img.pr0gramm.com/2021/12/01/ea3a473d0bf82ca5.jpg");
            }
        }
        @keyframes movingbg {
            from {
                background-size: 102%;
            }
            50% {
                background-size: 102.5%;
            }
            to {
                background-size: 102%;
            }
        }
    `);
})();