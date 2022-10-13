var E=Object.defineProperty;var L=a=>E(a,"__esModule",{value:!0});var B=(a,r)=>{L(a);for(var i in r)E(a,i,{get:r[i],enumerable:!0})};B(exports,{default:()=>A});function k(){let a=()=>{let e=window.innerWidth,t={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},l=Object.keys(t).filter(v=>v<e).at(-1);return t[l]||"Default"},r=document.createElement("script");r.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(r);let i=document.createElement("div"),n=(e,t)=>`
      <div>
        <input type="checkbox" id="${e}" name="${t}" checked class="sr-only peer" />

        <label
          for="${e}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${t}</span>
        </label>
      </div>
    `,d=(e,t)=>`
      <div>
        <button data-position='${t}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,c=e=>`
      <div>
        <button data-relative='${e}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 grid place-content-center">
          <span class="select-none">${e}</span>
        </button>
      </div>
    `,p=e=>`
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
            ${p("Edit Classes")}

            <textarea id="twaClassesEditor" rows="6" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700 resize-none"></textarea>

            <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
              <span class="select-none">Update</span>
            </button>
          </form>
        </div>

          <div>
            ${p("Toggle Breakpoints")}

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
            ${p("Change Element")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${c("parent")}

              ${c("child")}

              ${c("prev")}

              ${c("next")}
            </div>

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${p("Popup Position")}

            <div class="flex flex-wrap gap-2 mt-1">
              ${d("tl",["top-4","left-4"])}

              ${d("tr",["top-4","right-4"])}

              ${d("bl",["bottom-4","left-4"])}

              ${d("br",["bottom-4","right-4"])}
            </div>
          </div>
        </div>
      </details>
    `,i.classList.add("fixed");let u=["right-4","bottom-4"];u.forEach(e=>i.classList.add(e)),document.body.appendChild(i);let w=document.getElementById("twaBreakpoint"),g=[...document.querySelectorAll('input[type="checkbox"]')],C=document.getElementById("twaClassesAdd"),o=document.getElementById("twaClassesEditor"),$=[...document.querySelectorAll("[data-position]")],y=[...document.querySelectorAll("[data-relative]")],x=document.getElementById("twaError"),s,m;document.addEventListener("click",e=>{twaPopup.contains(e.target)||(twaPopup.open=!1),e.metaKey&&(e.preventDefault(),twaPopup.open=!0,s=e.target,w.innerText=a(),g.forEach(t=>t.checked=!0),o.value=s.className,m=h(s))}),g.forEach(e=>{e.addEventListener("input",()=>{m[e.name].forEach(t=>s.classList.toggle(t)),o.value=s.className})}),y.forEach(e=>{e.addEventListener("click",()=>{let t,l=e.getAttribute("data-relative");l==="parent"&&(t=s.parentElement?s.parentElement:s,!s.parentElement&&f("No parent element")),l==="prev"&&(t=s.previousElementSibling?s.previousElementSibling:s,!s.previousElementSibling&&f("No previous sibling element")),l==="next"&&(t=s.nextElementSibling?s.nextElementSibling:s,!s.nextElementSibling&&f("No next sibling element")),l==="child"&&(t=s.firstElementChild?s.firstElementChild:s,!s.firstElementChild&&f("No child element")),s=t,g.forEach(v=>v.checked=!0),o.value=s.className,m=h(s)})}),o.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),b(e))}),C.addEventListener("submit",e=>{b(e)});function b(e){e.preventDefault(),s.className=o.value,m=h(s)}window.addEventListener("resize",()=>{w.innerText=a()}),$.forEach(e=>{e.addEventListener("click",()=>{u.forEach(t=>i.classList.remove(t)),u=e.getAttribute("data-position").split(","),u.forEach(t=>i.classList.add(t))})});let f=e=>{x.removeAttribute("hidden"),x.innerText=e,setTimeout(()=>{x.setAttribute("hidden",!0)},3e3)},h=e=>({"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))})}var A=k;0&&(module.exports={});
