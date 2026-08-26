const { AssistanceRequest } = require('../models');

exports.createAssistanceRequest = async (req, res) => {
  try {
    const request = await AssistanceRequest.create(req.body);
    res.status(201).json(request);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create assistance request' });
  }
};