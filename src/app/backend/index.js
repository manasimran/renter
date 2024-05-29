const express = require("express")
const mongoose = require("mongoose")
const cars = require("./models/cars.model.js")
mongoose.connect(
    "mongodb://localhost:27017/",
).then(() => {
    console.log("database connected sucessfully")
}).catch((err) => {
    console.log("database not connected", err)
})
const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
let x = {
    Name: "honda civic",
    brand: "honda",
    year: 2021,
    perhourrate: 100,
    seats: 4
}
app.get("/",async (req, res) => {
    const carlist=await cars.find()
    res.send(carlist)
})
app.listen(3011, () => {
    console.log("server is running on port 3000 ")
})
app.get("/api/cars", async (req, res) => {
    try {
        const carsList = await cars.find();
        res.status(200).json(carsList); // Return the list of cars directly
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
app.get("/api/cars/:id", async (req, res) => {
    try {
        const car = await cars.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json(car); // Return the car object directly
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.post("/api/cars", async (req, res) => {
    try {
        const car = await cars.create(req.body);
        res.status(201).json(car); // Return the created car object directly
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
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

        res.status(200).json(car); // Return the updated car object directly
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//delete a product
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
