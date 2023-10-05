import User from "../models/user.model.js"


export const deleteUser = async(req,res) =>{
   
    const user = await User.findById(req.params.id)


    // jwt.verify(token,process.env.JWT_KEY, async(err,payload)=>{
        if(req.userId !== user._id.toString()){
            return res.status(403).send("You can delete only ur account!");
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted")
      
   
}

export const getUser = async (req,res,next) =>{
    const user = await User.findById(req.params.id);
    res.status(200).send(user)
    console.log(user)
}