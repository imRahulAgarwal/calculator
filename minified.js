let icon=document.querySelector(".myIcon");icon.addEventListener("click",(()=>{document.querySelector(".history").classList.toggle("expand"),icon.classList.toggle("come"),document.querySelector(".all").classList.toggle("blur"),document.querySelector(".inputNumber").classList.toggle("blur")}));let buttons=document.querySelectorAll(".button");for(let e=0;e<buttons.length;e++){let t=buttons[e];t.addEventListener("click",(()=>{let e=document.querySelector("#inputNum");"BS"==t.value?backspace(e):"C"==t.value?erase(e):"="==t.value?calculateResult(e):append(e,t)}))}function append(e,t){e.value+=t.value}function erase(e){e.value="",console.clear()}function backspace(e){let t=e.value;e.value=t.substring(0,t.length-1)}function calculateResult(myInput){let result=eval(myInput.value);null==result?alert("Perform operations"):(history(myInput.value,result),myInput.value=result)}function history(e,t){document.querySelector(".history").innerHTML+="<div class='myText'>"+formatExpression(e)+" = "+t+"</div>"}function formatExpression(e){let t="";for(let l=0;l<e.length;l++)"+"==e[l]||"-"==e[l]||"*"==e[l]||"/"==e[l]?t=t+" "+e[l]+" ":t+=e[l];return t}