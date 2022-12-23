const router = require("express").Router();
const projects = require("../db/projects.json")
const slugify = require("slugify")

// GET all projects
router.get("/", (req, res, next) => {
    res.json(projects)
})

// GET latest project
router.get("/latest", (req, res, next) => {
    const latestNo = Math.max(...projects.map(proj => proj.no))
    const latestProject = projects.find(el => el.no === latestNo)
    res.json(latestProject)
})

// GET single project
router.get("/:slug", (req, res, next) => {
    const {slug} = req.params
    const project = projects.find(proj => slugify(proj.name) === slug)
    res.json(project)
})

module.exports = router;