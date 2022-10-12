export const POPUP_POSITIONS_WRAPPER = 'twaPopupPositionsWrapper'

export function initPopup(popupWrapper, popupPosition) {
  popupWrapper.classList.add('fixed')

  popupPosition.forEach((className) => popupWrapper.classList.add(className))

  document.body.appendChild(popupWrapper)
}

export function getPositionButtons() {
  return [...document.querySelectorAll('[data-position]')]
}

export function renderPositionButtons() {
  resetPositionButtons()

  popupPositions.forEach(function (popupPosition) {
    document.getElementById(POPUP_POSITIONS_WRAPPER).innerHTML +=
      popupButtonsCreator(popupPosition.name, popupPosition.classNames)
  })
}

function resetPositionButtons() {
  document.getElementById(POPUP_POSITIONS_WRAPPER).innerHTML = ''
}

export function generatePositionButtonsListeners(popupWrapper, popupPosition) {
  getPositionButtons().forEach((positionButton) => {
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
}

function popupButtonsCreator(popupName, popupClasses) {
  return `
      <div>
        <button data-position="${popupClasses}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
          <span class="select-none text-xs leading-none font-medium">${popupName}</span>
        </button>
      </div>
    `
}

const popupPositions = [
  {
    name: 'Top Left',
    classNames: ['top-4', 'left-4'],
  },
  {
    name: 'Top Right',
    classNames: ['top-4', 'right-4'],
  },
  {
    name: 'Bottom Left',
    classNames: ['bottom-4', 'left-4'],
  },
  {
    name: 'Bottom Right',
    classNames: ['bottom-4', 'right-4'],
  },
]
