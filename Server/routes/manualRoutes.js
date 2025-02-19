const express = require('express');
const multer = require('multer');
const path = require('path');
const {uploadManual} = require('../controllers/manualController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route to upload manual
router.post('/upload', upload.single('file'), authMiddleware.protect, authMiddleware.authorize('admin', 'company'), uploadManual);

module.exports = router;
