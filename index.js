const express = require('express')
const { query, validationResult } = require('express-validator')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/signup',
  query('name')
    .isAlpha()
    .withMessage('Name must have only letters')
    .isLength({ min: 4 })
    .withMessage('Name must have more than 3 letters'),
  query('lastName')
    .isAlpha()
    .withMessage('LastName must have only letters')
    .isLength({ min: 4 })
    .withMessage('LastName must have more than 3 letters'),
  query('dni')
    .isNumeric()
    .withMessage('DNI must have only numbers')
    .isLength({ min: 7, max: 8 })
    .withMessage('DNI must have between 7 and 8 numbers'),
  query('dob')
    .isDate({ format: "MM/DD/YYYY", strictMode: true })
    .withMessage('Date of birth must have format MM/DD/YYYY')
    .isBefore()
    .withMessage('Date of birth must be before today'),
  query('phone')
    .isNumeric()
    .withMessage('Phone must have only numbers')
    .isLength({ min: 10, max: 10 })
    .withMessage('Phone must have 10 numbers'),
  query('address')
    .isString()
    .withMessage('Address must have only numbers')
    .isLength({ min: 4 })
    .withMessage('Address must have more than 3 letters')
    .custom((input) => (input.match(/ /g) || []).length === 1)
    .withMessage('Address must have a space in the middle'),
  query('city')
    .isString()
    .withMessage('City must have string')
    .isLength({ min: 4 })
    .withMessage('City must have more than 3 letters'),
  query('zip')
    .isNumeric()
    .withMessage('Zip must have only numbers')
    .isLength({ min: 4, max: 5 })
    .withMessage('Zip must have between 4 and 5 numbers'),
  query('email')
    .isEmail()
    .withMessage('Email is not valid'),
  query('password')
    .isAlphanumeric()
    .withMessage('Password must have only letters and numbers')
    .isLength({ min: 7 })
    .withMessage('Password must have more than 7 letters'),
  (req, res) => {
    console.log("req.query", req.query)
    const { errors } = validationResult(req)
    if (errors.length) {
      res.status(400).json({ success: false, errors })
    } else {
      res.status(200).json({
        success: true,
        msg: "Employee created",
        data: { id: new Date().getTime().toString().substring(6), ...req.query }
      })
    }
  }
)

app.get('/login',
  query('email')
    .isEmail()
    .withMessage('Email is not valid'),
  query('password')
    .isAlphanumeric()
    .withMessage('Password must have only letters and numbers')
    .isLength({ min: 7 })
    .withMessage('Name must have more than 7 letters'),
  (req, res) => {
    const { errors } = validationResult(req)
    if (errors.length) {
      res.status(400).json({ success: false, errors })
    } else {
      if (req.query.email !== 'rose@radiumrocket.com' || req.query.password !== 'BaSProfessional1') {
        res.status(400).json({ success: false, msg: "Wrong username or password" })
      } else {
        res.status(200).json({ success: true, msg: "Employee logged" })
      }
    }
  }
)

app.listen(port, () => {
  console.log(`Trackgenix app listening on port ${port}`)
})