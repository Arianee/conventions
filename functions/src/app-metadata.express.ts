import * as express from "express";
import * as cors from "cors";

import {metaDataRouter} from "./routers/metadata-router.express";

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.use("/metadata", metaDataRouter);

exports.handler = app;
export {app as appMetaData};
