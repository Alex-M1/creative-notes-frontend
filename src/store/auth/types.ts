export interface IAuthInputPld {
    name: string;
    value: string;
}
export interface IAuthState {
    login: string;
    password: string;
    confirm: string;
}

export interface IAuthSumbitPayload{
    currentPage: string;
    push: (arg: string) => void
}
