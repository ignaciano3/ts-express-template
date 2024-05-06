import { Router } from "express";
import { HealthService } from "../services/health";

const router = Router();

router.get("/health", (req, res) => {
  const health = HealthService.checkHealth();
  res.send(health);
});

export default router;
