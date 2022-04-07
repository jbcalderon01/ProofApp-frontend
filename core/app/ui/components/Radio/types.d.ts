export type TRadioEvent = {
    value?: string | number,
    name?: string,
    checked?: boolean
}
export type TRadio = {
    label?: string
    value?: string | number
    name?:string
    checked?: boolean
    onChange?: (event: TRadioEvent) => void
}

export type TRadioGroup = {
    title: string
}

// Styled

export type TCircleCheck = {
    checked?: boolean
}

