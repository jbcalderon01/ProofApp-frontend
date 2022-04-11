export type TToggleChangeEvent = {
    value?: string | number,
    name?: string,
    checked: boolean
}

export type TToggle = {
    value?: string | number,
    checked?: boolean,
    name?: string
    onChange?: (event: TToggleChangeEvent) => void
}

// Styled

export type TToggleWrapper = {
    checked?: boolean
}
