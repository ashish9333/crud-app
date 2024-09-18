import mongoose from 'mongoose';

const jobSheetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
   },
  clientName: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true
  },
  contactInfo: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true
  },
  receiveDate: {
    type: Date,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  inventoryReceived: {
    type: String,
    minlength: 1,
    maxlength: 200,
    required: true
  },
  uploadInventoryImage: {
    type: String,
    required: false
  },  
  reportedIssues: {
    type: String,
    minlength: 1,
    maxlength: 500,
    required: false
  },
  clientNotes: {
    type: String,
    minlength: 1,
    maxlength: 500,
    required: false
  },
  assignedTechnician: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: false
  },
  estimatedAmounts: {
    type: Number,
    min: 0,
    validate: {
      validator: function(v) {
        return v === undefined || v >= 0;
      },
      message: 'Estimated amount must be positive.'
    },
    required: false
  },
  status: {
    type: String,
    enum: ['Pending', 'InProgress', 'Completed', 'Closed'],
    required: true
  }
});

const JobSheet = mongoose.model('JobSheet', jobSheetSchema);
export default JobSheet;
