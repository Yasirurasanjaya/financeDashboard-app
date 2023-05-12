import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

// import { Express } from "express";
// const router = express.Router();
// import KPI from "../models/KPI.js";

// router.get("/kpis", async (req, res) => {
//     try{
//         const kpis = await KPI.find();
//         res.status(200).jason(kpis);

//     }
//     catch(error){
//         res.status(404).jason({message: error.message})
//     }
// });
// export default router;