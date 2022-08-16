import express from 'express';
import { getUsers, createUser, getUserInfo, deleteUser, changeUserInfo } from '../controllers/users.js'



const router = express.Router();



router.get('/', getUsers );

router.post('/', createUser );

router.get('/:id', getUserInfo );

router.delete('/:id', deleteUser );

router.patch('/:id', changeUserInfo); 

export default router;
