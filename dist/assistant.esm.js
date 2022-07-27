function E(){let h=()=>{let e=window.innerWidth,t={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},n=Object.keys(t).filter(x=>x<e).at(-1);return t[n]||"Default"},v=document.createElement("script");v.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(v);let i=document.createElement("div"),a=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,r=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,o=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,d=e=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${e}
      </strong>
    `;i.innerHTML=`
      <details id="twaPopup" class="relative bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-indigo-500 focus:outline-none">
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

          <div>
          <form id="twaClassesAdd">
            ${d("Edit Classes")}

            <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

            <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
              <span class="select-none">Update</span>
            </button>
          </form>
        </div>

          <div>
            ${d("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${a("twaClasses2xl","2xl")}

              ${a("twaClassesXl","xl")}

              ${a("twaClassesLg","lg")}

              ${a("twaClassesMd","md")}

              ${a("twaClassesSm","sm")}

              ${a("twaClassesDark","dark")}
            </fieldset>

            <small class="text-xs font-medium text-slate-500 mt-1.5 block">
              Active Breakpoint: <span id="twaBreakpoint"></span>
            </small>
          </div>

          <div>
            ${d("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${o("parent")}

              ${o("child")}

              ${o("prev")}

              ${o("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${d("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${r("tl",["top-4","left-4"])}

              ${r("tr",["top-4","right-4"])}

              ${r("bl",["bottom-4","left-4"])}

              ${r("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,i.classList.add("fixed");let c=["right-4","bottom-4"];c.forEach(e=>i.classList.add(e)),document.body.appendChild(i);let w=document.getElementById("twaBreakpoint"),m=[...document.querySelectorAll('input[type="checkbox"]')],k=document.getElementById("twaClassesAdd"),l=document.getElementById("twaClassesEditor"),C=[...document.querySelectorAll("[data-position]")],$=[...document.querySelectorAll("[data-relative]")],f=document.getElementById("twaError"),s,p;document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(e.preventDefault(),twaPopup.open=!0,s=e.target,w.innerText=h(),m.forEach(t=>t.checked=!0),l.value=s.className,p=g(s))}),m.forEach(e=>{e.addEventListener("input",()=>{p[e.name].forEach(t=>s.classList.toggle(t)),l.value=s.className})}),$.forEach(e=>{e.addEventListener("click",()=>{let t,n=e.getAttribute("data-relative");n==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&u("No parent element")),n==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&u("No previous sibling element")),n==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&u("No next sibling element")),n==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&u("No child element")),s=t,m.forEach(x=>x.checked=!0),l.value=s.className,p=g(s)})}),l.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),b(e))}),k.addEventListener("submit",e=>{b(e)});function b(e){e.preventDefault(),s.className=l.value,p=g(s)}window.addEventListener("resize",()=>{w.innerText=h()}),C.forEach(e=>{e.addEventListener("click",()=>{c.forEach(t=>i.classList.remove(t)),c=e.getAttribute("data-position").split(","),c.forEach(t=>i.classList.add(t))})});let u=e=>{f.removeAttribute("hidden"),f.innerText=e,setTimeout(()=>{f.setAttribute("hidden",!0)},3e3)},g=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var B=E;export{B as default};
