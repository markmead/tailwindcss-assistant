var b=Object.defineProperty;var y=a=>b(a,"__esModule",{value:!0});var L=(a,r)=>{y(a);for(var i in r)b(a,i,{get:r[i],enumerable:!0})};L(exports,{default:()=>B});function E(){let a=()=>{let e=window.innerWidth,t={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},l=Object.keys(t).filter(v=>v<e).at(-1);return t[l]||"Default"},r=document.createElement("script");r.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(r);let i=document.createElement("div"),n=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,o=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,d=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,c=e=>`
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
            ${c("Edit Classes")}

            <textarea id="twaClassesEditor" rows="4" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700"></textarea>

            <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
              <span class="select-none">Update</span>
            </button>
          </form>
        </div>

          <div>
            ${c("Edit Breakpoints")}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${n("twaClasses2xl","2xl")}

              ${n("twaClassesXl","xl")}

              ${n("twaClassesLg","lg")}

              ${n("twaClassesMd","md")}

              ${n("twaClassesSm","sm")}

              ${n("twaClassesDark","dark")}
            </fieldset>

            <small class="text-xs font-medium text-slate-500 mt-1.5 block">
              Active Breakpoint: <span id="twaBreakpoint"></span>
            </small>
          </div>

          <div>
            ${c("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${d("parent")}

              ${d("child")}

              ${d("prev")}

              ${d("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${c("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${o("tl",["top-4","left-4"])}

              ${o("tr",["top-4","right-4"])}

              ${o("bl",["bottom-4","left-4"])}

              ${o("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,i.classList.add("fixed");let p=["right-4","bottom-4"];p.forEach(e=>i.classList.add(e)),document.body.appendChild(i);let w=document.getElementById("twaBreakpoint"),g=[...document.querySelectorAll('input[type="checkbox"]')],k=document.getElementById("twaClassesAdd"),u=document.getElementById("twaClassesEditor"),C=[...document.querySelectorAll("[data-position]")],$=[...document.querySelectorAll("[data-relative]")],x=document.getElementById("twaError"),s,m;document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(e.preventDefault(),twaPopup.open=!0,s=e.target,w.innerText=a(),g.forEach(t=>t.checked=!0),u.value=s.className,m=h(s))}),g.forEach(e=>{e.addEventListener("input",()=>{m[e.name].forEach(t=>s.classList.toggle(t)),u.value=s.className})}),$.forEach(e=>{e.addEventListener("click",()=>{let t,l=e.getAttribute("data-relative");l==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&f("No parent element")),l==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&f("No previous sibling element")),l==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&f("No next sibling element")),l==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&f("No child element")),s=t,g.forEach(v=>v.checked=!0),u.value=s.className,m=h(s)})}),k.addEventListener("submit",e=>{e.preventDefault(),s.className=u.value,m=h(s)}),window.addEventListener("resize",()=>{w.innerText=a()}),C.forEach(e=>{e.addEventListener("click",()=>{p.forEach(t=>i.classList.remove(t)),p=e.getAttribute("data-position").split(","),p.forEach(t=>i.classList.add(t))})});let f=e=>{x.removeAttribute("hidden"),x.innerText=e,setTimeout(()=>{x.setAttribute("hidden",!0)},3e3)},h=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var B=E;0&&(module.exports={});
