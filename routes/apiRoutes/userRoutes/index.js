const router = require('express').Router();
const {
	createUser,
	getUserById,
	login,
	signUpHdndler,
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.post(createUser);

router.post('/signup', signUpHdndler)
router.post('/login', login);

router.route('/:userId')
	.get(getUserById);
// /api/users/:userId
// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;