'use_strict';

const
    { execute } = require('../helpers/padayon'),
    path = require('path'),
    base = path.basename(__filename, '.js'),
    express = require('express'),
    router = express.Router(),
    controller = require(`../controllers/user`),
    multer = require('./../helpers/multer');


router.get(`/api/${base}/getUser`, execute(controller.getUser, { 
        secured: true 
    })
);

router.get(`/api/${base}/getUsers`, execute(controller.getUsers, { 
        secured: true 
    })
);

router.put(`/api/${base}/updateUserAccess`, execute(controller.updateUserAccess, { 
        secured: true 
    })
);

router.post(`/api/${base}/authenticate`, execute(controller.authenticate, { 
        secured: false
    })
);

router.post(`/api/${base}/checkAccess`, execute(controller.checkAccess, {
        secured: false
    })
);

router.post(`/api/${base}/saveFile`, multer.single('image'), 
        execute(controller.saveFile, {
        secured: false
    })
);

router.post(`/api/${base}/saveMultipleFiles`, multer.array('photos', 2),
    execute(controller.saveMultipleFiles, {
        secured: false
    })
);

router.get(`/api/${base}/generateQR`, multer.single('image'),
    execute(controller.generateQR, {
        secured: true
    })
);

router.get(`/api/${base}/getFile`, multer.single('image'),
    execute(controller.getFile, {
        secured: true
    })
);

router.get(`/api/${base}/downloadPDF`,
    execute(controller.downloadPDF, {
        secured: true
    })
);

router.get(`/api/${base}/downloadExcel`,    
    execute(controller.downloadExcel, {
        secured: true
    })
);

router.get(`/api/${base}/downloadCSV`,
    execute(controller.downloadCSV, {
        secured: true
    })
);


module.exports = router