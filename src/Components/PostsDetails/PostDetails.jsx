import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    
    return (
        <div>
            <h3 className='text-indigo-400 font-semibold'>{post.body}</h3>
        </div>
    );
};

export default PostDetails;