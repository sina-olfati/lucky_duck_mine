const controller = require("./../controller");
const _ = require("lodash");


module.exports = new (class extends controller {
  async create(req, res) {

    let pool = new this.Pool(_.pick(req.body, ["title", "description", "ticket_value", "status"]));



    await pool.save();

    this.response({
      res,
      message: "created successfully",
      data: _.pick(pool, ["_id", "title", "description", "ticket_value", "status"]),
    });
  }
  async getPool(req, res) {

    let pool = await this.Pool.find()

    this.response({
      res,
      message: "created successfully",
      data: pool,
    });
  }


})();
