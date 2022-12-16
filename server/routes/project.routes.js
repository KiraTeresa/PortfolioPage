const router = require("express").Router();
const projects = require("../db/projects.json")

// GET all projects
router.get("/", (req, res, next) => {
    res.json("All projects")
})

// GET latest project
router.get("/latest", (req, res, next) => {
    const latestNo = Math.max(...projects.map(proj => proj.no))
    const latestProject = projects.find(el => el.no === latestNo)
    res.json(latestProject)
})

module.exports = router;