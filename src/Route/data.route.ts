import { Router } from "express";
import { deleteData, getAllData, postData } from "../controller/data.controller";

const dataLoadRouter = Router();

dataLoadRouter.post("/allposts",postData)

// dataLoadRouter.get("/allposts",getDataQuery)

dataLoadRouter.get("/allposts",getAllData)

dataLoadRouter.delete("/allposts/:id", deleteData);
export default dataLoadRouter;