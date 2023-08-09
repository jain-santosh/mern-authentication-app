import Express from "express";
import { 
    authUser,
    registerUser,
    logoutUser,
    getuserProfile,
    updateUserProfile 
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getuserProfile).put(protect, updateUserProfile)

export default router;