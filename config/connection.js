require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
console.log("MY_URL check:::::::", process.env.MONGOOSE_URL);
mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected With Mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
