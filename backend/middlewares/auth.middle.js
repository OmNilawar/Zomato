import jwt from 'jsonwebtoken'

const authMiddleWare = async (req,res,next) => {
    const { token } = req.headers;
    console.log(token);
    if(!token)
    {
        return res.json({success : false,message : "unauthorized login"})
    }
    try {
        const decode = jwt.verify(token,'random#secret');
        req.body.userId = decode.id;
        console.log(decode.id);
        next();
    } catch (error) {
        console.log("token middleware error : ",error)
        return res.json({success : false,message : "token Invalid"})
    }
}

export default authMiddleWare;