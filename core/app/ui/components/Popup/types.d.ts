import { ReactElement } from 'react'

export interface IPopup {
    render: () => ReactElement
}

export interface IPopupComponent {
    render?: IPopup['render']
    onClose?: () => void
    visible?: boolean
}
