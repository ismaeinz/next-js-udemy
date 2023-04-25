import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error("Invalid environment");
}
export const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
