import { Request } from 'express';
import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface DeleteJobRequest extends Request {
    params: {
        id: string,
    }
}

export interface DeleteJobResponse extends Response {
    json: Send<{}, this>;
}