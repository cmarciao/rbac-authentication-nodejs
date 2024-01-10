import { IRequest } from "./IRequest";

export type IResponse = {
    statusCode: number;
    body: Record<string, any> | null;
}

export type IController = {
    handle: (request: IRequest) => Promise<IResponse>
}
