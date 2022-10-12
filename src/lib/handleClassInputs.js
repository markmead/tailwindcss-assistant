export const CLASS_INPUTS_WRAPPER = 'twaClassInputsRender'

export function getClassInputs() {
  return [...document.querySelectorAll('[data-class]')]
}

export function renderClassInputs(twaClasses) {
  resetClassInputs()

  twaClasses.forEach(function (twaClass) {
    document.getElementById(CLASS_INPUTS_WRAPPER).innerHTML +=
      classInputsCreator(twaClass)
  })
}

export function generateClassInputListeners(currentTarget) {
  getClassInputs().forEach((twaInput) => {
    twaInput.addEventListener('input', () => {
      currentTarget.classList.toggle(twaInput.name)

      const inputLabel = document.querySelector(`[for='${twaInput.id}']`)

      inputLabel.classList.toggle('opacity-25')
    })
  })
}

function resetClassInputs() {
  document.getElementById(CLASS_INPUTS_WRAPPER).innerHTML = ''
}

function classInputsCreator(className) {
  return `
    <div class="flex items-center">
        <input type="checkbox" id="${className}" name="${className}" checked data-class class="sr-only peer" />

        <label
            for="${className}"
            class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
        >
            <span class="select-none text-xs leading-none font-medium">${className}</span>
        </label>
    </div>
    `
}
