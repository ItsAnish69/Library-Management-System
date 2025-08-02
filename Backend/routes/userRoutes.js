const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validate = require('../middleware/validateLibrarian');
const {loginUser, registerUser} = require('../controllers/authController');
const upload = require('../controllers/uploadController');

//add an User
router.post('/', controller.addUserController);
//get all User
router.get('/', controller.getAllUserController);
//get user by id
router.get('/:id', controller.getUserController);
//update user by id
router.put('/:id', controller.updateUserController);
//delete user by id
router.delete('/:id', controller.deleteUserController);

//upload-Image
router.post('/:id/upload-profile', upload)


module.exports = router;

