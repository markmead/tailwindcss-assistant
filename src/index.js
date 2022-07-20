export default function () {
  document.addEventListener('DOMContentLoaded', () => {
    let popupWrapper = document.createElement('div')

    popupWrapper.innerHTML = `
      <div class="twaPopup">
        <div class="twaPopupEmpty">👋</div>

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
    `

    document.body.appendChild(popupWrapper)

    let scriptElement = document.createElement('script')

    scriptElement.setAttribute('src', 'https://cdn.tailwindcss.com')

    let styleElement = document.createElement('style')

    styleElement.innerHTML = `
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
    `

    document.head.appendChild(scriptElement)

    document.head.appendChild(styleElement)

    document.addEventListener('click', (event) => {
      let insideClick = document
        .querySelector('.twaPopup')
        .contains(event.target)

      if (!insideClick) {
        document.querySelector('.twaPopup').classList.remove('twaPopupOpen')
      }

      if (event.shiftKey) {
        let currentTarget = event.target

        document.querySelector('.twaPopup').classList.add('twaPopupOpen')

        let classesText = document.getElementById('twaClasses')

        let classes2xlInput = document.getElementById('twaClasses2xl')

        let classesXlInput = document.getElementById('twaClassesXl')

        let classesLgInput = document.getElementById('twaClassesLg')

        let classesMdInput = document.getElementById('twaClassesMd')

        let classesSmInput = document.getElementById('twaClassesSm')

        classes2xlInput.checked = true

        classesXlInput.checked = true

        classesLgInput.checked = true

        classesMdInput.checked = true

        classesSmInput.checked = true

        let twaClassesNewInput = document.getElementById('twaClassesNew')

        let classes2xl = [...currentTarget.classList].filter((className) =>
          className.startsWith('2xl:')
        )

        let classesXl = [...currentTarget.classList].filter((className) =>
          className.startsWith('xl:')
        )

        let classesLg = [...currentTarget.classList].filter((className) =>
          className.startsWith('lg:')
        )

        let classesMd = [...currentTarget.classList].filter((className) =>
          className.startsWith('md:')
        )

        let classesSm = [...currentTarget.classList].filter((className) =>
          className.startsWith('sm:')
        )

        classesText.innerText = currentTarget.className

        classes2xlInput.addEventListener('input', () => {
          classes2xl.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classesText.innerText = currentTarget.className
        })

        classesXlInput.addEventListener('input', () => {
          classesXl.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classesText.innerText = currentTarget.className
        })

        classesLgInput.addEventListener('input', () => {
          classesLg.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classesText.innerText = currentTarget.className
        })

        classesMdInput.addEventListener('input', () => {
          classesMd.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classesText.innerText = currentTarget.className
        })

        classesSmInput.addEventListener('input', () => {
          classesSm.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classesText.innerText = currentTarget.className
        })

        twaClassesNewInput.value = currentTarget.className

        twaClassesNewAdd.addEventListener('click', () => {
          currentTarget.className = twaClassesNewInput.value
        })
      }
    })
  })

  // setElementStyle(classNamePopup, popupStyle)

  // setElementStyle(breakpointPopup, popupStyle)

  // setElementStyle(popupWrapper, {
  //   position: 'fixed',
  //   bottom: '16px',
  //   right: '16px',
  //   display: 'flex',
  //   gap: '8px',
  // })

  // classNamePopup.setAttribute('hidden', true)

  // popupWrapper.appendChild(classNamePopup)

  // popupWrapper.appendChild(breakpointPopup)

  // el.appendChild(popupWrapper)

  // let setBreakpointText = () => {
  //   return `${window.innerWidth}px - ${getActiveBreakpoint()}`
  // }

  // breakpointPopup.innerText = setBreakpointText()

  // window.addEventListener('resize', function () {
  //   breakpointPopup.innerText = setBreakpointText()
  // })

  // document.addEventListener('mouseover', function (event) {
  //   let currentTarget = event.target

  //   if (!currentTarget.className) {
  //     classNamePopup.setAttribute('hidden', true)

  //     return
  //   }

  //   classNamePopup.removeAttribute('hidden')

  //   classNamePopup.innerText = currentTarget.className

  //   let twoXlBreakpointClasses = [...currentTarget.classList].filter(
  //     (className) => className.startsWith('2xl:')
  //   )

  //   let xlBreakpointClasses = [...currentTarget.classList].filter((className) =>
  //     className.startsWith('xl:')
  //   )

  // let lgBreakpointClasses = [...currentTarget.classList].filter((className) =>
  //   className.startsWith('lg:')
  // )

  //   let mdBreakpointClasses = [...currentTarget.classList].filter((className) =>
  //     className.startsWith('md:')
  //   )

  //   let smBreakpointClasses = [...currentTarget.classList].filter((className) =>
  //     className.startsWith('sm:')
  //   )

  //   document.addEventListener('keydown', function (event) {
  //     if (event.shiftKey && event.key === 'H') {
  //       twoXlBreakpointClasses.forEach((className) =>
  //         currentTarget.classList.toggle(className)
  //       )

  //       classNamePopup.innerText = currentTarget.className
  //     }

  //     if (event.shiftKey && event.key === 'X') {
  //       xlBreakpointClasses.forEach((className) =>
  //         currentTarget.classList.toggle(className)
  //       )

  //       classNamePopup.innerText = currentTarget.className
  //     }

  //     if (event.shiftKey && event.key === 'L') {
  // lgBreakpointClasses.forEach((className) =>
  //   currentTarget.classList.toggle(className)
  // )

  //       classNamePopup.innerText = currentTarget.className
  //     }

  //     if (event.shiftKey && event.key === 'M') {
  //       mdBreakpointClasses.forEach((className) =>
  //         currentTarget.classList.toggle(className)
  //       )

  //       classNamePopup.innerText = currentTarget.className
  //     }

  //     if (event.shiftKey && event.key === 'S') {
  //       smBreakpointClasses.forEach((className) =>
  //         currentTarget.classList.toggle(className)
  //       )

  //       classNamePopup.innerText = currentTarget.className
  //     }
  //   })
  // })

  let setElementStyle = (targetElement, targetElementStyle) => {
    targetElement.setAttribute(
      'style',
      Object.entries(targetElementStyle)
        .map(([key, value]) => `${key}: ${value}`)
        .join(';')
    )
  }

  let getActiveBreakpoint = () => {
    let windowWidth = window.innerWidth

    let tailwindBreakpoints = {
      640: 'SM',
      768: 'MD',
      1024: 'LG',
      1280: 'XL',
      1536: '2XL',
    }

    let activeBreakpoint = Object.keys(tailwindBreakpoints)
      .filter((breakpointWidth) => breakpointWidth < windowWidth)
      .at(-1)

    return tailwindBreakpoints[activeBreakpoint] || 'Default'
  }
}
