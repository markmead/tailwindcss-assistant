var h=Object.defineProperty;var L=l=>h(l,"__esModule",{value:!0});var $=(l,i)=>{L(l);for(var t in i)h(l,t,{get:i[t],enumerable:!0})};$(exports,{default:()=>y});function v(){document.addEventListener("DOMContentLoaded",()=>{let i=()=>{let s=window.innerWidth,e={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},d=Object.keys(e).filter(a=>a<s).at(-1);return e[d]||"Default"},t=document.createElement("script");t.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(t);let o=document.createElement("div"),r=(s,e)=>`
      <div>
        <input type="checkbox" id="${s}" name="${e}" checked class="sr-only peer" />

        <label
          for="${s}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${e}
        </label>
      </div>
    `,c=(s,e)=>`
      <div>
        <button data-position='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${s}
        </button>
      </div>
    `,m=s=>`
      <div>
        <button data-relative='${s}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${s}
        </button>
      </div>
    `;o.innerHTML=`
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
                ${r("twaClasses2xl","2xl")}

                ${r("twaClassesXl","xl")}

                ${r("twaClassesLg","lg")}

                ${r("twaClassesMd","md")}

                ${r("twaClassesSm","sm")}

                ${r("twaClassesDark","dark")}
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
              ${m("parent")}

              ${m("child")}

              ${m("prev")}

              ${m("next")}
            </div>
          </div>

          <div>
            <strong class="text-slate-400 font-medium text-sm">
              Settings - Position
            </strong>

            <div class="flex flex-wrap gap-2 mt-1">
              ${c("tl",["top-4","left-4"])}

              ${c("tr",["top-4","right-4"])}

              ${c("bl",["bottom-4","left-4"])}

              ${c("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,o.classList.add("fixed");let p=["right-4","bottom-4"];p.forEach(s=>o.classList.add(s)),document.body.appendChild(o);let w=document.getElementById("twaBreakpoint"),f=document.getElementById("twaClasses"),x=[...document.querySelectorAll('input[type="checkbox"]')],b=document.getElementById("twaClassesAdd"),u=document.getElementById("twaClassesEditor"),E=[...document.querySelectorAll("[data-position]")],k=[...document.querySelectorAll("[data-relative]")];document.addEventListener("click",s=>{if(s.metaKey){twaPopup.open=!0;let e=s.target;w.innerText=i(),f.innerText=e.className,x.forEach(a=>a.checked=!0),u.value=e.className;let d=l(e);x.forEach(a=>{a.addEventListener("input",()=>{d[a.name].forEach(n=>e.classList.toggle(n)),f.innerText=e.className,u.value=e.className})}),b.addEventListener("submit",a=>{a.preventDefault(),e.className=u.value,d=l(e)}),k.forEach(a=>{a.addEventListener("click",()=>{let n,g=a.getAttribute("data-relative");g==="parent"&&(n=e.parentElement?e.parentElement:e,!e.parentElement&&console.warn("No parent element")),g==="prev"&&(n=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&console.warn("No previous sibling element")),g==="next"&&(n=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&console.warn("No next sibling element")),g==="child"&&(n=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&console.warn("No child element")),e=n,f.innerText=e.className,x.forEach(C=>C.checked=!0),u.value=e.className,d=l(e)})})}}),window.addEventListener("resize",()=>{w.innerText=i()}),E.forEach(s=>{s.addEventListener("click",()=>{p.forEach(e=>o.classList.remove(e)),p=s.getAttribute("data-position").split(","),p.forEach(e=>o.classList.add(e))})})});let l=i=>({"2xl":[...i.classList].filter(t=>t.startsWith("2xl:")),xl:[...i.classList].filter(t=>t.startsWith("xl:")),lg:[...i.classList].filter(t=>t.startsWith("lg:")),md:[...i.classList].filter(t=>t.startsWith("md:")),sm:[...i.classList].filter(t=>t.startsWith("sm:")),dark:[...i.classList].filter(t=>t.startsWith("dark:"))})}var y=v;0&&(module.exports={});
