import { Blog } from "../models/blog";


export const create = async (req, res) => {
    try {
        const { title, description } = req.body;

        const blog = await Blog.create({
            title,
            description
        });
        
        res.status(201).json(blog);

    } catch (error) {
        res.json(error).status(500);
    }
}

export const index = async (req, res) => {
    try {
        const blogs = await Blog.find();
        if (blogs.length === 0){
            res.status(404).json({message: "Aucun blog trouvé"});
        }
        res.status(200).json({blogs})
    } catch (error) {
        res.json(error).status(500);
    }
}
