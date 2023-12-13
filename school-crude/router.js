import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./auth.js"

const router=Router();
// router.route("/display").post(controller.addtask);
// router.route("/movies").get(controller.getdata);
// router.route("/moviedetails/:id").post(controller.getDetails);
// router.route("/deltask/:id").delete(controller.delMovie);
// router.route("/editmovie/:id").patch(controller.edit);

router.route("/addstaff").post(controller.addStaff);
router.route("/adduser").post(controller.addUser);
router.route("/login").post(controller.login);

router.route("/home").get(Auth,controller.home);
router.route("/getstaff").get(controller.getStaff);
router.route("/delstaffdata/:id").delete(controller.delStaffData);
router.route("/getstaffdetails/:id").post(controller.getStaffulldata)
router.route("/editstaffdetails/:id").patch(controller.editStaffdetails);
// router.route("/delstaffdata/:id").delete(controller.delStaffData);
    // res.status(200).send("this is controller"))
export default router;