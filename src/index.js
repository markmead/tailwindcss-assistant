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
import {
  getActiveBreakpoint,
  getBreakpointClasses,
} from './lib/getActiveBreakpoint'
import {
  BREAKPOINT_INPUTS_WRAPPER,
  generateBreakpointInputListeners,
  getBreakpointInputs,
  renderBreakpointInputs,
} from './lib/handleBreakpointInputs'
import {
  generatePositionButtonsListeners,
  initPopup,
  POPUP_POSITIONS_WRAPPER,
  renderPositionButtons,
} from './lib/handlePopup'
import { initTailwind } from './lib/initTailwind'
import { renderError } from './lib/handleError'
import {
  ELEMENT_BUTTONS_WRAPPER,
  generateElementButtonsListeners,
  renderElementButtons,
} from './lib/handleElementButtons'

export default function () {
  let popupPosition = ['right-4', 'bottom-4']

  const popupWrapper = document.createElement('div')

  initTailwind()
  initPopup(popupWrapper, popupPosition)

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

          <div class="space-y-2">
            ${twaTitleCreator('Toggle Breakpoints')}

            <fieldset id="${BREAKPOINT_INPUTS_WRAPPER}" class="flex flex-wrap gap-2"></fieldset>

            <small class="text-xs font-medium text-slate-500 block">
              Active Breakpoint: <span id="twaBreakpoint" class="uppercase"></span>
            </small>
          </div>

          <div class="space-y-2">
            ${twaTitleCreator('Change Element')}

            <div id="${ELEMENT_BUTTONS_WRAPPER}" class="flex flex-wrap gap-2"></div>

            <div id="twaError" class="text-red-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div class="space-y-2">
            ${twaTitleCreator('Popup Position')}

            <div id="${POPUP_POSITIONS_WRAPPER}" class="flex flex-wrap gap-2"></div>
          </div>
        </div>
      </details>
    `

  let currentTarget

  let twaBreakpoint = document.getElementById('twaBreakpoint')

  let twaBreakpointInputs = [...document.querySelectorAll('[data-breakpoint]')]

  let twaRelativeElementButtons = [
    ...document.querySelectorAll('[data-relative]'),
  ]

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

      twaBreakpointClasses = getBreakpointClasses(currentTarget)

      handleAddClassForm()
      handleClassInputs()
      handleBreakpointInputs()
      handlePositionButtons()
      handleElementButtons()
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

    generateClassInputListeners(currentTarget)
  }

  function handleBreakpointInputs() {
    renderBreakpointInputs()

    twaBreakpointInputs = getBreakpointInputs()

    generateBreakpointInputListeners(currentTarget, twaBreakpointClasses)
  }

  function handlePositionButtons() {
    renderPositionButtons()

    generatePositionButtonsListeners(popupWrapper, popupPosition)
  }

  function handleElementButtons() {
    renderElementButtons()

    generateElementButtonsListeners(currentTarget)
  }

  document.addEventListener('updated:twa-element', function (e) {
    currentTarget = e.detail.newTarget

    twaBreakpointClasses = getBreakpointClasses(currentTarget)

    handleClassInputs()
    handleBreakpointInputs()
  })

  window.addEventListener(
    'resize',
    () => (twaBreakpoint.innerText = getActiveBreakpoint())
  )
}
