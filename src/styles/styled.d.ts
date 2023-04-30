import 'styled-components'
import { theme } from './theme'

type ThemeInterface = (typeof theme)['base']

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
