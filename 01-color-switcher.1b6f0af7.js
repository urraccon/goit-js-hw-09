!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body"),d="";function n(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}console.dir(e),console.dir(t),console.dir(o),e.addEventListener("click",(function(){d=setInterval(n,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1b6f0af7.js.map