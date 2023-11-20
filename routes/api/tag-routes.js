const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  router.get('/', async (req, res) => {
    try {
        // find all tags
      const tags = await Tag.findAll({
        // be sure to include its associated Product data
        include: [
          {
            model: Product,
            through: ProductTag,
          },
        ],
      });
      //status code
      res.status(200).json(tags);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });  
  router.get('/:id', async (req, res) => {
    try {
        // find a single tag by its `id`
      const tag = await Tag.findByPk(req.params.id, {
        // be sure to include its associated Product data
        include: [
          {
            model: Product,
            through: ProductTag,
          },
        ],
      });
      //status code
      if (!tag) {
        res.status(404).json({ message: 'Tag not found with the given id' });
        return;
      }
      res.status(200).json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      //create new tag
      const newTag = await Tag.create(req.body);
      //status code
      res.status(200).json(newTag);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    //status code
    if (!updatedTag[0]) {
      res.status(404).json({ message: 'Tag not found with the given id' });
      return;
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    //delete tag by given value
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!deletedTag) {
      res.status(404).json({ message: 'Tag not found with the given id' });
      return;
    }
    res.status(200).json(deletedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
