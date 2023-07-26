const express = require('express');
const router = express.Router();
const { getGoals, postGoals, putGoals, deleteGoals }= require('../controllers/goalController')


// router.get('/',getGoals);

// router.post('/',postGoals)

// router.put('/:id',putGoals)

// router.delete('/:id',(deleteGoals))

// We can more simplify it as:-

router.route('/').get(getGoals).post(postGoals);
router.route('/:id').put(putGoals).delete(deleteGoals);
module.exports = router; 