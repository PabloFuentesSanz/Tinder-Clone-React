import { Router } from "express";
import * as cardController from "./cards.controller.js";
const router = Router();

router.get("/", cardController.getCards);
router.get("/tinder/card", cardController.getCards);
router.post("/tinder/card", cardController.createCard);
router.delete("/card/delete/:id", cardController.deleteCard);

export default router;
