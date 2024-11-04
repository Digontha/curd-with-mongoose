

import app from "./app";
import connectDB from "./config/db";


const PORT = process.env.PORT || 3000;


const main = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to start the server due to a DB connection error",
      error
    );
  }
};

main();