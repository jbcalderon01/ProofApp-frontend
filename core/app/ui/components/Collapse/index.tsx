import { FC, useEffect, useRef } from 'react'

import { CollapseContent } from './styled'
import { ICollapse } from './types'

export const Collapse: FC<ICollapse> = ({ children, open: show }) => {
    // Ref
    const collapseRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (show) {
            if (collapseRef.current) collapseRef.current.style.maxHeight = `${ collapseRef.current.scrollHeight }px`
        } else if (collapseRef.current?.style.maxHeight) collapseRef.current.style.maxHeight = ''
    }, [show, collapseRef])

    return (
        <CollapseContent ref={collapseRef}>
            {children}
        </CollapseContent>
    )
}
