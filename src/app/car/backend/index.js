import express from "express";
import mongoose from "mongoose";
import cars from "./models/cars.model.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/").then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.log("Database connection error", err);
});

// API endpoints
app.get("/api/cars", async (req, res) => {
  try {
    const carsList = await cars.find();
    res.status(200).json(carsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/cars/:id", async (req, res) => {
  try {
    const car = await cars.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/cars", async (req, res) => {
  try {
    const car = await cars.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body is empty" });
    }

    const car = await cars.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/cars/:id", async (req, res) => {
  try {
    const car = await cars.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3011, () => {
  console.log("Server is running on port 3011");
});

export default app;

