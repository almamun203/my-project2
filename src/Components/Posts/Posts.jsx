import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts=useLoaderData();

    
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className='grid lg:grid-cols-3 grid-cols-2 '>
            {
               posts.map((post,index)=><Post
               key={index}
               post={post}
               ></Post>) 
            }
            </div>
        </div>
    );
};

export default Posts;