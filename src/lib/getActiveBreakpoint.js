import { tailwindBreakpoints } from './breakpointsData'

export function getActiveBreakpoint() {
  const windowWidth = window.innerWidth

  const activeBreakpoint = Object.keys(tailwindBreakpoints)
    .filter((breakpointWidth) => breakpointWidth < windowWidth)
    .at(-1)

  return tailwindBreakpoints[activeBreakpoint] || 'Default'
}

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
