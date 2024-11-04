import { model, Schema } from "mongoose";
import { IPost } from "../types/postUpload.types"; // Ensure this path is correct

const DataSchema = new Schema<IPost>({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    age: {
        type: Number,
        required: [true, "number is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
});

const Post = model<IPost>("Post", DataSchema);

export default Post;