export type IRequest = {
    body: Record<string, any>;
    params: Record<string, string>;
    accountId: string | undefined;
}

export type IResponse = {
    statusCode: number;
    body: Record<string, any> | null;
}

export type IController = {
    handle: (request: IRequest) => Promise<IResponse>
}
