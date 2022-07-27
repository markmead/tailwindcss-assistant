function b(){let x=()=>{let e=window.innerWidth,t={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},n=Object.keys(t).filter(h=>h<e).at(-1);return t[n]||"Default"},v=document.createElement("script");v.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(v);let i=document.createElement("div"),a=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,r=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,o=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,l=e=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${e}
      </strong>
    `;i.innerHTML=`
      <details id="twaPopup" class="bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-indigo-500 focus:outline-none">
          <span class="select-none">
            \u{1F916}
          </span>

          <span class="group-open:block hidden text-white text-sm font-medium select-none">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-6">
          <p class="text-center text-xs text-slate-400 select-none">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div>
            ${l('Breakpoint: <span id="twaBreakpoint"></span>')}
          </div>

          <div>
            ${l("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${a("twaClasses2xl","2xl")}

              ${a("twaClassesXl","xl")}

              ${a("twaClassesLg","lg")}

              ${a("twaClassesMd","md")}

              ${a("twaClassesSm","sm")}

              ${a("twaClassesDark","dark")}
            </fieldset>
          </div>

          <div>
            <form id="twaClassesAdd">
              ${l("Edit Classes")}

              <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

              <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
                <span class="select-none">Update</span>
              </button>
            </form>
          </div>

          <div>
            ${l("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${o("parent")}

              ${o("child")}

              ${o("prev")}

              ${o("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${l("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${r("tl",["top-4","left-4"])}

              ${r("tr",["top-4","right-4"])}

              ${r("bl",["bottom-4","left-4"])}

              ${r("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,i.classList.add("fixed");let d=["right-4","bottom-4"];d.forEach(e=>i.classList.add(e)),document.body.appendChild(i);let w=document.getElementById("twaBreakpoint"),m=[...document.querySelectorAll('input[type="checkbox"]')],E=document.getElementById("twaClassesAdd"),c=document.getElementById("twaClassesEditor"),k=[...document.querySelectorAll("[data-position]")],C=[...document.querySelectorAll("[data-relative]")],f=document.getElementById("twaError"),s,p;document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(twaPopup.open=!0,s=e.target,w.innerText=x(),m.forEach(t=>t.checked=!0),c.value=s.className,p=g(s))}),m.forEach(e=>{e.addEventListener("input",()=>{p[e.name].forEach(t=>s.classList.toggle(t)),c.value=s.className})}),C.forEach(e=>{e.addEventListener("click",()=>{let t,n=e.getAttribute("data-relative");n==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&u("No parent element")),n==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&u("No previous sibling element")),n==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&u("No next sibling element")),n==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&u("No child element")),s=t,m.forEach(h=>h.checked=!0),c.value=s.className,p=g(s)})}),E.addEventListener("submit",e=>{e.preventDefault(),s.className=c.value,p=g(s)}),window.addEventListener("resize",()=>{w.innerText=x()}),k.forEach(e=>{e.addEventListener("click",()=>{d.forEach(t=>i.classList.remove(t)),d=e.getAttribute("data-position").split(","),d.forEach(t=>i.classList.add(t))})});let u=e=>{f.removeAttribute("hidden"),f.innerText=e,setTimeout(()=>{f.setAttribute("hidden",!0)},3e3)},g=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var y=b;export{y as default};
