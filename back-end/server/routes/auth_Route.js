const router = require('express').Router();
const { wrapAsync } = require('../../util/util');
const {
  register,
  login,
  registerSchema,
  loginSchema,
} = require('../controllers/auth_controller');

// use joi and validator to validate the input
const validator = require('express-joi-validation').createValidator({});

// register route
router
  .route('/register')
  .post(validator.body(registerSchema), wrapAsync(register));

// login route
router.route('/login').post(validator.body(loginSchema), wrapAsync(login));

module.exports = router;
