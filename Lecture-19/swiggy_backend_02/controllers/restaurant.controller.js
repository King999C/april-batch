import RestaurantModel from "../models/Restaurant.model.js";

// READ
export async function fetchRestaurant(req,res){
   try{
    const allRestaurants = await RestaurantModel.find();
    return res.status(200).json(allRestaurants)
   }
   catch(e){
    return res.status(500).json({"message":"Server error" , e})
   }
}

// CREATE
export async function createRestaurant(req,res){
    // console.log(req.body); //undefined by default
    try{
        let createdRestaurant = await RestaurantModel.create(req.body);
        return res.status(201).json(createdRestaurant)
    }
    catch(e){
        return res.status(500).json({"message":"Server error" , e})
    }
}

// UPDATE
export async function updateRestaurant(req,res){
    try{
        let {id} = req.params; //req.params.id
        let editedRestaurant = await RestaurantModel.findByIdAndUpdate(id , req.body);
        return res.status(200).json({"Message": "Updation done successfully"})
    }
    catch(e){
        return res.status(500).json({"message":"Server error" , e})
    }
}

// DELETE
export async function deleteRestaurant(req,res){
    try{
        let {id} = req.params;
        await RestaurantModel.findByIdAndDelete(id);
        return res.status(200).json({"Message": "Deletion done successfully"})
    }
    catch(e){
        return res.status(500).json({"message":"Server error" , e})
    }
}

