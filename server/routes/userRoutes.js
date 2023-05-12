const router = require("express").Router()
const { registerUser, loginUser, logoutUser, refresh } = require("../controllers/userControllers")
const isAuthenticated = require("../middleWares/auth")
const { routeError } = require("../utils/features")

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/logout",isAuthenticated,logoutUser)
router.get("/refresh",refresh)

module.exports = router;

