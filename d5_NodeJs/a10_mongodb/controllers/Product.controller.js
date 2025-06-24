const Product = require("../models/Product.js");

module.exports = class ProductController {
  
  static async showProducts (req, res) {

    const products = await Product.getProducts();

    res.render("products/all", { products });

  }

  static createProduct (req, res) {

    res.render("products/create")

  }

  static createProductPost (req, res) {

    const { name, image, price, description } = req.body;
    const product = new Product(name, image, price, description);

    product.save();

    res.redirect("/products");

  }

  static async getProduct(req, res) {

    const { id } = req.params;

    const product = await Product.getProductsById(id);

    res.render("products/product", { product });

  }

  static async removeProduct(req, res) {

    const { id } = req.params;

    await Product.removeProductById(id);

    res.redirect("/products");

  }

  static async editProduct(req, res) {

    const { id } = req.params;

    const product = await Product.getProductsById(id);

    res.render("products/edit", { product });

  }

  static async editProductPost(req, res) {

    const { 
      id,
      name,
      price,
      image, 
      descriptor
    } = req.body;

    const product = new Product(name, image, price, descriptor)

    await product.updateProduct(id);

    res.redirect("/products");

  }

}