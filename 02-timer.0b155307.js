const e=document.querySelector("[data-start]"),t=document.querySelector("[data-days]"),o=document.querySelector("[data-hours]"),n=document.querySelector("[data-minutes]"),a=document.querySelector("[data-seconds]"),c=new Date;let r="",s="";console.dir(t),e.disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0],r<c?window.alert("Please choose a date in the future"):e.disabled=!1}};flatpickr("#datetime-picker",d);function l(){s=r-c,console.log(s),0!==s?(s-=1e3,function(e){const{days:c,hours:r,minutes:s,seconds:d}=function(e){const t=1e3,o=60*t,n=60*o,a=24*n,c=Math.floor(e/a),r=Math.floor(e%a/n),s=Math.floor(e%a%n/o),d=Math.floor(e%a%n%o/t);return{days:c,hours:r,minutes:s,seconds:d}}(e);t.textContent=c,o.textContent=r,n.textContent=s,a.textContent=d}(s)):clearInterval(countDownID)}e.addEventListener("click",void setInterval(l(),1e3));
//# sourceMappingURL=02-timer.0b155307.js.map
