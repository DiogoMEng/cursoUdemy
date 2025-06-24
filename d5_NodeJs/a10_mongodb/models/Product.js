const { ObjectId } = require("mongodb");
const conn = require("../db/conn.js");

module.exports = class Product {

  constructor(name, image, price, descriptor) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.descriptor = descriptor;
  }

  save () {

    const product = conn.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      descriptor: this.descriptor
    });

    return product;

  }

  static getProducts() {

    const products = conn.db().collection("products").find().toArray();

    return products;

  }

  static async getProductsById(id) {

    // OBJECTID = transforma o id no padrão de objeto id do mongo
    const products = await conn.db().collection("products").findOne({ _id: new ObjectId(id) });

    return products;

  }

  static async removeProductById(id) {

    await conn.db().collection("products").deleteOne({ _id: new ObjectId(id) });

    return;

  }

  async updateProduct(id) {

    // { $set: this } - utilizado para atualizar todo o objeto
    await conn.db().collection("products").updateOne({ _id: new ObjectId(id) }, { $set: this });

  }

}