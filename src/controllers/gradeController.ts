import { Request, Response } from "express";
import { ReqWithUser } from "../middlewares/VertifyUser";
import classModel from "../types/models/classModel";


export const createTest = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => {
  try { 
    console.log((req as ReqWithUser).user);
    
    const corClass = await classModel.findOne({id:(req as ReqWithUser).user.classId})
    console.log(corClass);
    
    corClass?.tests.push(req.body)
    await corClass?.save() 
    res.status(201)
    .json(corClass)
  } catch (error) {
    console.log(error);
    
    res.status(404)
    .json(error)
  }
 };

export const addGrade = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };

// teacher all, student specific
export const getGrade = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };


export const editGrade = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };

// teacher all, student specific
export const getAllStudentGrades = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };


export const getAllgrades = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };

export const getAveGrades = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };


