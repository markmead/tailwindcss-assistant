var u=Object.defineProperty;var x=l=>u(l,"__esModule",{value:!0});var h=(l,s)=>{x(l);for(var e in s)u(l,e,{get:s[e],enumerable:!0})};h(exports,{default:()=>v});function g(){document.addEventListener("DOMContentLoaded",()=>{let s=()=>{let i=window.innerWidth,t={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(t).filter(a=>a<i).at(-1);return t[r]||"Default"},e=document.createElement("script");e.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(e);let d=document.createElement("div"),n=(i,t)=>`
      <div>
        <input type="checkbox" id="${i}" name="${t}" checked class="sr-only peer" />

        <label
          for="${i}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-10 block grid place-content-center"
        >
          ${t}
        </label>
      </div>
    `;d.innerHTML=`
      <details id="twaPopup" class="fixed right-4 bottom-4 bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
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
              Classes
            </strong>

            <pre id="twaClasses" class="whitespace-pre-wrap font-mono p-2 bg-slate-800 rounded-md text-slate-500 text-sm mt-1"></pre>
          </div>

          <div>
            <fieldset>
              <legend class="text-slate-400 font-medium text-sm">
                Edit
              </legend>

              <div class="flex flex-wrap gap-2 mt-1">
                ${n("twaClasses2xl","2xl")}

                ${n("twaClassesXl","xl")}

                ${n("twaClassesLg","lg")}

                ${n("twaClassesMd","md")}

                ${n("twaClassesSm","sm")}

                ${n("twaClassesDark","dark")}
              </div>
            </fieldset>
          </div>

          <div>
            <form id="twaClassesAdd">
              <label for="twaClassesEditor" class="text-slate-400 font-medium text-sm">
                Add
              </label>

              <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

              <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
                Update
              </button>
            </form>
          </div>
        </div>
      </details>
    `,document.body.appendChild(d);let c=document.getElementById("twaBreakpoint"),p=document.getElementById("twaClasses"),m=[...document.querySelectorAll('input[type="checkbox"]')],f=document.getElementById("twaClassesAdd"),o=document.getElementById("twaClassesEditor");document.addEventListener("click",i=>{if(i.metaKey){twaPopup.open=!0;let t=i.target;c.innerText=s(),p.innerText=t.className,m.forEach(a=>a.checked=!0),o.value=t.className;let r=l(t);m.forEach(a=>{a.addEventListener("input",()=>{r[a.name].forEach(w=>t.classList.toggle(w)),p.innerText=t.className,o.value=t.className})}),f.addEventListener("submit",a=>{a.preventDefault(),t.className=o.value,r=l(t)})}}),window.addEventListener("resize",()=>{c.innerText=s()})});let l=s=>({"2xl":[...s.classList].filter(e=>e.startsWith("2xl:")),xl:[...s.classList].filter(e=>e.startsWith("xl:")),lg:[...s.classList].filter(e=>e.startsWith("lg:")),md:[...s.classList].filter(e=>e.startsWith("md:")),sm:[...s.classList].filter(e=>e.startsWith("sm:")),dark:[...s.classList].filter(e=>e.startsWith("dark:"))})}var v=g;0&&(module.exports={});
