const express = require("express");
const { createBlog, deleteBlog, updateBlog, getBlogById, getALLBlogs, getAllBlogsById } = require("../controllers/blogControllers");
const { routeError } = require("../utils/features");
const isAuthenticated = require("../middleWares/auth");

const router = express.Router();

router.post("/addBlog",isAuthenticated , createBlog)
router.get("/getAllBlogs", getALLBlogs)
router.get("/getAllBlogsById",isAuthenticated , getAllBlogsById)
router.get("/:id", getBlogById)
router.put("/:id", isAuthenticated, updateBlog)
router.delete("/:id", isAuthenticated, deleteBlog)
router.use(routeError)

module.exports = router;