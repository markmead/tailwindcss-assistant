var E=Object.defineProperty;var L=i=>E(i,"__esModule",{value:!0});var B=(i,o)=>{L(i);for(var a in o)E(i,a,{get:o[a],enumerable:!0})};B(exports,{default:()=>S});function C(){let i=()=>{let e=window.innerWidth,t={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(t).filter(v=>v<e).at(-1);return t[r]||"Default"},o=document.createElement("script");o.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(o);let a=document.createElement("div"),n=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,d=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 block grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,c=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 block grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,l=e=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${e}
      </strong>
    `;a.innerHTML=`
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
            ${l("Classes")}

            <pre id="twaClasses" class="whitespace-pre-wrap font-mono p-2 bg-slate-800 rounded-md text-slate-500 text-sm mt-1"></pre>
          </div>

          <div>
            ${l("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${n("twaClasses2xl","2xl")}

              ${n("twaClassesXl","xl")}

              ${n("twaClassesLg","lg")}

              ${n("twaClassesMd","md")}

              ${n("twaClassesSm","sm")}

              ${n("twaClassesDark","dark")}
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
              ${c("parent")}

              ${c("child")}

              ${c("prev")}

              ${c("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${l("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${d("tl",["top-4","left-4"])}

              ${d("tr",["top-4","right-4"])}

              ${d("bl",["bottom-4","left-4"])}

              ${d("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,a.classList.add("fixed");let p=["right-4","bottom-4"];p.forEach(e=>a.classList.add(e)),document.body.appendChild(a);let b=document.getElementById("twaBreakpoint"),f=document.getElementById("twaClasses"),h=[...document.querySelectorAll('input[type="checkbox"]')],k=document.getElementById("twaClassesAdd"),m=document.getElementById("twaClassesEditor"),$=[...document.querySelectorAll("[data-position]")],y=[...document.querySelectorAll("[data-relative]")],x=document.getElementById("twaError"),s,u;document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(twaPopup.open=!0,s=e.target,b.innerText=i(),f.innerText=s.className,h.forEach(t=>t.checked=!0),m.value=s.className,u=w(s))}),h.forEach(e=>{e.addEventListener("input",()=>{u[e.name].forEach(t=>s.classList.toggle(t)),f.innerText=s.className,m.value=s.className})}),y.forEach(e=>{e.addEventListener("click",()=>{let t,r=e.getAttribute("data-relative");r==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&g("No parent element")),r==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&g("No previous sibling element")),r==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&g("No next sibling element")),r==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&g("No child element")),s=t,f.innerText=s.className,h.forEach(v=>v.checked=!0),m.value=s.className,u=w(s)})}),k.addEventListener("submit",e=>{e.preventDefault(),s.className=m.value,u=w(s)}),window.addEventListener("resize",()=>{b.innerText=i()}),$.forEach(e=>{e.addEventListener("click",()=>{p.forEach(t=>a.classList.remove(t)),p=e.getAttribute("data-position").split(","),p.forEach(t=>a.classList.add(t))})});let g=e=>{x.removeAttribute("hidden"),x.innerText=e,setTimeout(()=>{x.setAttribute("hidden",!0)},3e3)},w=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var S=C;0&&(module.exports={});
