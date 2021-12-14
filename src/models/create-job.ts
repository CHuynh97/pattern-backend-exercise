import { Request } from 'express';
import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface CreateJobRequest extends Request {
    body: {
        title: string,
        description: string,
        hourlyPay: number,
        location: string,
    }
}

export interface CreateJobResponse extends Response {
    json: Send<{ id: number }, this>;
}
