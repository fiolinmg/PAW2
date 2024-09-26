const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
    //format data JSON
    const data = {
        caption: "Mahasiswa",
        layout: "layout/main-layout",
        data : [
            {
                npm : "2226240061",
                nama : "Fiolin",
            },
            {
                npm : "2226240090",
                nama : "Jejes",
            },
            {
                npm : "2226240125",
                nama : "Cyndi",
            }
        ]

    };





    res.render('index');
    //menuju ke views/index.ejs
});

module.exports = router;