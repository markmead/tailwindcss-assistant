function b(){document.addEventListener("DOMContentLoaded",()=>{let a=()=>{let t=window.innerWidth,s={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},o=Object.keys(s).filter(x=>x<t).at(-1);return s[o]||"Default"},i=document.createElement("script");i.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(i);let n=document.createElement("div"),r=(t,s)=>`
      <div>
        <input type="checkbox" id="${t}" name="${s}" checked class="sr-only peer" />

        <label
          for="${t}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${s}
        </label>
      </div>
    `,c=(t,s)=>`
      <div>
        <button data-position='${s}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,p=t=>`
      <div>
        <button data-relative='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,l=t=>`
      <strong class="text-slate-400 font-medium text-sm">
        ${t}
      </strong>
    `;n.innerHTML=`
      <details id="twaPopup" class="bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-indigo-500 focus:outline-none">
          <span>
            \u{1F916}
          </span>

          <span class="group-open:block hidden text-white text-sm font-medium">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-6">
          <p class="text-center text-xs text-slate-400">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div>
            ${l('Breakpoint: <span id="twaBreakpoint"></span>')}
          </div>

          <div>
            ${l("Classes")}

            <pre id="twaClasses" class="whitespace-pre-wrap font-mono p-2 bg-slate-800 rounded-md text-slate-500 text-sm mt-1"></pre>
          </div>

          <div>
            ${l("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${r("twaClasses2xl","2xl")}

              ${r("twaClassesXl","xl")}

              ${r("twaClassesLg","lg")}

              ${r("twaClassesMd","md")}

              ${r("twaClassesSm","sm")}

              ${r("twaClassesDark","dark")}
            </fieldset>
          </div>

          <div>
            <form id="twaClassesAdd">
              ${l("Edit Classes")}

              <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

              <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
                Update
              </button>
            </form>
          </div>

          <div>
            ${l("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${p("parent")}

              ${p("child")}

              ${p("prev")}

              ${p("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${l("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${c("tl",["top-4","left-4"])}

              ${c("tr",["top-4","right-4"])}

              ${c("bl",["bottom-4","left-4"])}

              ${c("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,n.classList.add("fixed");let m=["right-4","bottom-4"];m.forEach(t=>n.classList.add(t)),document.body.appendChild(n);let v=document.getElementById("twaBreakpoint"),w=document.getElementById("twaClasses"),h=[...document.querySelectorAll('input[type="checkbox"]')],E=document.getElementById("twaClassesAdd"),u=document.getElementById("twaClassesEditor"),C=[...document.querySelectorAll("[data-position]")],k=[...document.querySelectorAll("[data-relative]")],$=document.getElementById("twaError"),e,g;document.addEventListener("click",t=>{twaPopup.contains(t.target)||(twaPopup.open=!1),t.metaKey&&(twaPopup.open=!0,e=t.target,v.innerText=a(),w.innerText=e.className,h.forEach(s=>s.checked=!0),u.value=e.className,g=f(e))}),h.forEach(t=>{t.addEventListener("input",()=>{g[t.name].forEach(s=>e.classList.toggle(s)),w.innerText=e.className,u.value=e.className})}),k.forEach(t=>{t.addEventListener("click",()=>{let s,o=t.getAttribute("data-relative");o==="parent"&&(s=e.parentElement?e.parentElement:e,!e.parentElement&&d("No parent element")),o==="prev"&&(s=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&d("No previous sibling element")),o==="next"&&(s=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&d("No next sibling element")),o==="child"&&(s=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&d("No child element")),e=s,w.innerText=e.className,h.forEach(x=>x.checked=!0),u.value=e.className,g=f(e)})}),E.addEventListener("submit",t=>{t.preventDefault(),e.className=u.value,g=f(e)}),window.addEventListener("resize",()=>{v.innerText=a()}),C.forEach(t=>{t.addEventListener("click",()=>{m.forEach(s=>n.classList.remove(s)),m=t.getAttribute("data-position").split(","),m.forEach(s=>n.classList.add(s))})})});let d=a=>{twaError.removeAttribute("hidden"),twaError.innerText=a,setTimeout(()=>{twaError.setAttribute("hidden",!0)},3e3)},f=a=>({"2xl":[...a.classList].filter(i=>i.startsWith("2xl:")),xl:[...a.classList].filter(i=>i.startsWith("xl:")),lg:[...a.classList].filter(i=>i.startsWith("lg:")),md:[...a.classList].filter(i=>i.startsWith("md:")),sm:[...a.classList].filter(i=>i.startsWith("sm:")),dark:[...a.classList].filter(i=>i.startsWith("dark:"))})}var B=b;export{B as default};
