import { Router } from "express";
import { PMIResponse } from "../types/PMIResponse";

const pmiRouter: Router = Router();

/**
 * returns a randomly generated pmi rate between 0.5 and 1.5
 */
pmiRouter.get("/pmi", (req, res) => {
  const response: PMIResponse = {
    pmi: Math.round((Math.random() + 0.5) * 100) / 100,
  };

  res.status(200).json(response);
});

export default pmiRouter;
