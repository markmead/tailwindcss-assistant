import {
  CLASS_ADD_FORM,
  CLASS_ADD_INPUT,
  generateAddClassInputListeners,
} from './lib/handleAddClassForm'

import {
  CLASS_INPUTS_WRAPPER,
  generateClassInputListeners,
  getClassInputs,
  renderClassInputs,
} from './lib/handleClassInputs'

export default function () {
  let getActiveBreakpoint = () => {
    let windowWidth = window.innerWidth

    let tailwindBreakpoints = {
      640: 'sm',
      768: 'md',
      1024: 'lg',
      1280: 'xl',
      1536: '2xl',
    }

    let activeBreakpoint = Object.keys(tailwindBreakpoints)
      .filter((breakpointWidth) => breakpointWidth < windowWidth)
      .at(-1)

    return tailwindBreakpoints[activeBreakpoint] || 'Default'
  }

  let scriptElement = document.createElement('script')

  scriptElement.setAttribute(
    'src',
    'https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp'
  )

  document.head.appendChild(scriptElement)

  let popupWrapper = document.createElement('div')

  let twaBreakpointInputsCreator = (id, name) => `
      <div>
        <input type="checkbox" id="${id}" name="${name}" checked data-breakpoint class="sr-only peer" />

        <label
          for="${id}"
          class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${name}</span>
        </label>
      </div>
    `

  let twaPositionButtonCreator = (name, classes) => `
      <div>
        <button data-position='${classes}' class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-12 grid place-content-center">
          <span class="select-none">${name}</span>
        </button>
      </div>
    `

  let twaRelativeButtonCreator = (name) => `
      <div>
        <button data-relative='${name}' class="bg-slate-800 rounded text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white h-8 w-14 grid place-content-center">
          <span class="select-none">${name}</span>
        </button>
      </div>
    `

  let twaTitleCreator = (title) => `
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${title}
      </strong>
    `

  popupWrapper.innerHTML = `
      <details id="twaPopup" class="relative bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-teal-500 focus:outline-none">
          <span class="select-none">
            🤖
          </span>

          <span class="group-open:block hidden text-white text-sm font-medium select-none">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-4">
          <p class="text-center text-xs text-slate-400 select-none">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div class="space-y-2">
            ${twaTitleCreator('Classes')}

            <form id="${CLASS_ADD_FORM}">
              <div class="flex gap-2">
                <input type="text" id="${CLASS_ADD_INPUT}" placeholder="Add Tailwind CSS Class" class="border-slate-700 bg-slate-800 text-slate-300 rounded w-full text-xs focus:ring focus:ring-teal-500 focus:outline-none focus:border-slate-700" />

                <button class="bg-teal-600 text-white rounded px-3 py-1.5 text-xs font-medium shrink-0 focus:outline-none focus:ring focus:ring-teal-500 hover:ring hover:ring-teal-600">
                  <span class="select-none">Add</span>
                </button>
              </div>
            </form>

            <fieldset id="${CLASS_INPUTS_WRAPPER}" class="flex flex-wrap gap-2"></fieldset>
          </div>

          <div>
            ${twaTitleCreator('Toggle Breakpoints')}

            <fieldset class="flex flex-wrap gap-2 mt-1">
              ${twaBreakpointInputsCreator('twaClasses2xl', '2xl')}

              ${twaBreakpointInputsCreator('twaClassesXl', 'xl')}

              ${twaBreakpointInputsCreator('twaClassesLg', 'lg')}

              ${twaBreakpointInputsCreator('twaClassesMd', 'md')}

              ${twaBreakpointInputsCreator('twaClassesSm', 'sm')}

              ${twaBreakpointInputsCreator('twaClassesDark', 'dark')}
            </fieldset>

            <small class="text-xs font-medium text-slate-500 mt-1.5 block">
              Active Breakpoint: <span id="twaBreakpoint"></span>
            </small>
          </div>

          <div>
            ${twaTitleCreator('Change Element')}

            <div class="flex flex-wrap gap-2 mt-1">
              ${twaRelativeButtonCreator('parent')}

              ${twaRelativeButtonCreator('child')}

              ${twaRelativeButtonCreator('prev')}

              ${twaRelativeButtonCreator('next')}
            </div>

            <div id="twaError" class="mt-2 text-teal-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div>
            ${twaTitleCreator('Popup Position')}

            <div class="flex flex-wrap gap-2 mt-1">
              ${twaPositionButtonCreator('tl', ['top-4', 'left-4'])}

              ${twaPositionButtonCreator('tr', ['top-4', 'right-4'])}

              ${twaPositionButtonCreator('bl', ['bottom-4', 'left-4'])}

              ${twaPositionButtonCreator('br', ['bottom-4', 'right-4'])}
            </div>
          </div>
        </div>
      </details>
    `

  popupWrapper.classList.add('fixed')

  let popupPosition = ['right-4', 'bottom-4']

  popupPosition.forEach((className) => popupWrapper.classList.add(className))

  document.body.appendChild(popupWrapper)

  let currentTarget

  let twaBreakpoint = document.getElementById('twaBreakpoint')

  let twaBreakpointInputs = [...document.querySelectorAll('[data-breakpoint]')]

  let twaClassesEditor = document.getElementById('twaClassesEditor')

  let twaPopupPositionButtons = [
    ...document.querySelectorAll('[data-position]'),
  ]

  let twaRelativeElementButtons = [
    ...document.querySelectorAll('[data-relative]'),
  ]

  let twaError = document.getElementById('twaError')

  let twaBreakpointClasses

  let twaClasses = []

  document.addEventListener('click', (event) => {
    if (!twaPopup.contains(event.target)) {
      twaPopup.open = false
    }

    if (event.metaKey) {
      event.preventDefault()

      twaPopup.open = true

      currentTarget = event.target

      twaBreakpoint.innerText = getActiveBreakpoint()

      twaBreakpointInputs.forEach((twaInput) => (twaInput.checked = true))

      handleAddClassForm()

      handleClassInputs()

      twaBreakpointClasses = getBreakpointClasses(currentTarget)
    }
  })

  function handleAddClassForm() {
    generateAddClassInputListeners(currentTarget)

    document
      .getElementById(CLASS_ADD_FORM)
      .addEventListener('submit', handleClassInputs)
  }

  function handleClassInputs() {
    twaClasses = [...currentTarget.classList]

    renderClassInputs(twaClasses)

    twaClassInputs = getClassInputs()

    generateClassInputListeners(currentTarget, twaClassesEditor)
  }

  twaBreakpointInputs.forEach((twaInput) => {
    twaInput.addEventListener('input', () => {
      twaBreakpointClasses[twaInput.name].forEach(function (twClass) {
        currentTarget.classList.toggle(twClass)

        const inputLabel = document.querySelector(`[for='${twClass}']`)

        inputLabel.classList.toggle('opacity-25')
      })
    })
  })

  twaRelativeElementButtons.forEach((relativeElementButton) => {
    relativeElementButton.addEventListener('click', () => {
      let relativeElement

      let relativeElementKey =
        relativeElementButton.getAttribute('data-relative')

      if (relativeElementKey === 'parent') {
        relativeElement = currentTarget.parentElement
          ? currentTarget.parentElement
          : currentTarget

        !currentTarget.parentElement && renderError('No parent element')
      }

      if (relativeElementKey === 'prev') {
        relativeElement = currentTarget.previousElementSibling
          ? currentTarget.previousElementSibling
          : currentTarget

        !currentTarget.previousElementSibling &&
          renderError('No previous sibling element')
      }

      if (relativeElementKey === 'next') {
        relativeElement = currentTarget.nextElementSibling
          ? currentTarget.nextElementSibling
          : currentTarget

        !currentTarget.nextElementSibling &&
          renderError('No next sibling element')
      }

      if (relativeElementKey === 'child') {
        relativeElement = currentTarget.firstElementChild
          ? currentTarget.firstElementChild
          : currentTarget

        !currentTarget.firstElementChild && renderError('No child element')
      }

      currentTarget = relativeElement

      twaBreakpointInputs.forEach((twaInput) => (twaInput.checked = true))

      twaBreakpointClasses = getBreakpointClasses(currentTarget)

      handleClassInputs()
    })
  })

  window.addEventListener('resize', () => {
    twaBreakpoint.innerText = getActiveBreakpoint()
  })

  twaPopupPositionButtons.forEach((positionButton) => {
    positionButton.addEventListener('click', () => {
      popupPosition.forEach((className) =>
        popupWrapper.classList.remove(className)
      )

      popupPosition = positionButton.getAttribute('data-position').split(',')

      popupPosition.forEach((className) =>
        popupWrapper.classList.add(className)
      )
    })
  })

  let renderError = (message) => {
    twaError.removeAttribute('hidden')

    twaError.innerText = message

    setTimeout(() => {
      twaError.setAttribute('hidden', true)
    }, 3000)
  }

  let getBreakpointClasses = (twElement) => {
    return {
      '2xl': [...twElement.classList].filter((className) =>
        className.startsWith('2xl:')
      ),
      xl: [...twElement.classList].filter((className) =>
        className.startsWith('xl:')
      ),
      lg: [...twElement.classList].filter((className) =>
        className.startsWith('lg:')
      ),
      md: [...twElement.classList].filter((className) =>
        className.startsWith('md:')
      ),
      sm: [...twElement.classList].filter((className) =>
        className.startsWith('sm:')
      ),
      dark: [...twElement.classList].filter((className) =>
        className.startsWith('dark:')
      ),
    }
  }
}
