var r="twaAddClassForm",l="twaAddClassInput";function U(e){e.classList.add(document.getElementById(l).value),q()}function w(e){document.getElementById(r).addEventListener("submit",function(t){t.preventDefault(),U(e)})}function q(){document.getElementById(l).value=""}var d="twaClassInputsRender";function E(){return[...document.querySelectorAll("[data-class]")]}function I(e){H(),e.forEach(function(t){document.getElementById(d).innerHTML+=F(t)})}function y(e){E().forEach(t=>{t.addEventListener("input",()=>{e.classList.toggle(t.name),document.querySelector(`[for='${t.id}']`).classList.toggle("opacity-25")})})}function H(){document.getElementById(d).innerHTML=""}function F(e){return`
    <div class="flex items-center">
        <input type="checkbox" id="${e}" name="${e}" checked data-class class="sr-only peer" />

        <label
            for="${e}"
            class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
        >
            <span class="select-none text-xs leading-none font-medium">${e}</span>
        </label>
    </div>
    `}var c={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},C=Object.values(c);function h(){let e=window.innerWidth,t=Object.keys(c).filter(n=>n<e).at(-1);return c[t]||"Default"}function v(e){return{"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))}}var p="twaBreakpointInputsRender";function b(){return[...document.querySelectorAll("[data-breakpoint]")]}function P(){j(),C.forEach(function(e){document.getElementById(p).innerHTML+=K(e)})}function k(e,t){b().forEach(n=>{n.addEventListener("input",()=>{document.querySelector(`[for='${n.getAttribute("id")}']`).classList.toggle("opacity-25"),t[n.name].forEach(function(o){e.classList.toggle(o),document.querySelector(`[for='${o}']`).classList.toggle("opacity-25")})})})}function j(){document.getElementById(p).innerHTML=""}function K(e){return`
    <div>
      <input type="checkbox" id="${e}" name="${e}" checked data-breakpoint class="sr-only peer" />

      <label
        for="${e}"
        class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
      >
      <span class="select-none text-xs leading-none font-medium">${e}</span>
      </label>
    </div>
    `}var u="twaPopupPositionsWrapper";function A(e,t){e.classList.add("fixed"),t.forEach(n=>e.classList.add(n)),document.body.appendChild(e)}function z(){return[...document.querySelectorAll("[data-position]")]}function S(){G(),Q.forEach(function(e){document.getElementById(u).innerHTML+=J(e.name,e.classNames)})}function G(){document.getElementById(u).innerHTML=""}function R(e,t){z().forEach(n=>{n.addEventListener("click",()=>{t.forEach(s=>e.classList.remove(s)),t=n.getAttribute("data-position").split(","),t.forEach(s=>e.classList.add(s))})})}function J(e,t){return`
      <div>
        <button data-position="${t}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
          <span class="select-none text-xs leading-none font-medium">${e}</span>
        </button>
      </div>
    `}var Q=[{name:"Top Left",classNames:["top-4","left-4"]},{name:"Top Right",classNames:["top-4","right-4"]},{name:"Bottom Left",classNames:["bottom-4","left-4"]},{name:"Bottom Right",classNames:["bottom-4","right-4"]}];function T(){let e=document.createElement("script");e.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(e)}function a(e){let t=document.getElementById("twaError");t.removeAttribute("hidden"),t.innerText=e,setTimeout(()=>t.setAttribute("hidden",!0),3e3)}var V=["prev","next","child","parent"],m="twaElementButtonsRender";function X(){return[...document.querySelectorAll("[data-relative]")]}function $(){Y(),V.forEach(function(e){document.getElementById(m).innerHTML+=Z(e)})}function _(e){X().forEach(t=>{t.addEventListener("click",()=>{let n,s=t.getAttribute("data-relative");s==="parent"&&(n=e.parentElement?e.parentElement:e,!e.parentElement&&a("No parent element")),s==="prev"&&(n=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&a("No previous sibling element")),s==="next"&&(n=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&a("No next sibling element")),s==="child"&&(n=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&a("No child element")),document.dispatchEvent(new CustomEvent("updated:twa-element",{bubbles:!0,detail:{newTarget:n}}))})})}function Y(){document.getElementById(m).innerHTML=""}function Z(e){return`
    <div>
      <button data-relative="${e}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
      <span class="select-none text-xs leading-none font-medium capitalize">${e}</span>
      </button>
    </div>
    `}function N(){let e=["right-4","bottom-4"],t=document.createElement("div");T(),A(t,e);let n=i=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${i}
      </strong>
    `;t.innerHTML=`
      <details id="twaPopup" class="relative bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-teal-500 focus:outline-none">
          <span class="select-none">
            \u{1F916}
          </span>

          <span class="group-open:block hidden text-white text-sm font-medium select-none">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-4">
          <p class="text-center text-xs text-slate-400 select-none">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div class="space-y-2">
            ${n("Classes")}

            <form id="${r}">
              <div class="flex gap-2">
                <input type="text" id="${l}" placeholder="Add Tailwind CSS Class" class="border-slate-700 bg-slate-800 text-slate-300 rounded w-full text-xs focus:ring focus:ring-teal-500 focus:outline-none focus:border-slate-700" />

                <button class="bg-teal-600 text-white rounded px-3 py-1.5 text-xs font-medium shrink-0 focus:outline-none focus:ring focus:ring-teal-500 hover:ring hover:ring-teal-600">
                  <span class="select-none">Add</span>
                </button>
              </div>
            </form>

            <fieldset id="${d}" class="flex flex-wrap gap-2"></fieldset>
          </div>

          <div class="space-y-2">
            ${n("Toggle Breakpoints")}

            <fieldset id="${p}" class="flex flex-wrap gap-2"></fieldset>

            <small class="text-xs font-medium text-slate-500 block">
              Active Breakpoint: <span id="twaBreakpoint" class="uppercase"></span>
            </small>
          </div>

          <div class="space-y-2">
            ${n("Change Element")}

            <div id="${m}" class="flex flex-wrap gap-2"></div>

            <div id="twaError" class="text-red-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div class="space-y-2">
            ${n("Popup Position")}

            <div id="${u}" class="flex flex-wrap gap-2"></div>
          </div>
        </div>
      </details>
    `;let s,o=document.getElementById("twaBreakpoint"),f=[...document.querySelectorAll("[data-breakpoint]")],ee=[...document.querySelectorAll("[data-relative]")],g,B=[];document.addEventListener("click",i=>{twaPopup.contains(i.target)||(twaPopup.open=!1),i.metaKey&&(i.preventDefault(),twaPopup.open=!0,s=i.target,o.innerText=h(),f.forEach(M=>M.checked=!0),g=v(s),O(),x(),L(),W(),D())});function O(){w(s),document.getElementById(r).addEventListener("submit",x)}function x(){B=[...s.classList],I(B),twaClassInputs=E(),y(s)}function L(){P(),f=b(),k(s,g)}function W(){S(),R(t,e)}function D(){$(),_(s)}document.addEventListener("updated:twa-element",function(i){s=i.detail.newTarget,g=v(s),x(),L()}),window.addEventListener("resize",()=>o.innerText=h())}var Ce=N;export{Ce as default};
