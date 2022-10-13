import { getBreakpointClasses } from './getActiveBreakpoint'
import { renderError } from './handleError'

const elementNames = ['prev', 'next', 'child', 'parent']

export const ELEMENT_BUTTONS_WRAPPER = 'twaElementButtonsRender'

export function getElementButtons() {
  return [...document.querySelectorAll('[data-relative]')]
}

export function renderElementButtons() {
  resetElements()
  elementNames.forEach(function (positionName) {
    document.getElementById(ELEMENT_BUTTONS_WRAPPER).innerHTML +=
      elementButtonsCreator(positionName)
  })
}

export function generateElementButtonsListeners(currentTarget) {
  getElementButtons().forEach((relativeElementButton) => {
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

      document.dispatchEvent(
        new CustomEvent('twa:updated-target', {
          bubbles: true,
          detail: { newTarget: relativeElement },
        })
      )
    })
  })
}

function resetElements() {
  document.getElementById(ELEMENT_BUTTONS_WRAPPER).innerHTML = ''
}

function elementButtonsCreator(buttonName) {
  return `
    <div>
      <button data-relative="${buttonName}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
      <span class="select-none text-xs leading-none font-medium capitalize">${buttonName}</span>
      </button>
    </div>
    `
}
