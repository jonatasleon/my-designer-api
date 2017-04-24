import express from 'express';

export default () => {
  const router = new express.Router();

  router.get('/', (req, res) => {
    res.json({ title: 'Express' });
  });

  return router;
};
