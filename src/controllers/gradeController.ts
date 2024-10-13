import { Request, Response } from "express";


export const createTest = async (
  req: Request,
  res: Response
): Promise<void> => { };

export const addGrade = async (
  req: Request,
  res: Response
): Promise<void> => { };

// teacher all, student specific
export const getGrade = async (
  req: Request,
  res: Response
): Promise<void> => { };


export const editGrade = async (
  req: Request,
  res: Response
): Promise<void> => { };

// teacher all, student specific
export const getAllStudentGrades = async (
  req: Request,
  res: Response
): Promise<void> => { };


export const getAllgrades = async (
  req: Request,
  res: Response
): Promise<void> => { };

export const getAveGrades = async (
  req: Request,
  res: Response
): Promise<void> => { };


