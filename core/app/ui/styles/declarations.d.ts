import 'styled-components'
import { DefaultTheme } from 'styled-components'

import { darkTheme, lightTheme } from './theme'

export type TTheme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
