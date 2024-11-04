import express, {
    NextFunction,
    Request,
    Response,
} from "express";
import cors from "cors";
const app = express();


import { successResponse } from "./controller/response.controller";
import dataLoadRouter from "./Route/data.route";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
}))

app.use("/api/posts", dataLoadRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    successResponse(res, {
        statusCode: 200,
        message: "Hello, I am typescript and express server. image uploader",
        payload: {},
    });
});



export default app;

