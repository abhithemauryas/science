const mongoose=require("mongoose")

const proSchema=mongoose.Schema({
   image: String,
   additional:String,
   price: String,
   brand: String
})

const productModel=mongoose.model("product",proSchema)

module.exports={
    productModel
}
















// "image": "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.2a3/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa668981f/productimages/1P025510.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
// "additional": "12.00",
// "price": "Baby Floral",
// "brand":"Carter's"
// },
