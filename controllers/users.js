import { v4 as uuidv4 } from 'uuid';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const User = require('../models/users.cjs')

let users = [
]

export const getUsers = (req, res) => {
    res.send(users);
}

export const creatUser = (req, res) => {
    const user = new User({
        fistName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });

    user.save()
    .then(data => {
        res.json(data);
    });



    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.fistName} added to the database!`)
}

export const getUserInfo = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`)
}

export const changeUserInfo = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user =users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the ${id} has been updated`)
}