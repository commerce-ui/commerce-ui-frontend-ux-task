import { useEffect, useState } from 'react'

function parseMediaQueryString(mediaQuery: string): string {
  const strArr = mediaQuery.split(' ')
  if (strArr[0] === '@media') {
    return strArr.slice(1).join(' ')
  }
  return mediaQuery
}
export function useMediaQuery(mediaQuery: string): any {
  const [matches, setMatches] = useState<boolean>(false)
  const mediaQueryParsed = parseMediaQueryString(mediaQuery)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryParsed)
    setMatches(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', (e) => {
      setMatches(e.matches)
    })

    return mediaQueryList.removeEventListener('change', (e) => {
      setMatches(e.matches)
    })
  }, [matches, mediaQueryParsed])

  return matches
}
