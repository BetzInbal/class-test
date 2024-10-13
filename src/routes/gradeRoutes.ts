import { Router } from "express";
import { addGrade, createTest, editGrade, getAllgrades, getAllStudentGrades, getAveGrades, getGrade } from "../controllers/gradeController";

const graeRouter = Router();


//create test
// teacher only
graeRouter.post("/", createTest);

//add garde
// teacher only
graeRouter.put("/:id", addGrade);

//get specific grade
// teacher all, student specific
graeRouter.get("/:tesId", getGrade);

//update grad
// teacher only
graeRouter.patch("/:id", editGrade);

//get all tests grades specific student
// teacher all, student specific
graeRouter.get("/", getAllStudentGrades);

//get all grades on one test
// teacher only
graeRouter.post("/:id/test", getAllgrades);

//get average on one test
// teacher only
graeRouter.post("/:id/ave", getAveGrades);

export default graeRouter;
