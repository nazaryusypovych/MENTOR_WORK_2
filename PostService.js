//Service - Бізнес лгіка - не повязанв з req / res. Робота з БД та вихідними параметрами




const Post = require("./Post.js");

class PostService {
    async create (post){
            const createdPost = await Post.create(post);
            return createdPost

    }





    async getAll (){

            const getPosts = await Post.find();
            return getPosts;

    }





    async getOne (id){
        if (!id){
            throw new Error(`не вказано ID`);
        }
        const post = await Post.findById(id);
        return post;
    }





    async update (post){

            if (!post._id){
                throw new Error(`не вказано ID`);
            }
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return updatePost;

    }


    async delete (id){
            if (!id){
                throw new Error(`не вказано ID`);
            }
            const deletePost = await Post.findByIdAndDelete(id);
            return deletePost;
    }
}




module.exports = new PostService();