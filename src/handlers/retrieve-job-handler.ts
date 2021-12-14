import { getManager } from "typeorm";
import { Job } from "../entity/job";
import { RetrieveJobRequest, RetrieveJobResponse } from "../models/retrieve-job";

export const RetrieveJobHandler = async (req: RetrieveJobRequest, res: RetrieveJobResponse) => {
    const manager = getManager();
    const jobRecord = await manager.findOne(Job, Number(req.params.id));
    if (jobRecord === undefined || jobRecord.deletedTimestamp !== null) {
        res.status(404).send();
    } else {
        const { deletedTimestamp, ...response } = jobRecord;
        res.status(200).json(response)
    }
};
