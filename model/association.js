import State from "./state.model.js";
import City from "./city.model.js";
import Property from "./property_detail.model.js";
import User from "./user.model.js";
import WishList from "./wishList.model.js";
import WishListHouse from "./wishListHouse.model.js";
State.hasMany(City,{
    foreignKey:"stateId"
});
City.belongsTo(State,{
    foreignKey:"stateId",targetKey:"id"
});
User.hasMany(Property,{
    foreignKey:"userId"
});
Property.belongsTo(User,{
    foreignKey:"userId",targetKey:"id"
});
User.hasOne(WishList,{
    foreignKey:"userId"
});
WishList.belongsTo(User,{
    foreignKey:"userId",targetKey:"id"
});
WishList.belongsToMany(Property,{through:WishListHouse});
Property.belongsToMany(WishList,{through:WishListHouse});

export {City,State,Property,WishList,WishListHouse};