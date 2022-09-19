const Category = require("../models/category");

exports.create = (req,res) => {
    res.render("pages/categoryForm")
};

exports.add = async(req,res) => {
    try{
        const category = new Category(req.body);
        const saved = await category.save();
        if(saved.err){
            res.render("pages/categoryForm");
        }else{
            res.redirect("/category/listofcategories");
        }
        res.status(201).json({msg: "category created successfully",saved})
    }catch(err){
        res.status(500).json(err);
    }
};

exports.read = async(req,res) => {
    try{
        const categories = await Category.find();
        res.render("pages/categories",{categories:categories});
        res.status(200).json(categories);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.readbyId = async(req,res) => {
    try{
        const categories = await Category.findById(req.params.id);
        res.status(200).json(categories);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.update = async(req,res) => {
    try{
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new:true}
        );
        res.status(200).json({msg:"category updated successfully",category});
    }catch(err){
        res.status(500).json(err);
    }
}

exports.delete = async(req,res) => {
    try{
        const category = await Category.findByIdAndRemove(req.params.id);
        res.status(200).json(category);
    }catch(err){
        res.status(500).json(err);
    }
}