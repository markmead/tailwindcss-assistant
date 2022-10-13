export const CLASS_ADD_FORM = 'twaAddClassForm'
export const CLASS_ADD_INPUT = 'twaAddClassInput'

export function addClassFromInput(currentTarget) {
  currentTarget.classList.add(document.getElementById(CLASS_ADD_INPUT).value)

  resetInput()
}

export function generateAddClassInputListeners(currentTarget) {
  document
    .getElementById(CLASS_ADD_FORM)
    .addEventListener('submit', function (e) {
      e.preventDefault()

      addClassFromInput(currentTarget)
    })
}

function resetInput() {
  document.getElementById(CLASS_ADD_INPUT).value = ''
}
