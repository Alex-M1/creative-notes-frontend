export interface TRegistartionPayload {
    name: string;
    value: string | boolean;
}
export interface TInitialState {
    login: string;
    password: string;
    confirm: string;
}

export interface TRegistrationAction {
    type: string;
    payload?: TRegistartionPayload;
}
