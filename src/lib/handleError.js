export function renderError(errorMessage) {
  const twaError = document.getElementById('twaError')

  twaError.removeAttribute('hidden')

  twaError.innerText = errorMessage

  setTimeout(() => twaError.setAttribute('hidden', true), 3000)
}
