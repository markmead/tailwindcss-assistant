import { tailwindBreakpointClasses } from './breakpointsData'

export const BREAKPOINT_INPUTS_WRAPPER = 'twaBreakpointInputsRender'

export function getBreakpointInputs() {
  return [...document.querySelectorAll('[data-breakpoint]')]
}

export function renderBreakpointInputs() {
  resetBreakpointInputs()

  tailwindBreakpointClasses.forEach(function (twaBreakpoint) {
    document.getElementById(BREAKPOINT_INPUTS_WRAPPER).innerHTML +=
      breakpointInputsCreator(twaBreakpoint)
  })
}

export function generateBreakpointInputListeners(
  currentTarget,
  twaBreakpointClasses
) {
  getBreakpointInputs().forEach((twaInput) => {
    twaInput.addEventListener('input', () => {
      const inputLabel = document.querySelector(
        `[for='${twaInput.getAttribute('id')}']`
      )

      inputLabel.classList.toggle('opacity-25')

      twaBreakpointClasses[twaInput.name].forEach(function (twClass) {
        currentTarget.classList.toggle(twClass)

        const inputLabel = document.querySelector(`[for='${twClass}']`)

        inputLabel.classList.toggle('opacity-25')
      })
    })
  })
}

function resetBreakpointInputs() {
  document.getElementById(BREAKPOINT_INPUTS_WRAPPER).innerHTML = ''
}

function breakpointInputsCreator(breakpointName) {
  return `
    <div>
      <input type="checkbox" id="${breakpointName}" name="${breakpointName}" checked data-breakpoint class="sr-only peer" />

      <label
        for="${breakpointName}"
        class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
      >
      <span class="select-none text-xs leading-none font-medium">${breakpointName}</span>
      </label>
    </div>
    `
}
