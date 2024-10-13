import { Router } from "express";
import { addGrade, createTest, editGrade, getAllgrades, getAllStudentGrades, getAveGrades, getGrade } from "../controllers/gradeController";
import { VertifyUser } from "../middlewares/VertifyUser";

const graeRouter = Router();


//create test
// teacher only
graeRouter.post("/", VertifyUser, createTest);

//add garde
// teacher only
graeRouter.put("/:id", VertifyUser, addGrade);

//get specific grade
// teacher all, student specific
graeRouter.get("/:tesId", VertifyUser, getGrade);

//update grad
// teacher only
graeRouter.patch("/:id", VertifyUser, editGrade);

//get all tests grades specific student
// teacher all, student specific
graeRouter.get("/", VertifyUser, getAllStudentGrades);

//get all grades on one test
// teacher only
graeRouter.post("/:id/test", VertifyUser, getAllgrades);

//get average on one test
// teacher only
graeRouter.post("/:id/ave", VertifyUser, getAveGrades);

export default graeRouter;
