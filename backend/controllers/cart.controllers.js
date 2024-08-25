import userModel from '../models/user.model.js'

const addFoodToCart = async(req,res) => {
    try {
        const {userId,itemId} = req.body;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        let cartData = user.cartData || {};
        
        if(!cartData[itemId])
            cartData[itemId] = 1;
        else
            cartData[itemId] += 1;

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success : true,message : "cart Updated"})
    } catch (error) {
        console.log("error while adding food to cart : ",error);
        res.json({success : false, message : "item add cart error found"})
    }
}

const removeFoodFromCart = async(req,res) => {
    try {
        const {userId,itemId} = req.body;
        let user = await userModel.findById(userId);
        let cartData = await user.cartData;

        if(cartData[itemId] > 0)
            cartData[itemId] -= 1;
        
        await userModel.findByIdAndUpdate(userId,{cartData});
        return res.json({success : true,message : "item Deleted From Cart"});
    } catch (error) {
        console.log("error found while removing item from cart : ",error);
        res.json({success : false, message : "item remove error found"});
    }
}

const getCart = async (req,res) => {
    try {
        const userId = req.body.userId;
        let user = await userModel.findById(userId);
        let cartData = user.cartData;

        return res.json({success : true, cartData});
    } catch (error) {
        res.json({success : false , message : "CartItems fetch error"});
        console.log("cart fetch error : ",error);
    }
}

export {addFoodToCart,removeFoodFromCart,getCart};