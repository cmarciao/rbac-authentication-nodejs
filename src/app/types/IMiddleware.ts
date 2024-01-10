import { IRequest } from "./IRequest";

export type IResponse = {
    statusCode: number;
    body: Record<string, any> | null;
}

export type IData = {
    data: Record<string, any>;
}

export type IMiddleware = {
    handle(req: IRequest): Promise<IResponse | IData>
}
