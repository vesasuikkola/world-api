import { readCollection } from '../services/dbService.js';
import { collections } from '../constants/constants.js';

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
    const countries = await readCollection(collections.COUNTRIES);
    countries ? res.status(200).json(countries) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const countryCode = req.params.code;
    const country = (
      await readCollection(collections.COUNTRIES, countryCode)
    )[0].toJSON();
    country.Cities = await readCollection(collections.CITIES, countryCode);
    country ? res.status(200).json(country) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
