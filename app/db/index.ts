import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

const connectDb = async () => {
  try {
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Password@123",
      database: "blognode",
      synchronize: true,
      logging: false,
      entities: [__dirname + "./entity/*.ts"],
    });
  } catch (error) {
    console.error("connection failed ", error);
  }
};

export default connectDb;
