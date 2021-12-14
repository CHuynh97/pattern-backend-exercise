import { getManager } from "typeorm";
import { Job } from "../entity/job";
import { DeleteJobRequest, DeleteJobResponse } from "../models/delete-job";

export const DeleteJobHandler = async (req: DeleteJobRequest, res: DeleteJobResponse) => {
    const manager = getManager();
    const jobRecord = await manager.findOne(Job, Number(req.params.id));
    if (jobRecord === undefined) {
        res.status(404).send();
    } else {
        await manager.softDelete(Job, { id: jobRecord.id });
        res.status(204).send();
    }
};
