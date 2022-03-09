require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const authRoutes = require("./server/routes/auth.routes");
const habitRoutes = require("./server/routes/habits.routes");
const artRoutes = require("./server/routes/art.routes");

app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.use("/api/users", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/art", artRoutes);
app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is running!"));
