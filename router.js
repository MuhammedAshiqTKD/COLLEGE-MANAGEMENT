import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/addstaff").post(controller.addStaff);


export default router;