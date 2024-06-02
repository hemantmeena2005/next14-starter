
import { connectToDb } from "./connecttodb";
import { Post, User } from "./models";

import { unstable_noStore as noStore } from "next/cache";

// TEmporary data
// const users  = [
//     {id:1 ,name:'john'},    
//     {id:2 ,name:'mohit'},
//     {id:3 ,name:'sohu'},
// ]
// const posts= [
//     {id:1 , title:'post1', body:'....' , userId:1},    
//     {id:2 , title:'post2', body:'....' , userId:2},
//     {id:3 , title:'post3', body:'....' , userId:3},
// ]

export const getPosts = async  ()=>{
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw Error("Failed to fetch posts")
    }
}

export const getPost = async (slug) =>{
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw Error("Failed to fetch post")
    }
}
export const getUser = async (id) =>{
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw Error("Failed to fetch user")
    }
};
export const getUsers = async () =>{
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw Error("Failed to fetch users")
    }
}