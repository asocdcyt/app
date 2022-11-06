import { Router } from 'express';
import * as indexCtrl from '../controllers/index.controller';
import { isNotAuthenticated } from "../helpers/auth";

const router = Router();

router.get('/', isNotAuthenticated, indexCtrl.renderIndex);

router.get('/privacy', isNotAuthenticated, indexCtrl.renderPrivacy);

router.get('/legal', isNotAuthenticated, indexCtrl.renderLegal);

router.get('/cookies', isNotAuthenticated, indexCtrl.renderCookies);

router.get('/projects', isNotAuthenticated, indexCtrl.renderProjects);

router.get('/accountability', isNotAuthenticated, indexCtrl.renderAccountability);

router.get('/nelly-velasquez', isNotAuthenticated, indexCtrl.renderNelly);

router.get('/event', isNotAuthenticated, indexCtrl.renderEvent);

router.get('/curses/desing-graphic', isNotAuthenticated, indexCtrl.renderCurseDesingGraphic);

router.get('/curses/branding', isNotAuthenticated, indexCtrl.renderCurseBranding);

router.get('/curses/photoshop', isNotAuthenticated, indexCtrl.renderCursePhotoshop);

router.get('/event/status', isNotAuthenticated, indexCtrl.renderEventValidate);

export default router; 