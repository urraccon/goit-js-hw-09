const e=document.querySelector(".form");let o=0,t=0;function r(e,o,t,r){Math.random()>.3?setTimeout((()=>{window.alert(`✅ Fulfilled promise ${e} in ${o}ms`)}),o):setTimeout((()=>{window.alert(`❌ Rejected promise ${e} in ${o}ms`)}),o)}e.addEventListener("submit",(e=>{e.preventDefault(),console.dir(e);const s=e.target[0].valueAsNumber,l=e.target[1].valueAsNumber,n=e.target[2].valueAsNumber;console.log(s,l,n);for(let e=1;e<=n;e++)o=e,t+=l,1===o&&(t=s),new Promise((e=>{e(r(o,t))})).then((()=>{console.log("The promise was made")})).catch((()=>{console.log("The promise couldn't be made")}))}));
//# sourceMappingURL=03-promises.28a2703c.js.map
