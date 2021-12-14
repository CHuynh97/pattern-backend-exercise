import { getManager } from "typeorm";
import { Job } from "../entity/job";
import { CreateJobRequest, CreateJobResponse } from "../models/create-job";

export const CreateJobHandler = async (req: CreateJobRequest, res: CreateJobResponse) => {
    const manager = getManager();
    const jobRecord = manager.create(Job, req.body);
    manager.save(jobRecord)
        .then(({ id }) => {
            res.status(201).json({ id });
        })
        .catch(() => {
            res.status(400).send();
        });
};
