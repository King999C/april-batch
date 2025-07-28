import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    cuisines: String,
    rating: String,
    deliveryTime: String
});


const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;


// const restaurantSchema = new mongoose.Schema({
//     name: {
//         type:String,
//         required: true,
//         trim: true
//     },
//     imageUrl: String,
//     cuisines: String,
//     rating: String,
//     deliveryTime: String
// });


