import express from 'express';
const app = express()

const PORT = 3000;
app.get("/", (req, res)=>{
    res.send(`Our soccer code is running on the server ${PORT}`)
});

app.listen(PORT, ()=>{
    console.log(`Your soccer server is running on port ${PORT}`);
})