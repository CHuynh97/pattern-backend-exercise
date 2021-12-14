import { Request } from 'express';
import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface RetrieveJobsRequest extends Request {
    query: {
        title: string,
        minHourlyPay: string,
        maxHourlyPay: string,
        location: string,
    }
}

export interface RetrieveJobsResponse extends Response {
    json: Send<{
        jobs: {
            id: number;
            title: string,
            description: string,
            hourlyPay: number,
            location: string,
            createdTimestamp: string,
            updatedTimestamp: string,
        }[]
    }, this>;
}
