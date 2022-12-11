import { Router } from "express";
import { createConversation, getConversation, getConversations } from "../controllers/conversation";

const conversationsRoute = Router()

 conversationsRoute.post('/:id', createConversation);
 conversationsRoute.get('/', getConversations);
 conversationsRoute.get('/:id', getConversation);
export default conversationsRoute
