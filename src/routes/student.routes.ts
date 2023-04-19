import { Router } from "express";
import { login, newStudent, resetPassword } from "../controllers/student/auth";
import { validate } from "../middlewares/validateBody";
import { resetPasswordSchema, studentAdmissionSchema } from "../middlewares/yupSchema";
import { loginSchema } from "../middlewares/yupSchema";
import { singleStudent } from "../controllers/student/crud";

const student = Router();

// New Admission
student.route("/").post(validate(studentAdmissionSchema), newStudent);

// Authentication
student
  .route("/auth/:email?")
  .post(validate(loginSchema), login)
  .patch(validate(resetPasswordSchema), resetPassword);

// CRUD
student.route("/:email").get(singleStudent);


export default student;
