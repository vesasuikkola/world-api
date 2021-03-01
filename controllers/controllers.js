import { readCollection } from '../services/dbService.js';

export const usage = async (req, res) => {
  try {
    res.status(200).json({
      usage: 'Call /world/countries'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const docs = await readCollection('countries');
    docs ? res.status(200).json(docs) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const doc = (await readCollection('countries', req.params.code))[0];
    doc ? res.status(200).json(doc) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
