const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const PoolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ticket_value: { type: Number, required: true },
  status: {
    type: Number,
    enumn: [0, 1, 2],
    required: true,
  },
});
PoolSchema.plugin(timestamp);

const Pool = mongoose.model("Pool", PoolSchema);
module.exports = Pool;
