function h(){document.addEventListener("DOMContentLoaded",()=>{let a=()=>{let t=window.innerWidth,e={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(e).filter(i=>i<t).at(-1);return e[r]||"Default"},s=document.createElement("script");s.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(s);let n=document.createElement("div"),o=(t,e)=>`
      <div>
        <input type="checkbox" id="${t}" name="${e}" checked class="sr-only peer" />

        <label
          for="${t}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${e}
        </label>
      </div>
    `,d=(t,e)=>`
      <div>
        <button data-position='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,c=t=>`
      <div>
        <button data-relative='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${t}
        </button>
      </div>
    `;n.innerHTML=`
      <details id="twaPopup" class="bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-indigo-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>

          <span class="group-open:block hidden text-white text-sm font-medium">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-6">
          <p class="text-center text-xs text-slate-400">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Breakpoint: <span id="twaBreakpoint"></span>
            </strong>
          </div>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Classes - View
            </strong>

            <pre id="twaClasses" class="whitespace-pre-wrap font-mono p-2 bg-slate-800 rounded-md text-slate-500 text-sm mt-1"></pre>
          </div>

          <div>
            <fieldset>
              <legend class="text-slate-400 font-medium text-sm">
                Breakpoints - Edit
              </legend>

              <div class="flex flex-wrap gap-2 mt-1">
                ${o("twaClasses2xl","2xl")}

                ${o("twaClassesXl","xl")}

                ${o("twaClassesLg","lg")}

                ${o("twaClassesMd","md")}

                ${o("twaClassesSm","sm")}

                ${o("twaClassesDark","dark")}
              </div>
            </fieldset>
          </div>

          <div>
            <form id="twaClassesAdd">
              <label for="twaClassesEditor" class="text-slate-400 font-medium text-sm">
                Classes - Edit
              </label>

              <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

              <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
                Update
              </button>
            </form>
          </div>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Settings - Position
            </strong>

            <div class="flex flex-wrap gap-2 mt-1">
              ${c("parent")}

              ${c("child")}

              ${c("prev")}

              ${c("next")}
            </div>
          </div>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Settings - Position
            </strong>

            <div class="flex flex-wrap gap-2 mt-1">
              ${d("tl",["top-4","left-4"])}

              ${d("tr",["top-4","right-4"])}

              ${d("bl",["bottom-4","left-4"])}

              ${d("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,n.classList.add("fixed");let m=["right-4","bottom-4"];m.forEach(t=>n.classList.add(t)),document.body.appendChild(n);let w=document.getElementById("twaBreakpoint"),f=document.getElementById("twaClasses"),x=[...document.querySelectorAll('input[type="checkbox"]')],v=document.getElementById("twaClassesAdd"),p=document.getElementById("twaClassesEditor"),b=[...document.querySelectorAll("[data-position]")],E=[...document.querySelectorAll("[data-relative]")];document.addEventListener("click",t=>{if(t.metaKey){twaPopup.open=!0;let e=t.target;w.innerText=a(),f.innerText=e.className,x.forEach(i=>i.checked=!0),p.value=e.className;let r=g(e);x.forEach(i=>{i.addEventListener("input",()=>{r[i.name].forEach(l=>e.classList.toggle(l)),f.innerText=e.className,p.value=e.className})}),v.addEventListener("submit",i=>{i.preventDefault(),e.className=p.value,r=g(e)}),E.forEach(i=>{i.addEventListener("click",()=>{let l,u=i.getAttribute("data-relative");u==="parent"&&(l=e.parentElement?e.parentElement:e,!e.parentElement&&console.warn("No parent element")),u==="prev"&&(l=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&console.warn("No previous sibling element")),u==="next"&&(l=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&console.warn("No next sibling element")),u==="child"&&(l=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&console.warn("No child element")),e=l,f.innerText=e.className,x.forEach(k=>k.checked=!0),p.value=e.className,r=g(e)})})}}),window.addEventListener("resize",()=>{w.innerText=a()}),b.forEach(t=>{t.addEventListener("click",()=>{m.forEach(e=>n.classList.remove(e)),m=t.getAttribute("data-position").split(","),m.forEach(e=>n.classList.add(e))})})});let g=a=>({"2xl":[...a.classList].filter(s=>s.startsWith("2xl:")),xl:[...a.classList].filter(s=>s.startsWith("xl:")),lg:[...a.classList].filter(s=>s.startsWith("lg:")),md:[...a.classList].filter(s=>s.startsWith("md:")),sm:[...a.classList].filter(s=>s.startsWith("sm:")),dark:[...a.classList].filter(s=>s.startsWith("dark:"))})}var $=h;export{$ as default};
