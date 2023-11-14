import { Router } from "express";
import * as rh from "./requesthandlers2.js"

const router=Router()
router.route("/set-data").post(rh.setdata);
router.route("/get-data").get(rh.getdata);

export default router