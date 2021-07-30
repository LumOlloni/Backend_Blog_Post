import { Connection, getConnection } from "typeorm";

class Model {
  private model: Connection;
  constructor() {
    this.model = getConnection();
  }
}

let model: Model = new Model();

export default model;
