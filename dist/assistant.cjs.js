var h=Object.defineProperty;var k=n=>h(n,"__esModule",{value:!0});var L=(n,i)=>{k(n);for(var a in i)h(n,a,{get:i[a],enumerable:!0})};L(exports,{default:()=>$});function v(){document.addEventListener("DOMContentLoaded",()=>{let i=()=>{let t=window.innerWidth,s={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(s).filter(x=>x<t).at(-1);return s[r]||"Default"},a=document.createElement("script");a.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(a);let l=document.createElement("div"),o=(t,s)=>`
      <div>
        <input type="checkbox" id="${t}" name="${s}" checked class="sr-only peer" />

        <label
          for="${t}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          ${s}
        </label>
      </div>
    `,d=(t,s)=>`
      <div>
        <button data-position='${s}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          ${t}
        </button>
      </div>
    `,c=t=>`
      <div>
        <button data-relative='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          ${t}
        </button>
      </div>
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
    `,l.classList.add("fixed");let p=["right-4","bottom-4"];p.forEach(t=>l.classList.add(t)),document.body.appendChild(l);let w=document.getElementById("twaBreakpoint"),g=document.getElementById("twaClasses"),f=[...document.querySelectorAll('input[type="checkbox"]')],b=document.getElementById("twaClassesAdd"),m=document.getElementById("twaClassesEditor"),E=[...document.querySelectorAll("[data-position]")],C=[...document.querySelectorAll("[data-relative]")],e,u;document.addEventListener("click",t=>{twaPopup.contains(t.target)||(twaPopup.open=!1),t.metaKey&&(twaPopup.open=!0,e=t.target,w.innerText=i(),g.innerText=e.className,f.forEach(s=>s.checked=!0),m.value=e.className,u=n(e))}),f.forEach(t=>{t.addEventListener("input",()=>{u[t.name].forEach(s=>e.classList.toggle(s)),g.innerText=e.className,m.value=e.className})}),C.forEach(t=>{t.addEventListener("click",()=>{let s,r=t.getAttribute("data-relative");r==="parent"&&(s=e.parentElement?e.parentElement:e,!e.parentElement&&console.warn("No parent element")),r==="prev"&&(s=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&console.warn("No previous sibling element")),r==="next"&&(s=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&console.warn("No next sibling element")),r==="child"&&(s=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&console.warn("No child element")),e=s,g.innerText=e.className,f.forEach(x=>x.checked=!0),m.value=e.className,u=n(e)})}),b.addEventListener("submit",t=>{t.preventDefault(),e.className=m.value,u=n(e)}),window.addEventListener("resize",()=>{w.innerText=i()}),E.forEach(t=>{t.addEventListener("click",()=>{p.forEach(s=>l.classList.remove(s)),p=t.getAttribute("data-position").split(","),p.forEach(s=>l.classList.add(s))})})});let n=i=>({"2xl":[...i.classList].filter(a=>a.startsWith("2xl:")),xl:[...i.classList].filter(a=>a.startsWith("xl:")),lg:[...i.classList].filter(a=>a.startsWith("lg:")),md:[...i.classList].filter(a=>a.startsWith("md:")),sm:[...i.classList].filter(a=>a.startsWith("sm:")),dark:[...i.classList].filter(a=>a.startsWith("dark:"))})}var $=v;0&&(module.exports={});
