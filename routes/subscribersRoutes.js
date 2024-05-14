const express = require("express");
const router = express.Router();
const subscribersControllers = require("../controllers/subscribersControllers");

router
    .get("/", subscribersControllers.getAll)
    .get(
        "/:id",
        subscribersControllers.getsubscriber,
        subscribersControllers.getOne
    )
    .post("/", subscribersControllers.creatOne)
    .put(
        "/:id",
        subscribersControllers.getsubscriber,
        subscribersControllers.updateOne
    )
    .delete(
        "/:id",
        subscribersControllers.getsubscriber,
        subscribersControllers.deleteOne
    );

module.exports = router;