import express from 'express';
import { getUsers, creatUser, getUserInfo, deleteUser, changeUserInfo } from '../controllers/users.js'



const router = express.Router();



router.get('/', getUsers );

router.post('/', creatUser );

router.get('/:id', getUserInfo );

router.delete('/:id', deleteUser );

router.patch('/:id', changeUserInfo); 

export default router;
