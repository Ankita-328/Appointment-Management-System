import jwt from 'jsonwebtoken'

//user auth middleware

const authUser = async(req,res,next) => {
    try{
        const {token1} =req.headers

        if(!token1){
            return res.json({success:false,message:'Not authorised login again'})
        }
        const token_decode = jwt.verify(token1,process.env.JWT_SECRET)
        req.body.userId = token_decode.id //id from userController
        next()
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authUser