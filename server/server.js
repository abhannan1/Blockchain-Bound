const express = require("express")
const bodyParser = require("body-parser")
const database = require("./connection/dbConfig")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const helmet = require("helmet") 
const cors = require("cors")
const morgan = require("morgan") 
//these two will help us properly set path when we config directories 
const path = require("path") 
const {PORT, NODE_ENV} = require("./config/index.js") 
const { errorMiddleWare } = require("./middleWares/error")
const  userRouter = require("./routes/userRoutes")
const  blogRouter = require("./routes/blogRoutes")
const  commentRouter = require("./routes/commentRoutes")
const isAuthenticated = require("./middleWares/auth")

const app = express()
database.connect()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

/* CONFIGURATION */

// app.use('/storage', express.static('storage'))
app.use('/storage',express.static(path.join(path.resolve(), "storage")));

// app.use(["/blog"], isAuthenticated)
app.use("/", userRouter)
app.use("/comment", commentRouter)
app.use("/blog", blogRouter)

app.use(errorMiddleWare)




app.listen(PORT, ()=>{
    console.log(`server is listening to the port ${PORT} in ${NODE_ENV} Mode`)
})