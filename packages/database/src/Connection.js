import mongoose from 'mongoose';
const { connect } = mongoose;
export class Connection {
  constructor(options = {}) {
    this.options = options;
  }
  async start() {
    let db = await connect(`mongodb://${this.options.ip}:${this.options.port}/${this.options.name}`);
    console.log(db.connections.at(0).name);
  }
}
