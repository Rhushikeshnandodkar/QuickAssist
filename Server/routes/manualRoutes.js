const express = require('express');
const multer = require('multer');
const path = require('path');
const {uploadManual, uploadVideoLink, updateManual, videoLinks, deleteManual, dataTracker} = require('../controllers/manualController');
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
router.post('/upload', upload.single('file'), authMiddleware.protect, uploadManual);
router.patch('/update-product/:id', upload.single('file'), authMiddleware.protect, updateManual);
router.post('/upload-video-link/:id', authMiddleware.protect, uploadVideoLink)
router.get('/get-video-links/:id', authMiddleware.protect, videoLinks)
router.get('/manualdata', authMiddleware.protect, dataTracker)
router.delete('/delete-manual/:productId', authMiddleware.protect, deleteManual);
module.exports = router;
