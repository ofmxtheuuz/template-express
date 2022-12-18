const expresss = require("express")
const router = expresss.Router();

router.get("/", (req, res) => {
    res.render("client/index")
})

module.exports = router;