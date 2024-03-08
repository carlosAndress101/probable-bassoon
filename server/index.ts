import app from "./app";
import { connectDB } from "./db";

connectDB();
app.listen(4321);
console.log("Server on port", 4321);
