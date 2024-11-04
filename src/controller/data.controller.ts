import { Request, Response, NextFunction } from "express";
import Post from "../models/dataUpload.models";


// postData
export const postData = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name, age, email } = req.body;
        const newPost = new Post({ name, age, email });
        await newPost.save();

        console.log("Data saved:", name, age, email);
        res.status(201).json({ message: "Data saved successfully", data: newPost });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Failed to save data" });
        next(error);
    }
};


// export const getAllData = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     try {
//         const posts = await Post.find();
//         console.log("All data retrieved:", posts);
//         res.status(200).json({ message: "All data retrieved successfully", data: posts });
//     } catch (error) {
//         console.error("Error retrieving data:", error);
//         res.status(500).json({ message: "Failed to retrieve data" });
//         next(error);
//     }
// };





// getAllData also get with email
export const getAllData = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email } = req.query;
        const posts = email
            ? await Post.find({ email: email as string })
            : await Post.find();

        console.log("Data retrieved:", posts);
        res.status(200).json({ message: "Data retrieved successfully", data: posts });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ message: "Failed to retrieve data" });
        next(error);
    }
};


// deleteData with id
export const deleteData = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;

        // Delete the document with the given _id
        const deletedPost = await Post.findByIdAndDelete(id);

        if (deletedPost) {
            console.log("Data deleted:", deletedPost);
            res.status(200).json({ message: "Data deleted successfully", data: deletedPost });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ message: "Failed to delete data" });
        next(error);
    }
};