import Joi from 'joi';
export const jobSheetSchema = Joi.object({
    clientName: Joi.string().min(3).max(100).required(),
    contactInfo: Joi.string().min(10).max(100).required(),
    receiveDate: Joi.date().iso().required(),
    inventoryReceived: Joi.string().min(1).max(200).required(),
    uploadInventoryImage: Joi.string().optional(),
    reportedIssues: Joi.string().min(5).max(500).optional(),
    clientNotes: Joi.string().min(5).max(500).optional(),
    assignedTechnician: Joi.string().min(3).max(100).optional(),
    estimatedAmounts: Joi.number().precision(2).positive().optional(),
    status: Joi.string().valid('Pending', 'In Progress', 'Completed', 'Closed').required() 
});