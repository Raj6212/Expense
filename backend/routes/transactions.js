const { addExpense, getExpense, deleteExpense, } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addUser, getUser, verifyToken } = require('../controllers/User');

// const  = require("../controllers/User");
const router = require('express').Router();


router.post('/add-income', addIncome);
router.get('/get-incomes', verifyToken, getIncomes);
router.delete('/delete-income/:id', verifyToken, deleteIncome);
router.post('/add-expense', verifyToken, addExpense);
router.get('/get-expenses', verifyToken, getExpense);
router.delete('/delete-expense/:id', verifyToken, deleteExpense);
router.post('/register', addUser);
router.post('/login', getUser);


module.exports = router