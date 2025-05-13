const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const token = req.header("Authorization")?.replace("Bearer","");
    if (!token){
        return res.status(400).json({message:"Access Denied. No token provided."})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;

        next()
    }catch (e){
        res.status(400).json({message:"Invalid Token"})
    }
}

module.exports = auth;