
export type TLoginDataForm = {
    email: string,
    password: string
}

export interface ILoginComponent {
    handleSubmit: (dataForm: TLoginDataForm) => void
}
