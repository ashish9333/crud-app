import Joi from 'joi';
export const jobSheetSchema = Joi.object({
    clientName: Joi.string().min(1).max(100).required(),
    contactInfo: Joi.string().min(10).max(10).required(),
    receiveDate: Joi.date().iso().required(),
    deadline: Joi.date().iso().required(),
    inventoryReceived: Joi.string().min(1).max(200).required(),
    uploadInventoryImage: Joi.string().optional().allow(''),
    reportedIssues: Joi.string().min(1).max(500).required(),
    clientNotes: Joi.string().min(1).max(500).required(),
    assignedTechnician: Joi.string().min(1).max(100).required(),
    estimatedAmounts: Joi.number().precision(2).positive().required(),
    status: Joi.string().valid('Pending', 'InProgress', 'Completed', 'Closed').required(),
    id: Joi.number().optional(),
});