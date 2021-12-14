import { getManager } from "typeorm";
import { Job } from "../entity/job";
import { UpdateJobRequest, UpdateJobResponse } from "../models/update-job";

export const UpdateJobHandler = async (req: UpdateJobRequest, res: UpdateJobResponse) => {
    const manager = getManager();
    const jobId = Number(req.params.id)
    const jobRecord = await manager.findOne(Job, jobId);
    if (jobRecord === undefined || jobRecord.deletedTimestamp !== null) {
        res.status(404).send();
    } else {
        jobRecord.title = req.body.title || jobRecord.title;
        jobRecord.description = req.body.description || jobRecord.description;
        jobRecord.hourlyPay = req.body.hourlyPay || jobRecord.hourlyPay;
        jobRecord.location = req.body.location || jobRecord.location;
        manager.save(jobRecord)
            .then(() => {
                res.status(204).send();
            })
            .catch(() => {
                res.status(400).send();
            });
        
    }
};
