(()=>{"use strict";function e(){let e="c620".split("").reverse().join(""),t=["2a2b27d9d","0bea63","6f3c17","e0dd8a","0fc"].join("").split("").join("").split("2a");return t[0]+t[1]+e}async function t(){console.log("clicked"),console.log("hey.... i am taking in location",location);try{const t=document.getElementById("city").value,n=document.getElementById("state").value,i=document.getElementById("country").value;console.log(t,n,i+".....value coming ");const o=document.getElementById("info1"),l=document.getElementById("info2"),c=document.getElementById("info3"),a=document.getElementById("info4"),s=document.getElementById("info5"),d=document.getElementById("info-header"),m=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+","+n+","+i+`&appid=${e()}`);console.log("checking api key",e()),console.log(m);const u=await m.json();console.log(u),d.textContent=t+", "+n+" "+i,o.textContent=`temp: ${Math.round(u.main.temp)}°C`,l.textContent=`feels_like: ${Math.round(u.main.feels_like)}°C`,c.textContent=`humidity: ${u.main.humidity}%`,a.textContent=`wind: ${Math.round(u.wind.speed)} MPH`,s.textContent=`weather: ${u.weather[0].description}`}catch(e){const t=document.querySelector("#message1");t.style.visibility="visible",t.textContent="can't find weather in your location. Try again!",console.log("something went wrong while fetching dat....",e.message)}}async function n(){try{const e=document.querySelector(".gifresponse"),t=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${function(){let e="LgC".split("").reverse().join(""),t=["2aacqF","EgQelT","Da9Soy","yq9QD","EWUJ9","wjZ"].join("").split("").join("").split("2a");return t[0]+t[1]+e}()}&s=clouds`,{mode:"cors"}),n=await t.json();e.src=n.data.images.original.url,console.log(n)}catch(e){}}(()=>{const e=document.getElementById("btn"),i=document.getElementById("clear-Btn"),o=document.querySelector(".resultdiv"),l=document.querySelector(".img-div");e.addEventListener("click",(()=>{t(),n(),o.style.visibility="visible",l.style.visibility="visible"})),i.addEventListener("click",(()=>{const e=document.getElementById("city"),t=document.getElementById("state"),n=document.getElementById("country");o.style.visibility="hidden",l.style.visibility="hidden",e.value="",t.value="",n.value=""}))})(),t(),n()})();