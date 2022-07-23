function h(){document.addEventListener("DOMContentLoaded",()=>{let i=()=>{let t=window.innerWidth,s={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},o=Object.keys(s).filter(x=>x<t).at(-1);return s[o]||"Default"},a=document.createElement("script");a.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(a);let n=document.createElement("div"),l=(t,s)=>`
      <div>
        <input type="checkbox" id="${t}" name="${s}" checked class="sr-only peer" />

        <label
          for="${t}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${s}
        </label>
      </div>
    `,r=(t,s)=>`
      <div>
        <button data-position='${s}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,d=t=>`
      <div>
        <button data-relative='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${t}
        </button>
      </div>
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
                ${l("twaClasses2xl","2xl")}

                ${l("twaClassesXl","xl")}

                ${l("twaClassesLg","lg")}

                ${l("twaClassesMd","md")}

                ${l("twaClassesSm","sm")}

                ${l("twaClassesDark","dark")}
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
              ${d("parent")}

              ${d("child")}

              ${d("prev")}

              ${d("next")}
            </div>
          </div>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Settings - Position
            </strong>

            <div class="flex flex-wrap gap-2 mt-1">
              ${r("tl",["top-4","left-4"])}

              ${r("tr",["top-4","right-4"])}

              ${r("bl",["bottom-4","left-4"])}

              ${r("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,n.classList.add("fixed");let c=["right-4","bottom-4"];c.forEach(t=>n.classList.add(t)),document.body.appendChild(n);let w=document.getElementById("twaBreakpoint"),g=document.getElementById("twaClasses"),f=[...document.querySelectorAll('input[type="checkbox"]')],v=document.getElementById("twaClassesAdd"),p=document.getElementById("twaClassesEditor"),b=[...document.querySelectorAll("[data-position]")],E=[...document.querySelectorAll("[data-relative]")],e,m;document.addEventListener("click",t=>{twaPopup.contains(t.target)||(twaPopup.open=!1),t.metaKey&&(twaPopup.open=!0,e=t.target,w.innerText=i(),g.innerText=e.className,f.forEach(s=>s.checked=!0),p.value=e.className,m=u(e))}),f.forEach(t=>{t.addEventListener("input",()=>{m[t.name].forEach(s=>e.classList.toggle(s)),g.innerText=e.className,p.value=e.className})}),E.forEach(t=>{t.addEventListener("click",()=>{let s,o=t.getAttribute("data-relative");o==="parent"&&(s=e.parentElement?e.parentElement:e,!e.parentElement&&console.warn("No parent element")),o==="prev"&&(s=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&console.warn("No previous sibling element")),o==="next"&&(s=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&console.warn("No next sibling element")),o==="child"&&(s=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&console.warn("No child element")),e=s,g.innerText=e.className,f.forEach(x=>x.checked=!0),p.value=e.className,m=u(e)})}),v.addEventListener("submit",t=>{t.preventDefault(),e.className=p.value,m=u(e)}),window.addEventListener("resize",()=>{w.innerText=i()}),b.forEach(t=>{t.addEventListener("click",()=>{c.forEach(s=>n.classList.remove(s)),c=t.getAttribute("data-position").split(","),c.forEach(s=>n.classList.add(s))})})});let u=i=>({"2xl":[...i.classList].filter(a=>a.startsWith("2xl:")),xl:[...i.classList].filter(a=>a.startsWith("xl:")),lg:[...i.classList].filter(a=>a.startsWith("lg:")),md:[...i.classList].filter(a=>a.startsWith("md:")),sm:[...i.classList].filter(a=>a.startsWith("sm:")),dark:[...i.classList].filter(a=>a.startsWith("dark:"))})}var L=h;export{L as default};
