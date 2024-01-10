import { SignUpUseCase } from '../app/useCases/SignUpUseCase';

export function makeSignUpUseCase() {
    return new SignUpUseCase();
}
