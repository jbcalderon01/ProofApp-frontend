
export type TRegisterDataForm = {
    email: string,
    password: string
    confirmPassword: string
}

export interface IRegisterComponent {
    handleSubmit: (dataForm: TRegisterDataForm) => void
}
