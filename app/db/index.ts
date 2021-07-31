import "reflect-metadata";
import { Connection, createConnection } from "typeorm";


const connectDb = async (): Promise<Connection> => {
  const connection: Connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Password@123",
    database: "blognode",
    synchronize: true,
    logging: false,
    entities: [__dirname + "./entity/*.ts"],
  }).catch((err) => err);
  return connection;
};

export default connectDb;
