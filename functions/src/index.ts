import * as functions from "firebase-functions";
import {appMetaData} from "./app-metadata.express";


exports.metadata = functions.https.onRequest(appMetaData);
