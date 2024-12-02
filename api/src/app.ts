import express, { Express, Router } from "express";
import pmiRouter from "./pmi";

const PORT = 3000;

const app: Express = express();
const router: Router = Router();

router.use(pmiRouter);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
