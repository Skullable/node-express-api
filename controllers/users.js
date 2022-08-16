import { v4 as uuidv4 } from 'uuid';
import { createRequire } from "module";
import '../models/users.cjs'
const require = createRequire(import.meta.url);
const Users = require('../models/users.cjs')



export const getUsers = async (req, res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }catch(err){
        res.json({message: err})
    }
}

export const createUser = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });
//    users.push({ ...user, id: uuidv4()});
    
    res.send(`User with the name ${user.firstName} added to the database!`)

    console.log(user);

    try{
    const newUser = user.save();
    res.json(newUser);
    }catch (err) {
        res.json({message:err})
    }
}

export const getUserInfo = async (req, res) => {
  try{
    const founduser = await Users.findById(req.params.id)
    res.json(founduser)
  }catch(err){
    res.json({message: err})
  }
}

export const deleteUser = async (req, res) => {
   try{
    const removeUser = await Users.remove({_id: req.params.id});
    res.json(removeUser);
//    res.send(`User with the id ${id} deleted from the database`)
   } catch (err) {
    res.json({ message: err })
   }
}

export const changeUserInfo = async (req, res) => {

   try{
    const updateUser = await Users.findByIdAndUpdate(
        { _id: req.params.id},
        { $set: { firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age } },
    );
//    const updateMsg = await res.send(`User with id:${req.params.id}updated`)
    res.json(updateUser)
   }catch(err){
    res.json({ message: err });
   }
}