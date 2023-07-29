export function initTailwind() {
  const scriptElement = document.createElement('script')

  scriptElement.setAttribute(
    'src',
    'https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp'
  )

  document.head.appendChild(scriptElement)
}
