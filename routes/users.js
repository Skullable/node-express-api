import express from 'express';

const router = express.Router();

const users = [
    {
        fistName: "Jhon",
        lastName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send('Hello');
    console.log(users);

});

export default router;
