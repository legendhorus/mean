'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productspData = new Schema({
    name: String,
    price: Number,
    sale: Number,
    category_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    content: String,
    qty: Number,
    supplier_id: [{ type: Schema.Types.ObjectId, ref: 'Supplier' }],
    qty_bought: Number,
    img:{
        type: String,
        default : "/assests/images/default.png",
    },
    created_at: {
        type: Date,
        default: Date.now}
    ,
    updated_at: {
        type: Date,
        default: Date.now
    },
    groupId:{
            type:Number,
            default: 1
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    // offer: {
    //     type: String,
    //     default : "/assests/images/offer.png",
    // },
    // img: {
    //     type: String,
    //     required: true
    // },
    // tag: {
    //     type: String,
    //     default:"/assests/images/tag.png"
    // },
    // calo: {
    //     type: String,
    //     required: true
    // },
    // checked: {
    //     type: String
    // },
    // note: {
    //     type: String
    // },
    // amount:{
    //     type:String,
    //     default: 1
    // },
    // groupId:{
    //     type:Number,
    //     default: 1
    // },
    // create_date: {
    //     type: Date,
    //     default: Date.now
    // }
});

var products = module.exports = mongoose.model('products', productspData);

module.exports.getProduct = (callback, limit) => {
    products.find(callback).limit(limit);
}

module.exports.getProductById = (id, callback) => {
    products.findById(id, callback);
}

module.exports.addProduct = (product, callback) => {
    products.create(product, callback);
}

module.exports.updateProduct = (id, product, callback) => {
    var query = {
        _id: id
    };
    var update = {
        name: product.name,
        price: product.price,
        sale: product.sale,
        category_id: product.category_id,
        content: product.content,
        qty: product.qty,
        supplier_id: product.supplier_id,
        buyed: product.buyed,
        img: product.img,
        groupId: product.groupId
    }
    products.update(query,{$set: update}, callback);
}
module.exports.removeProduct = (id, callback) => {
    var query = {
        _id: id
    };
    products.remove(query, callback);
}
//elder:2
//oldel :3
//gain 4
//loss:5
//mongoimport --db shops --collection shop --file data.json --jsonArray