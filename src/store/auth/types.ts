export interface IAuthInputPld {
    name: string;
    value: string;
}

export interface ILoginPassword {
    login: string;
    password: string;
}
export interface IAuthState extends ILoginPassword{
    confirm: string;
}

export interface IAuthSubmitPayload{
    currentPage: string;
    push: (arg: string) => void
}
