var m="twaAddClassForm",f="twaAddClassInput";function D(n){n.classList.add(document.getElementById(f).value),_()}function y(n){document.getElementById(m).addEventListener("submit",function(l){l.preventDefault(),D(n)})}function _(){document.getElementById(f).value=""}var g="twaClassInputsRender";function C(){return[...document.querySelectorAll("[data-class]")]}function S(n){W(),n.forEach(function(l){document.getElementById(g).innerHTML+=R(l)})}function k(n,l){C().forEach(a=>{a.addEventListener("input",()=>{n.classList.toggle(a.name),document.querySelector(`[for='${a.id}']`).classList.toggle("opacity-25")})})}function W(){document.getElementById(g).innerHTML=""}function R(n){return`
    <div class="flex items-center">
        <input type="checkbox" id="${n}" name="${n}" checked data-class class="sr-only peer" />

        <label
            for="${n}"
            class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
        >
            <span class="select-none text-xs leading-none font-medium">${n}</span>
        </label>
    </div>
    `}function A(){let n=()=>{let e=window.innerWidth,t={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},r=Object.keys(t).filter(b=>b<e).at(-1);return t[r]||"Default"},l=document.createElement("script");l.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(l);let a=document.createElement("div"),i=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked data-breakpoint class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,o=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-12 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,d=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-14 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,c=e=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${e}
      </strong>
    `;a.innerHTML=`
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
            ${c("Classes")}

            <form id="${m}">
              <div class="flex gap-2">
                <input type="text" id="${f}" placeholder="Add Tailwind CSS Class" class="border-slate-700 bg-slate-800 text-slate-300 rounded w-full text-xs focus:ring focus:ring-teal-500 focus:outline-none focus:border-slate-700" />

                <button class="bg-teal-600 text-white rounded px-3 py-1.5 text-xs font-medium shrink-0 focus:outline-none focus:ring focus:ring-teal-500 hover:ring hover:ring-teal-600">
                  <span class="select-none">Add</span>
                </button>
              </div>
            </form>

            <fieldset id="${g}" class="flex flex-wrap gap-2"></fieldset>
          </div>

          <div>
            ${c("Toggle Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${i("twaClasses2xl","2xl")}

              ${i("twaClassesXl","xl")}

              ${i("twaClassesLg","lg")}

              ${i("twaClassesMd","md")}

              ${i("twaClassesSm","sm")}

              ${i("twaClassesDark","dark")}
            </fieldset>

            <small class="text-xs font-medium text-slate-500 mt-1.5 block">
              Active Breakpoint: <span id="twaBreakpoint"></span>
            </small>
          </div>

          <div>
            ${c("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${d("parent")}

              ${d("child")}

              ${d("prev")}

              ${d("next")}
            </div>

            <div id="twaError" class="mt-2 text-teal-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${c("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${o("tl",["top-4","left-4"])}

              ${o("tr",["top-4","right-4"])}

              ${o("bl",["bottom-4","left-4"])}

              ${o("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,a.classList.add("fixed");let p=["right-4","bottom-4"];p.forEach(e=>a.classList.add(e)),document.body.appendChild(a);let s,E=document.getElementById("twaBreakpoint"),x=[...document.querySelectorAll("[data-breakpoint]")],I=document.getElementById("twaClassesEditor"),B=[...document.querySelectorAll("[data-position]")],P=[...document.querySelectorAll("[data-relative]")],h=document.getElementById("twaError"),v,L=[];document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(e.preventDefault(),twaPopup.open=!0,s=e.target,E.innerText=n(),x.forEach(t=>t.checked=!0),T(),w(),v=$(s))});function T(){y(s),document.getElementById(m).addEventListener("submit",w)}function w(){L=[...s.classList],S(L),twaClassInputs=C(),k(s,I)}x.forEach(e=>{e.addEventListener("input",()=>{v[e.name].forEach(function(t){s.classList.toggle(t),document.querySelector(`[for='${t}']`).classList.toggle("opacity-25")})})}),P.forEach(e=>{e.addEventListener("click",()=>{let t,r=e.getAttribute("data-relative");r==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&u("No parent element")),r==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&u("No previous sibling element")),r==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&u("No next sibling element")),r==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&u("No child element")),s=t,x.forEach(b=>b.checked=!0),v=$(s),w()})}),window.addEventListener("resize",()=>{E.innerText=n()}),B.forEach(e=>{e.addEventListener("click",()=>{p.forEach(t=>a.classList.remove(t)),p=e.getAttribute("data-position").split(","),p.forEach(t=>a.classList.add(t))})});let u=e=>{h.removeAttribute("hidden"),h.innerText=e,setTimeout(()=>{h.setAttribute("hidden",!0)},3e3)},$=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var j=A;export{j as default};
