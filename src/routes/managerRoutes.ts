import express from "express";
import {
  getManager,
  createManager,
  updateManager,
  //   getCurrentResidences,
  //   addFavoriteProperty,
  //   removeFavoriteProperty,
} from "../controllers/managerControllers";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);
// router.get("/:cognitoId/current-residences", getCurrentResidences);
// router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
// router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;
