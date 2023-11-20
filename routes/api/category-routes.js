const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//used code from miniproject and edited with category instead of location
router.get('/', async (req, res) => {
  try {
  // find all categories
  const categories = await Category.findAll({
      // be sure to include its associated Products
    include: [{ model: Product}],
  });
  //status
  res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    //status
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
      // update a category by its `id` value
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    //status
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      // delete a category by its `id` value
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    //status 
    res.status(200).json(deletedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
