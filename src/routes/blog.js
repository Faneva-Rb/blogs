

import { Router } from "express";
import { create, index } from "../controllers/blogController.js";


const router = Router();


router.route("/blog")
    .post(create)
    .get(index);


export default router;
