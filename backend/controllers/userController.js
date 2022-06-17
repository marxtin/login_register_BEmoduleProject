import bcrypt from "bcrypt";
import User from "./../models/User.js";
import {generateToken} from "./../utils/authenticationHelper.js";

/**
 * Controller method to get all users
 * @param {*} req
 * @param {*} res
 */

export const getCredentials = async (req, res) => {
 
  const users = await User.find()
  
  return res.status(200).json(users);
};

/**
 * Controller method to register the user
 * @param {*} req
 * @param {*} res
 */

 export const register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
    try {
      const userToAdd = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
  
      //roles: ADMIN, MEMBER
  
      /* const roles = req.body.roles.split(',');
  
      roles.forEach((role) => {
        userToAdd.roles.push(role)
      })
   */
     
      const resultUser = await userToAdd.save();
  
      return res
        .status(200)
        .json({ message: "User was created", createdUser: resultUser });
    } catch (error) {
      return res.status(400).json({ message: "Error happened", error: error });
    }
  };

/**
 * controller for user login and authentication
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
  export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
      if (!password) {
        return res.status(400).json({ message: "please supply password" });
      }
  
      const user = await User.findOne({ email: email });
  
      if (user === null) {
        return res
          .status(400)
          .json({ message: "No user with that email address" });
      }
  
      const checkPassword = await bcrypt.compare(password, user.password);
  
      if (checkPassword) {
        console.log("authentication successful");
        const token = await generateToken(user);
        return res
          .status(200)
          .json({ message: "Authentication successful", token: token });
      } else {
        return res.status(401).json({ message: "Authentication failed" });
      }
    } catch (error) {
      return res.status(401).json({ message: "Authentication error" });
    }
  }  