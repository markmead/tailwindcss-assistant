export const twaBreakpointInputsCreator = (elId, elName) => `
      <div>
        <input type="checkbox" id="${elId}" name="${elName}" checked class="sr-only peer" />

        <label
          for="${elId}"
          class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center"
        >
          <span class="select-none">${elName}</span>
        </label>
      </div>
    `

export const twaPositionButtonCreator = (elName, elClasses) => `
    <div>
      <button data-position='${elClasses}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-12 grid place-content-center">
        <span class="select-none">${elName}</span>
      </button>
    </div>
  `

export const twaRelativeButtonCreator = (elName) => `
  <div>
    <button data-relative='${elName}' class="bg-slate-800 rounded-md text-xs font-medium hover:ring peer-focus:ring peer-focus:ring-indigo-500 text-white h-8 w-14 grid place-content-center">
      <span class="select-none">${elName}</span>
    </button>
  </div>
`

export const twaTitleCreator = (elTitle) => `
  <strong class="text-slate-400 font-medium text-sm select-none">
    ${elTitle}
  </strong>
`
