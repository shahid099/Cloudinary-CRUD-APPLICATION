import express from "express";
import dotenv from 'dotenv';
const router = express.Router();
import { v2 as cloudinary } from 'cloudinary';
import upload from '../middleware/multer.js'
dotenv.config();
// Schema Imported
// import postData from '../models/postData.js';
                                                // const re = await postData();

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
// CRUD operations
router.post('/', upload.single('file'), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      // Save result.url or result.public_id to your database for future reference
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error uploading file to Cloudinary' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const result = await cloudinary.api.resources();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving files from Cloudinary' });
    }
  });
  
  router.delete('/:public_id', async (req, res) => {
    try {
      const result = await cloudinary.uploader.destroy(req.params.public_id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting file from Cloudinary' });
    }
  })

export default router;