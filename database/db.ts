import mongoose from "mongoose";

/**
 *
 *  0 = disconnected
 *  1 = connected
 *  2 = connecting
 *  3 = disconnecting
 * 99 = uninitialized
 *
 *
 */

const mongoConnection = {
  isConnected: 0,
};

export const connectToDB = async () => {
  if (mongoConnection.isConnected === 1) {
    console.log("Already connected to db");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGODB_URI as string);
  mongoConnection.isConnected = mongoose.connections[0].readyState;
};

export const disconnectToDB = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("Disconnecting from db");
};
