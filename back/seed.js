import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  await mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      const itemsSeed = async () => {
        await product.deleteMany({});
        await product.insertMany(allData);
      };

      productSeed().then(() => {
        console.log("DB filled");
        mongoose.connection.close();
      });
    });
}

main().catch((err) => console.log("!!DBERROR!!", err));
