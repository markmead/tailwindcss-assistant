var g=Object.defineProperty;var y=i=>g(i,"__esModule",{value:!0});var L=(i,o)=>{y(i);for(var s in o)g(i,s,{get:o[s],enumerable:!0})};L(exports,{default:()=>C});function b(){document.addEventListener("DOMContentLoaded",()=>{let s=document.createElement("div");s.innerHTML=`
      <div class="twaPopup">
        <div class="twaPopupEmpty">\u{1F44B}</div>

        <div class="twaPopupWrapper">
          <div>
            <strong>Classes</strong>

            <pre id="twaClasses"></pre>
          </div>

          <div>
            <strong>Edit</strong>

            <fieldset>
              <input type="checkbox" id="twaClasses2xl" checked />
              <label for="twaClasses2xl">
                <span>2xl</span>
              </label>

              <input type="checkbox" id="twaClassesXl" checked />
              <label for="twaClassesXl">
                <span>xl</span>
              </label>

              <input type="checkbox" id="twaClassesLg" checked />
              <label for="twaClassesLg">
                <span>lg</span>
              </label>

              <input type="checkbox" id="twaClassesMd" checked />
              <label for="twaClassesMd">
                <span>md</span>
              </label>

              <input type="checkbox" id="twaClassesSm" checked />
              <label for="twaClassesSm">
                <span>sm</span>
              </label>
            </fieldset>
          </div>

          <div>
            <strong>Add</strong>
            <textarea id="twaClassesNew" rows="4"></textarea>
            <button id="twaClassesNewAdd">Update</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(s);let a=document.createElement("script");a.setAttribute("src","https://cdn.tailwindcss.com");let r=document.createElement("style");r.innerHTML=`
      .twaPopup {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        background: rgb(15 23 42);
        transition: all 0.25s ease;
      }

      .twaPopup:not(.twaPopupOpen) {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-content: center;
        border-radius: 0.25rem;
      }

      .twaPopup:not(.twaPopupOpen) > .twaPopupWrapper {
        display: none;
      }

      .twaPopup.twaPopupOpen {
        padding: 1rem;
        border-radius: 0.5rem;
        max-width: 20rem;
      }

      .twaPopup.twaPopupOpen > .twaPopupEmpty {
        display: none;
      }

      .twaPopup strong {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: rgb(203 213 225);
        margin-bottom: 0.25rem;
      }

      .twaPopup pre {
        white-space: pre-wrap;
        background: rgb(30 41 59);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: rgb(148 163 184);
      }

      .twaPopup fieldset {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .twaPopup label {
        background: rgb(30 41 59);
        width: 2rem;
        height: 2rem;
        display: grid;
        place-content: center;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: rgb(148 163 184);
        cursor: pointer;
        font-weight: 500;
      }

      .twaPopup label:hover {
        outline: 2px solid rgb(129 140 248);
      }

      .twaPopup input[type="checkbox"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      .twaPopup input:checked + label {
        color: rgb(129 140 248);
      }

      .twaPopup input:focus + label {
        outline: 2px solid rgb(129 140 248);
      }

      .twaPopup textarea {
        background: rgb(30 41 59);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: rgb(148 163 184);
        width: 100%;
        resize: none;
      }

      .twaPopup textarea:focus {
        outline: 2px solid rgb(129 140 248);
      }

      .twaPopup button {
        width: 100%;
        background: rgb(99 102 241);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: rgb(255 255 255);
        margin-top: 0.25rem;
      }

      .twaPopup button:hover, .twaPopup button:focus {
        outline: 2px solid rgb(129 140 248);
      }

      .twaPopupWrapper > div {
        margin-bottom: 1rem;
      }
    `,document.head.appendChild(a),document.head.appendChild(r),document.addEventListener("click",l=>{if(document.querySelector(".twaPopup").contains(l.target)||document.querySelector(".twaPopup").classList.remove("twaPopupOpen"),l.shiftKey){let t=l.target;document.querySelector(".twaPopup").classList.add("twaPopupOpen");let n=document.getElementById("twaClasses"),p=document.getElementById("twaClasses2xl"),d=document.getElementById("twaClassesXl"),c=document.getElementById("twaClassesLg"),u=document.getElementById("twaClassesMd"),m=document.getElementById("twaClassesSm");p.checked=!0,d.checked=!0,c.checked=!0,u.checked=!0,m.checked=!0;let w=document.getElementById("twaClassesNew"),h=[...t.classList].filter(e=>e.startsWith("2xl:")),f=[...t.classList].filter(e=>e.startsWith("xl:")),x=[...t.classList].filter(e=>e.startsWith("lg:")),P=[...t.classList].filter(e=>e.startsWith("md:")),k=[...t.classList].filter(e=>e.startsWith("sm:"));n.innerText=t.className,p.addEventListener("input",()=>{h.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),d.addEventListener("input",()=>{f.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),c.addEventListener("input",()=>{x.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),u.addEventListener("input",()=>{P.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),m.addEventListener("input",()=>{k.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),w.value=t.className,twaClassesNewAdd.addEventListener("click",()=>{t.className=w.value})}})});let i=(s,a)=>{s.setAttribute("style",Object.entries(a).map(([r,l])=>`${r}: ${l}`).join(";"))},o=()=>{let s=window.innerWidth,a={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(a).filter(l=>l<s).at(-1);return a[r]||"Default"}}var C=b;0&&(module.exports={});
