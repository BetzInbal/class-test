import { Request, Response } from "express";
import { ReqWithUser } from "../middlewares/VertifyUser";


export const createTest = async (
  req: Request | ReqWithUser,
  res: Response
): Promise<void> => { };

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


