var f=Object.defineProperty;var b=l=>f(l,"__esModule",{value:!0});var k=(l,a)=>{b(l);for(var e in a)f(l,e,{get:a[e],enumerable:!0})};k(exports,{default:()=>C});function w(){document.addEventListener("DOMContentLoaded",()=>{let a=()=>{let s=window.innerWidth,t={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},c=Object.keys(t).filter(i=>i<s).at(-1);return t[c]||"Default"},e=document.createElement("script");e.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(e);let o=document.createElement("div"),n=(s,t)=>`
      <div>
        <input type="checkbox" id="${s}" name="${t}" checked class="sr-only peer" />

        <label
          for="${s}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-10 block grid place-content-center"
        >
          ${t}
        </label>
      </div>
    `,r=(s,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-10 block grid place-content-center">
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
              ${r("tl",["top-4","left-4"])}

              ${r("tr",["top-4","right-4"])}

              ${r("bl",["bottom-4","left-4"])}

              ${r("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,o.classList.add("fixed");let d=["right-4","bottom-4"];d.forEach(s=>o.classList.add(s)),document.body.appendChild(o);let m=document.getElementById("twaBreakpoint"),u=document.getElementById("twaClasses"),g=[...document.querySelectorAll('input[type="checkbox"]')],x=document.getElementById("twaClassesAdd"),p=document.getElementById("twaClassesEditor"),h=[...document.querySelectorAll("[data-position]")];document.addEventListener("click",s=>{if(s.metaKey){twaPopup.open=!0;let t=s.target;m.innerText=a(),u.innerText=t.className,g.forEach(i=>i.checked=!0),p.value=t.className;let c=l(t);g.forEach(i=>{i.addEventListener("input",()=>{c[i.name].forEach(v=>t.classList.toggle(v)),u.innerText=t.className,p.value=t.className})}),x.addEventListener("submit",i=>{i.preventDefault(),t.className=p.value,c=l(t)})}}),window.addEventListener("resize",()=>{m.innerText=a()}),h.forEach(s=>{s.addEventListener("click",()=>{d.forEach(t=>o.classList.remove(t)),d=s.getAttribute("data-position").split(","),d.forEach(t=>o.classList.add(t))})})});let l=a=>({"2xl":[...a.classList].filter(e=>e.startsWith("2xl:")),xl:[...a.classList].filter(e=>e.startsWith("xl:")),lg:[...a.classList].filter(e=>e.startsWith("lg:")),md:[...a.classList].filter(e=>e.startsWith("md:")),sm:[...a.classList].filter(e=>e.startsWith("sm:")),dark:[...a.classList].filter(e=>e.startsWith("dark:"))})}var C=w;0&&(module.exports={});
