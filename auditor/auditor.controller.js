const express = require('express');
const router = express.Router();
const auditService = require('./auditor.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    auditService.getAll()
    .then(user => user ? res.json(user) : res.status(401).json({ message: 'No access' }))
    .catch(err => next(err));
}