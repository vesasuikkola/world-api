import dotenv from 'dotenv';
dotenv.config();

export const APP = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 4001,
  path: '/world'
};

export const SECRETS = {
  auth: process.env.AUTH_SECRET,
  mongodb_uri: process.env.MONGODB_URI
};
