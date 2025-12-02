import express from 'express';
const app = express();
app.use(express.json()); 
app.post("/api/v1/auth/login", (req, res) => {
    console.lo("hi")  
    res.json({
        success: true,
        message: "hey"
    })
}) 

app.post("/api/v1/auth/register", (req, res) => {
    res.json({
        success: true,
        message: "Hello"
    })
}) 

app.get("/api/v1/users", (req, res) => {
    res.json({
        success: true,
        message: "Hello december"
    })
}) 
app.listen(3005, 
    () => {
        console.log("The server is running on port 3005");
    }
    
)