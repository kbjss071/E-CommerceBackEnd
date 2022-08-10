const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll();
    if(!categoriesData){
      res.status(404).json({message: 'No category was found!'})
    }
    res.status(200).json(categoriesData);
  } catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id);
    if(!categoryData){
      res.status(404).json({message: 'No category was found!'})
    }
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!category[0]){
      res.status(404).json({message: 'No user with this id!'})
      return
    }
    res.status(200).json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id},
  })
  .then((deletedCategory)=> {
    res.json({message: "Successfully deleted!"});
  })
  .catch((err)=>{
    console.log(err);
    res.json(err);
  })
});

module.exports = router;
