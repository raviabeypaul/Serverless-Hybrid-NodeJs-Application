import { Request, Response } from "express";
import { SampleController } from "adapters/controllers/SampleController";

export const handlers = {
  test: async (req: Request, res: Response) => {
    let response =  await SampleController().get()
    return res.json(response)
  }
};
