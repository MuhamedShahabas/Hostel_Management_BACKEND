import { Router } from "express";
import {
  allStaffs,
  singleDetails,
  updateSingleStaff,
} from "../controllers/staff/crud.staff";
import { newStaff, login } from "../controllers/staff/auth.staff";
import { loginSchema, staffSchema } from "../middlewares/yupSchema";
import { validate } from "../middlewares/validateBody";
import { validate_email, validate_id } from "../middlewares/validateParams";
import { validateRole } from "../middlewares/validateRole";
import { newMealPlan } from "../controllers/staff/chef";

const staff = Router();

staff.route("/").post(validate(staffSchema), newStaff).get(allStaffs);

staff
  .route("/:email")
  .get(validate_email, singleDetails)
  .patch(validate_email, validate(staffSchema), updateSingleStaff);

staff.route("/auth").post(validate(loginSchema), login);

// Chef routes
staff.route("/:email/meals/:_id?").post(validateRole("chef"), newMealPlan);

export default staff;
