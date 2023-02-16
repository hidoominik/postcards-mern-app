import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        // console.log(postMessages);
        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req,res) => {
    const {searchQuery, tags} = req.query;
    try {
        const title = new RegExp(searchQuery , 'i');
        
        console.log(title);
        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});  
        console.log(posts)
        res.json({ data: posts });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    //res.send("Post creation");
    const post = req.body;
    const newPost = new PostMessage({...post, creator: req.userId, createAt: new Date().toISOString()});
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    console.log("UPDATE POST")
    console.log(req.body);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Post with that id ('+ _id + ') not found');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Post with that id ('+ _id +') not found');
    await PostMessage.findByIdAndRemove(_id);
    res.json({message: 'Post deleted successfully'});
}

export const likePost = async( req, res) => {
    const {id: _id } = req.params;
    
    
    if(!req.userId) return res.json({message: 'Unauthenticated!'});

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Post with that id (' +  _id + ') not found');

    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1){
        //like the post
        post.likes.push(req.userId);
    } else {
        //dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true} );
    res.json(updatedPost);
}