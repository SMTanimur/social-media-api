
import express, { NextFunction, Request, Response } from 'express'
import tokenMiddleware from '../middlewares/token.middleware'
import { responseError } from '../utils/response'
import authRoutes from './auth.route'
import conversationsRoute from './conversation.route'
import friendRequestRoute from './friendRequest.route'
import postRoute from './post.route'
import userRoute from './user.route'
import message from './message'

const appRoutes = express()
appRoutes.use("/api/auth",authRoutes)
appRoutes.use("/api/user",userRoute)
appRoutes.use("/api/post",tokenMiddleware.verifyToken, postRoute)
appRoutes.use("/api/conversations",tokenMiddleware.verifyToken, conversationsRoute)
appRoutes.use("/api/messages",tokenMiddleware.verifyToken, message)
appRoutes.use("/api/friendRequests",tokenMiddleware.verifyToken,friendRequestRoute)
appRoutes.use((err:any,req:Request,res:Response,next:NextFunction)=>[
  responseError(err,res)
])

export default appRoutes