export default function (Alpine) {
  Alpine.directive('tailwind-assistant', (el, {}, {}) => {
    let setElementStyle = (targetElement, targetElementStyle) => {
      targetElement.setAttribute(
        'style',
        Object.entries(targetElementStyle)
          .map(([key, value]) => `${key}: ${value}`)
          .join(';')
      )
    }

    let getActiveBreakpoint = () => {
      let windowWidth = window.innerWidth

      let tailwindBreakpoints = {
        640: 'SM',
        768: 'MD',
        1024: 'LG',
        1280: 'XL',
        1536: '2XL',
      }

      let activeBreakpoint = Object.keys(tailwindBreakpoints)
        .filter((breakpointWidth) => breakpointWidth < windowWidth)
        .at(-1)

      return tailwindBreakpoints[activeBreakpoint] || 'Default'
    }

    let popupWrapper = document.createElement('div')

    let classNamePopup = document.createElement('div')

    let breakpointPopup = document.createElement('div')

    let popupStyle = {
      padding: '8px',
      background: '#000',
      color: '#FFF',
      'font-size': '12px',
    }

    setElementStyle(classNamePopup, popupStyle)

    setElementStyle(breakpointPopup, popupStyle)

    setElementStyle(popupWrapper, {
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      display: 'flex',
      gap: '8px',
    })

    classNamePopup.setAttribute('hidden', true)

    popupWrapper.appendChild(classNamePopup)

    popupWrapper.appendChild(breakpointPopup)

    el.appendChild(popupWrapper)

    let setBreakpointText = () => {
      return `${window.innerWidth}px - ${getActiveBreakpoint()}`
    }

    breakpointPopup.innerText = setBreakpointText()

    window.addEventListener('resize', function () {
      breakpointPopup.innerText = setBreakpointText()
    })

    document.addEventListener('mouseover', function (event) {
      let currentTarget = event.target

      if (!currentTarget.className) {
        classNamePopup.setAttribute('hidden', true)

        return
      }

      classNamePopup.removeAttribute('hidden')

      classNamePopup.innerText = currentTarget.className

      let twoXlBreakpointClasses = [...currentTarget.classList].filter(
        (className) => className.startsWith('2xl:')
      )

      let xlBreakpointClasses = [...currentTarget.classList].filter(
        (className) => className.startsWith('xl:')
      )

      let lgBreakpointClasses = [...currentTarget.classList].filter(
        (className) => className.startsWith('lg:')
      )

      let mdBreakpointClasses = [...currentTarget.classList].filter(
        (className) => className.startsWith('md:')
      )

      let smBreakpointClasses = [...currentTarget.classList].filter(
        (className) => className.startsWith('sm:')
      )

      document.addEventListener('keydown', function (event) {
        if (event.shiftKey && event.key === 'H') {
          twoXlBreakpointClasses.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classNamePopup.innerText = currentTarget.className
        }

        if (event.shiftKey && event.key === 'X') {
          xlBreakpointClasses.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classNamePopup.innerText = currentTarget.className
        }

        if (event.shiftKey && event.key === 'L') {
          lgBreakpointClasses.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classNamePopup.innerText = currentTarget.className
        }

        if (event.shiftKey && event.key === 'M') {
          mdBreakpointClasses.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classNamePopup.innerText = currentTarget.className
        }

        if (event.shiftKey && event.key === 'S') {
          smBreakpointClasses.forEach((className) =>
            currentTarget.classList.toggle(className)
          )

          classNamePopup.innerText = currentTarget.className
        }
      })
    })
  })
}
