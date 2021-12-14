import { getManager, Not, Between, LessThan, MoreThan } from "typeorm";
import { Job } from "../entity/job";
import { RetrieveJobsRequest, RetrieveJobsResponse } from "../models/retrieve-jobs";

export const RetrieveJobsHandler = async (req: RetrieveJobsRequest, res: RetrieveJobsResponse) => {
    const manager = getManager();
    const {
        title,
        minHourlyPay,
        maxHourlyPay,
        location,
    } = req.query;
    const queryParams: any = {}
    if (title !== undefined) {
        queryParams.title = title;
    }
    if (location != undefined) {
        queryParams.location = location;
    }
    queryParams.hourlyPay = Between(
        Number(minHourlyPay) || Number.NEGATIVE_INFINITY,
        Number(maxHourlyPay) || Number.POSITIVE_INFINITY
    );
    const jobRecords: Job[] = await manager.find(Job, { withDeleted: false, where: queryParams });
    res.status(200).json({
        jobs: jobRecords.map((job) => ({
            id: job.id,
            title: job.title,
            description: job.description,
            hourlyPay: job.hourlyPay,
            location: job.location,
            createdTimestamp: job.createdTimestamp,
            updatedTimestamp: job.updatedTimestamp,
        }))
    });
};
