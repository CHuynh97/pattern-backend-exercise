import { Request } from 'express';
import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface UpdateJobRequest extends Request {
    params: {
        id: string,
    }
    body: {
        title: string,
        description: string,
        hourlyPay: number,
        location: string,
    }
}

export interface UpdateJobResponse extends Response {
    json: Send<{ id: number }, this>;
}