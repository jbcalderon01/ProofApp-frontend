/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useClickOutside } from '@app/hooks'

import { PopupContent, PopupWrapper } from './styles'
import { IPopupComponent } from './types'

export const Popup: FC<IPopupComponent> = ({
    render,
    onClose,
    visible
}: IPopupComponent) => {
    const refWrapper = useClickOutside(() => onClose && onClose())

    return (
        <>
            <PopupWrapper ref={refWrapper} visible={visible} onClick={(e: any) => e.stopPropagation()}>
                <PopupContent>
                    {render && render()}
                </PopupContent>
            </PopupWrapper>
        </>
    )
}
