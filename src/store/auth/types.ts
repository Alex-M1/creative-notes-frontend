export interface IAuthInputPld {
    name: string;
    value: string;
}
export interface IAuthState {
    login: string;
    password: string;
    confirm: string;
}

export interface ILoginPassword {
    login: string;
    password: string;
}

export interface IAuthSubmitPayload{
    currentPage: string;
    push: (arg: string) => void
}
