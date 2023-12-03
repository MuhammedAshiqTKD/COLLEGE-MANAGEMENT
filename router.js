import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/getfullstaff").get(controller.getFullstaff);
router.route("/getDetails/:id").post(controller.getfullDetails);
router.route("/deletestaff/:id").delete(controller.deleteStaff);
router.route("/editstaff/:id").patch(controller.editStaff);


export default router;