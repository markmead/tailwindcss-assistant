var b=Object.defineProperty;var L=n=>b(n,"__esModule",{value:!0});var y=(n,r)=>{L(n);for(var i in r)b(n,i,{get:r[i],enumerable:!0})};y(exports,{default:()=>B});function E(){document.addEventListener("DOMContentLoaded",()=>{let i=()=>{let t=window.innerWidth,s={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},c=Object.keys(s).filter(x=>x<t).at(-1);return s[c]||"Default"},a=document.createElement("script");a.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(a);let l=document.createElement("div"),o=(t,s)=>`
      <div>
        <input type="checkbox" id="${t}" name="${s}" checked class="sr-only peer" />

        <label
          for="${t}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${s}
        </label>
      </div>
    `,p=(t,s)=>`
      <div>
        <button data-position='${s}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,m=t=>`
      <div>
        <button data-relative='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,d=t=>`
      <strong class="text-slate-400 font-medium text-sm">
        ${t}
      </strong>
    `;l.innerHTML=`
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
            ${d('Breakpoint: <span id="twaBreakpoint"></span>')}
          </div>

          <div>
            ${d("Classes")}

            <pre id="twaClasses" class="whitespace-pre-wrap font-mono p-2 bg-slate-800 rounded-md text-slate-500 text-sm mt-1"></pre>
          </div>

          <div>
            ${d("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${o("twaClasses2xl","2xl")}

              ${o("twaClassesXl","xl")}

              ${o("twaClassesLg","lg")}

              ${o("twaClassesMd","md")}

              ${o("twaClassesSm","sm")}

              ${o("twaClassesDark","dark")}
            </fieldset>
          </div>

          <div>
            <form id="twaClassesAdd">
              ${d("Edit Classes")}

              <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

              <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
                Update
              </button>
            </form>
          </div>

          <div>
            ${d("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${m("parent")}

              ${m("child")}

              ${m("prev")}

              ${m("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${d("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${p("tl",["top-4","left-4"])}

              ${p("tr",["top-4","right-4"])}

              ${p("bl",["bottom-4","left-4"])}

              ${p("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,l.classList.add("fixed");let u=["right-4","bottom-4"];u.forEach(t=>l.classList.add(t)),document.body.appendChild(l);let v=document.getElementById("twaBreakpoint"),w=document.getElementById("twaClasses"),h=[...document.querySelectorAll('input[type="checkbox"]')],C=document.getElementById("twaClassesAdd"),g=document.getElementById("twaClassesEditor"),k=[...document.querySelectorAll("[data-position]")],$=[...document.querySelectorAll("[data-relative]")],S=document.getElementById("twaError"),e,f;document.addEventListener("click",t=>{twaPopup.contains(t.target)||(twaPopup.open=!1),t.metaKey&&(twaPopup.open=!0,e=t.target,v.innerText=i(),w.innerText=e.className,h.forEach(s=>s.checked=!0),g.value=e.className,f=r(e))}),h.forEach(t=>{t.addEventListener("input",()=>{f[t.name].forEach(s=>e.classList.toggle(s)),w.innerText=e.className,g.value=e.className})}),$.forEach(t=>{t.addEventListener("click",()=>{let s,c=t.getAttribute("data-relative");c==="parent"&&(s=e.parentElement?e.parentElement:e,!e.parentElement&&n("No parent element")),c==="prev"&&(s=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&n("No previous sibling element")),c==="next"&&(s=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&n("No next sibling element")),c==="child"&&(s=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&n("No child element")),e=s,w.innerText=e.className,h.forEach(x=>x.checked=!0),g.value=e.className,f=r(e)})}),C.addEventListener("submit",t=>{t.preventDefault(),e.className=g.value,f=r(e)}),window.addEventListener("resize",()=>{v.innerText=i()}),k.forEach(t=>{t.addEventListener("click",()=>{u.forEach(s=>l.classList.remove(s)),u=t.getAttribute("data-position").split(","),u.forEach(s=>l.classList.add(s))})})});let n=i=>{twaError.removeAttribute("hidden"),twaError.innerText=i,setTimeout(()=>{twaError.setAttribute("hidden",!0)},3e3)},r=i=>({"2xl":[...i.classList].filter(a=>a.startsWith("2xl:")),xl:[...i.classList].filter(a=>a.startsWith("xl:")),lg:[...i.classList].filter(a=>a.startsWith("lg:")),md:[...i.classList].filter(a=>a.startsWith("md:")),sm:[...i.classList].filter(a=>a.startsWith("sm:")),dark:[...i.classList].filter(a=>a.startsWith("dark:"))})}var B=E;0&&(module.exports={});
