import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type TNavItem = {
    data: {
        name: string,
        icon: IconProp,
        notification?: number
        submenu?: any[]
        path?: string
    }
    isOpenAside: boolean
}

// Styled

export type TArrowIcon = {
    open?: boolean
}
export type TNavItemWrapper = {
    active?: boolean
    isExistSubmenu?: boolean
}
