import { Router } from 'express';
import * as usersCtrl from '../controllers/users.controller';
import { isNotAuthenticated } from "../helpers/auth";

const router = Router();

router.post("/event-validate", isNotAuthenticated, usersCtrl.eventValidate);

router.post("/validate", isNotAuthenticated, usersCtrl.validate);

router.post('/jornade', isNotAuthenticated, usersCtrl.jornade)

router.post('/curse', isNotAuthenticated, usersCtrl.curse)

router.get("/signup", isNotAuthenticated, usersCtrl.renderSignUpForm);

router.get("/login", isNotAuthenticated, usersCtrl.renderSigninForm);

router.post("/login", isNotAuthenticated, usersCtrl.signinPOST);

router.post('/signup', isNotAuthenticated, usersCtrl.signupPOST)

router.get("/logout", usersCtrl.logout);

export default router;