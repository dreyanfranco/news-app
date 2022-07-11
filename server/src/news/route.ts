import { Router } from 'express';
import News from '../models/news.model';
import mongoose from 'mongoose';

export const newsRouter = Router();

// get all news

newsRouter.get('', async (req, res) => {
  try {
    const newsList = await News.find()
    return res.status(200).json(newsList)
  } catch (error) {
    res.status(500).json(error)
  } finally {
    // se ejecuta todo y funciono
  }
});

//get one news by id

newsRouter.get('/:news_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.news_id)) {
    res.status(404).json({ message: 'Invalid ID' })
    return
  }
  try {
    const newsId = await News.findById(req.params.news_id)
    return res.status(200).json(newsId)
  } catch (error) {
    res.status(500).json(error)
  }
})

// delete one news

newsRouter.delete('/:news_id', async (req, res) => {
  try {
    const newsIdAndDelete = await News.findByIdAndDelete(req.params.news_id)
    return res.status(200).json(newsIdAndDelete)
  } catch (error) {
    res.status(500).json(error)
  }
})

// create one news

newsRouter.post('', async (req, res) => {
  const newNewsData = req.body
  // console.log({newNewsData})
  try {
    const newNews = await News.create(newNewsData);
    return res.status(200).json(newNews)
  } catch (error) {
    res.status(500).json(error)
  }
})



