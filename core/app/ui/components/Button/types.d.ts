import { TTheme } from '@app/ui/styles/declarations'
import { MouseEventHandler } from 'react'

type TVariantButton = 'filled' | 'border' | 'flat' | 'gradient' | 'round'

type TSizeButton = 'large' | 'default' | 'small'

type TColor = keyof TTheme['colors']

export interface IButton {
  variant?: TVariantButton
  size?: TSizeButton
  color?: TColor
  onClick?: MouseEventHandler
  type?: 'submit' | 'button'
}

// Styled

export type TButtonWrapper = {
  variant: TVariantButton
  size: TSizeButton
  color: TColor
}
