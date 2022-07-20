var g=Object.defineProperty;var L=i=>g(i,"__esModule",{value:!0});var E=(i,d)=>{L(i);for(var s in d)g(i,s,{get:d[s],enumerable:!0})};E(exports,{default:()=>P});function b(){document.addEventListener("DOMContentLoaded",()=>{let s=document.createElement("div");s.innerHTML=`
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
              <label>
                <input type="checkbox" id="twaClasses2xl" checked />
                <span>2xl</span>
              </label>

              <label>
                <input type="checkbox" id="twaClassesXl" checked />
                <span>xl</span>
              </label>

              <label>
                <input type="checkbox" id="twaClassesLg" checked />
                <span>lg</span>
              </label>

              <label>
                <input type="checkbox" id="twaClassesMd" checked />
                <span>md</span>
              </label>

              <label>
                <input type="checkbox" id="twaClassesSm" checked />
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

      .twaPopup label input {
        display: none;
      }

      .twaPopup label input:checked + span {
        color: rgb(129 140 248);
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

      .twaPopup button {
        width: 100%;
        background: rgb(99 102 241);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: rgb(255 255 255);
        margin-top: 0.25rem;
      }

      .twaPopupWrapper > div {
        margin-bottom: 1rem;
      }
    `,document.head.appendChild(a),document.head.appendChild(r),document.addEventListener("click",l=>{if(document.querySelector(".twaPopup").contains(l.target)||document.querySelector(".twaPopup").classList.remove("twaPopupOpen"),l.shiftKey){let t=l.target;document.querySelector(".twaPopup").classList.add("twaPopupOpen");let n=document.getElementById("twaClasses"),p=document.getElementById("twaClasses2xl"),o=document.getElementById("twaClassesXl"),c=document.getElementById("twaClassesLg"),u=document.getElementById("twaClassesMd"),m=document.getElementById("twaClassesSm");p.checked=!0,o.checked=!0,c.checked=!0,u.checked=!0,m.checked=!0;let w=document.getElementById("twaClassesNew"),h=[...t.classList].filter(e=>e.startsWith("2xl:")),f=[...t.classList].filter(e=>e.startsWith("xl:")),y=[...t.classList].filter(e=>e.startsWith("lg:")),k=[...t.classList].filter(e=>e.startsWith("md:")),x=[...t.classList].filter(e=>e.startsWith("sm:"));n.innerText=t.className,p.addEventListener("input",()=>{h.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),o.addEventListener("input",()=>{f.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),c.addEventListener("input",()=>{y.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),u.addEventListener("input",()=>{k.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),m.addEventListener("input",()=>{x.forEach(e=>t.classList.toggle(e)),n.innerText=t.className}),w.value=t.className,twaClassesNewAdd.addEventListener("click",()=>{t.className=w.value})}})});let i=(s,a)=>{s.setAttribute("style",Object.entries(a).map(([r,l])=>`${r}: ${l}`).join(";"))},d=()=>{let s=window.innerWidth,a={640:"SM",768:"MD",1024:"LG",1280:"XL",1536:"2XL"},r=Object.keys(a).filter(l=>l<s).at(-1);return a[r]||"Default"}}var P=b;0&&(module.exports={});
