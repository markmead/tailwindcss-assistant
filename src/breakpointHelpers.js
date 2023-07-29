export function getBreakpointClasses(twElement) {
  return {
    '2xl': [...twElement.classList].filter((className) =>
      className.startsWith('2xl:')
    ),
    xl: [...twElement.classList].filter((className) =>
      className.startsWith('xl:')
    ),
    lg: [...twElement.classList].filter((className) =>
      className.startsWith('lg:')
    ),
    md: [...twElement.classList].filter((className) =>
      className.startsWith('md:')
    ),
    sm: [...twElement.classList].filter((className) =>
      className.startsWith('sm:')
    ),
    dark: [...twElement.classList].filter((className) =>
      className.startsWith('dark:')
    ),
  }
}

export function getActiveBreakpoint() {
  const windowWidth = window.innerWidth

  const tailwindBreakpoints = {
    640: 'sm',
    768: 'md',
    1024: 'lg',
    1280: 'xl',
    1536: '2xl',
  }

  const activeBreakpoint = Object.keys(tailwindBreakpoints)
    .filter((breakpointWidth) => breakpointWidth < windowWidth)
    .at(-1)

  return tailwindBreakpoints[activeBreakpoint] || 'Default'
}
