import asyncHandler from "express-async-handler";
import { StudentService } from "../../services/student";
import { dataFormattor } from "../../utils/JSON-formattor";
import { NoticeService } from "../../services/notice";

// Student service
const service = new StudentService();
const noticeService = new NoticeService();

// Get single student data
export const singleStudent = asyncHandler(async (req, res) => {
  const studentData = await service.singleStudentData(req.tokenPayload?.email!);
  res.json(dataFormattor(studentData));
});

// Notices for students
export const notices = asyncHandler(async (req, res) => {
  const studentNotices = await noticeService.studentNotices();
  res.json(dataFormattor(studentNotices));
});

// Available meal plans
export const availableMealPlans = asyncHandler(async (req, res) => {
  console.log("available mealPlans");
});