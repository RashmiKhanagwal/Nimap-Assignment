const Product = require("../models/product");

exports.create = (req,res) => {
    res.render("pages/productForm")
};

exports.add = async(req,res) => {
    try{
        const { name,price,category_id } = req.body;
        const product = new Product({ name, price, category_id });
        const saved = await product.save()
        if(saved.err){
            res.render("pages/productForm");
        }else{
            res.redirect("/product/listofproducts");
        }
        //res.status(200).send("product created",saved);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.readbyId = async(req,res) => {
    try{
        const product = await Product.findById(req.params.id).populate("category_id");
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.read = async(req,res) => {
    let skip = parseInt(req.params.skip);
    try{
        const products = await Product.find().populate("category_id", "name").skip(skip*10).limit(10);
        skip = skip + 1;
        return res.render("pages/products", {products:products, url: `/product/listofproducts/${skip}`});
        //res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
    
}

exports.update = async(req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new:true}
        );
        res.status(200).json({msg:"product updated successfully",product});
    }catch(err){
        res.status(500).json(err);
    }
}

exports.delete = async(req,res) => {
    try{
        const product = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
}

