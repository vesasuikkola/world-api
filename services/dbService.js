import mongoose from 'mongoose';
import { collections } from '../constants/constants.js';
import * as models from '../models/models.js';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDb = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export const readCollection = (collection, code) => {
  let query = {};
  const projection = { _id: 0, __v: 0 };
  const options = { limit: 100 }; //TODO: parametrize these for the client to control?
  switch (collection) {
    case collections.CITIES:
      if (code) query.CountryCode = code;
      return models.City.find(query, projection, options);
    case collections.COUNTRIES:
      if (code) query.Code = code;
      return models.Country.find(query, projection, options);
    case collections.LANGUAGES:
      if (code) query.CountryCode = code;
      return models.Language.find(query, projection, options);
    default:
      return undefined;
  }
};
