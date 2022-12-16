const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../database/db');

router.use("/", bodyParser.json())

router.get('/all', (req, res) => {
    res.json(JSON.stringify(db.getAll()))
})

router.get('/tvshows', (req, res) => {
    res.json(JSON.stringify(db.getTvShows()))
})

router.get('/animes', (req, res) => {
    res.json(JSON.stringify(db.getAnimes()))
})

router.get("/action", (req, res) => {
    res.json(JSON.stringify(db.getAction()))
})

router.get("/shounen", (req, res) => {
    res.json(JSON.stringify(db.getShounen()))
})

router.get("/scifi", (req, res) => {
    res.json(JSON.stringify(db.getSciFi()))
})

router.get("/isekai", (req, res) => {
    res.json(JSON.stringify(db.getIsekai()))
})

router.get("/romance", (req, res) => {
    res.json(JSON.stringify(db.getRomance()))
})

module.exports = router