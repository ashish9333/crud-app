import express from 'express';
import { jobSheetSchema } from '../schema/jobsheetSchema.js';
import JobSheet from '../models/jobSheet.js'
const router = express.Router();


router.post('/addJobSheet', async (req, res) => {
    const { error } = jobSheetSchema.validate(req.body);    
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    try {
        const lastJobSheet = await JobSheet.findOne().sort({ id: -1 }).exec();
        const nextId = (lastJobSheet && lastJobSheet.id) ? lastJobSheet.id + 1 : 1;

            const newJobSheet = new JobSheet({
            ...req.body,
            id: nextId
          });        
        const savedJobSheet = await newJobSheet.save();
        res.status(200).json({message: "New Job sheet is added", _id: savedJobSheet._id});
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding job sheet', error: err.message });
    }
  });


  router.delete('/deleteJobSheet/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedJobSheet = await JobSheet.findByIdAndDelete(id);
  
      if (!deletedJobSheet) {
        return res.status(404).json({ message: 'Job Sheet not found' });
      }
  
      res.status(200).json({ message: 'Job Sheet deleted successfully', _id: deletedJobSheet._id });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting job sheet', error: err.message });
    }
  });


  router.get('/getJobSheets', async (req, res) => {
    const { searchQuery } = req.query;
      const query = {};
    
    if (searchQuery) {
        const clientId = parseInt(searchQuery, 10);
        if (!isNaN(clientId)) {
            query.id = clientId;
      } else {
        query.clientName = {
          $regex: new RegExp(searchQuery, 'i') 
        };
      }
    }
    try {
      const jobSheets = await JobSheet.find(query).exec();
  
      if (searchQuery && jobSheets.length === 0) {
        return res.status(404).json({ message: 'No job sheets found' });
      }
      const totalCount = await JobSheet.countDocuments().exec();
  
      res.status(200).json({
        jobSheets,
        totalCount
      });
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving job sheets', error: err.message });
    }
  });
  

  export default router;