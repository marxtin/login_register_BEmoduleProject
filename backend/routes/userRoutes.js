import express from "express";
import { getCredentials, register, login } from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

router.get("/profile", getCredentials);

/* router.post("/login", login); */

router.post("/register", register);

router.post("/login", login);

/* router.use(passport.authenticate("jwt",{session:false}));
router.get('/profile', getProfile) */

export default router;
