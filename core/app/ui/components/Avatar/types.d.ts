
import { TTheme } from '@app/ui/styles/declarations'

type TSize = 'sm' | 'md' | 'lg' | '1x'

export type TAvatar = {
    size?: TSize
    color?: keyof TTheme['colors']
}

// Styled
export type TAvatarWrapper = {
    size: TSize
    color: keyof TTheme['colors']
}
