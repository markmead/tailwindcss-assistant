import { initTailwind } from './initTailwind.js'
import {
  getBreakpointClasses,
  getActiveBreakpoint,
} from './breakpointHelpers.js'
import {
  twaBreakpointInputsCreator,
  twaPositionButtonCreator,
  twaRelativeButtonCreator,
  twaTitleCreator,
} from './creatorHelper.js'

export default function () {
  initTailwind()

  const popupWrapper = document.createElement('div')

  popupWrapper.innerHTML = `
      <details id="twaPopup" class="relative bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-indigo-500 focus:outline-none">
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

          <div>
          <form id="twaClassesAdd">
            ${twaTitleCreator('Edit Classes')}

            <textarea id="twaClassesEditor" rows="6" spellcheck="false" data-gramm="false" class="mt-1 border-slate-700 bg-slate-800 text-slate-300 rounded-md w-full text-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-slate-700 resize-none"></textarea>

            <button class="bg-indigo-600 text-white rounded-md px-5 py-3 text-sm font-medium mt-2 w-full focus:outline-none focus:ring focus:ring-indigo-500 hover:ring hover:ring-indigo-600">
              <span class="select-none">Update</span>
            </button>
          </form>
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

            <div id="twaError" class="mt-2 text-amber-500 text-sm font-medium select-none" hidden></div>
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

  const twaBreakpoint = document.getElementById('twaBreakpoint')
  const twaBreakpointInputs = [
    ...document.querySelectorAll('input[type="checkbox"]'),
  ]

  const twaClassesAdd = document.getElementById('twaClassesAdd')
  const twaClassesEditor = document.getElementById('twaClassesEditor')

  const twaPopupPositionButtons = [
    ...document.querySelectorAll('[data-position]'),
  ]
  const twaRelativeElementButtons = [
    ...document.querySelectorAll('[data-relative]'),
  ]

  const twaError = document.getElementById('twaError')

  let currentTarget

  let twaBreakpointClasses

  document.addEventListener('click', (eventItem) => {
    const targetEl = eventItem.target

    if (!twaPopup.contains(targetEl)) {
      twaPopup.open = false
    }

    if (eventItem.metaKey) {
      eventItem.preventDefault()

      twaPopup.open = true

      currentTarget = targetEl

      twaBreakpoint.innerText = getActiveBreakpoint()

      twaBreakpointInputs.forEach((twaInput) => (twaInput.checked = true))

      twaClassesEditor.value = currentTarget.className

      twaBreakpointClasses = getBreakpointClasses(currentTarget)
    }
  })

  twaBreakpointInputs.forEach((twaInput) => {
    twaInput.addEventListener('input', () => {
      twaBreakpointClasses[twaInput.name].forEach((twClass) =>
        currentTarget.classList.toggle(twClass)
      )

      twaClassesEditor.value = currentTarget.className
    })
  })

  twaRelativeElementButtons.forEach((relativeElementButton) => {
    relativeElementButton.addEventListener('click', () => {
      let relativeElement

      const relativeElementKey =
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

      twaClassesEditor.value = currentTarget.className

      twaBreakpointClasses = getBreakpointClasses(currentTarget)
    })
  })

  twaClassesEditor.addEventListener('keydown', (eventItem) => {
    if (eventItem.key === 'Enter') {
      eventItem.preventItemDefault()

      submitClassesForm(eventItem)
    }
  })

  twaClassesAdd.addEventListener('submit', (eventItem) => {
    submitClassesForm(eventItem)
  })

  function submitClassesForm(eventItem) {
    eventItem.preventDefault()

    currentTarget.className = twaClassesEditor.value

    twaBreakpointClasses = getBreakpointClasses(currentTarget)
  }

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

  const renderError = (errorMessage) => {
    twaError.removeAttribute('hidden')

    twaError.innerText = errorMessage

    setTimeout(() => twaError.setAttribute('hidden', true), 3000)
  }
}
