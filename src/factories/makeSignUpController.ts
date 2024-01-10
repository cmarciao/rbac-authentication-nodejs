import { makeSignUpUseCase } from './makeSignUpUseCase';
import { SignUpController } from '../app/controllers/SignUpController';

export function makeSignUpController() {
    const signUpUseCase = makeSignUpUseCase();

    return new SignUpController(signUpUseCase);
}
