

import { Router } from "express";
import { create } from "../controllers/blogController";


const router = Router();


router.route("/blog")
    .post(create)
    .get(index);


export default router;
