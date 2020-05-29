import { LoginModelType } from '../models';
// Login
export const login = (model: LoginModelType) => ({
    type: 'LOGIN',
    payload: model,
});

