const express = require("express");
const sequelize= require("./config/db")
const app = express();

const cors = require("cors"); 

app.use(express.json());
app.use(cors());
// app.get("/",(req, res, next)=>{
//     res.send("am working")
// });
app.use("/api/leaves", require('./routes/api/leave'))
app.use("/api/users", require('./routes/api/user'))


const port = process.env.PORT || 3000;

sequelize.sync()
    .then(result => {
        app.listen(port, () => console.log("Started on Port " + port));
    })
    .catch(err => console.log(err));