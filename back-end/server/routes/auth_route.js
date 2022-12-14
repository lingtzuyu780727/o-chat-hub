const router = require('express').Router();

const validator = require('express-joi-validation').createValidator({});

const { wrapAsync } = require('../../util/util');

const {
  register,
  login,
  registerSchema,
  loginSchema,
  verifiedAuth,
  fetchUserProfile,
  updateNewUsername,
} = require('../controllers/auth_controller');

// register route
router
  .route('/register')
  .post(validator.body(registerSchema), wrapAsync(register));

// login route
router.route('/login').post(validator.body(loginSchema), wrapAsync(login));

// get user profile | patch: chane username
router
  .route('/auth/userprofile')
  .get(wrapAsync(verifiedAuth), wrapAsync(fetchUserProfile))
  .patch(wrapAsync(verifiedAuth), wrapAsync(updateNewUsername));

module.exports = router;
