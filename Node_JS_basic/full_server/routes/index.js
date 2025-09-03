const express = require('express'),
const router = express.Router();

router.get('/', AppController);
router.get('/students', StudentsController);
router.get('/students/:major', StudentsController);
