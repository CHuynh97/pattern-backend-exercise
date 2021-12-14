import { Request } from 'express';
import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface RetrieveJobRequest extends Request {
    params: {
        id: string,
    }
}

export interface RetrieveJobResponse extends Response {
    json: Send<{ title: string, description: string, hourlyPay: number, location: string }, this>;
}
