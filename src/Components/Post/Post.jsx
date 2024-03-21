import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const{title,id}=post;
    return (
        <div className='border-2 rounded-xl p-5 m-5 text-center'>
           
            <h2 className='font-bold'>{title}</h2>
            <Link to={`/post/${id}`}>Show Details</Link>
            
        </div>
    );
};

Post.propTypes={
    post:PropTypes.object
}



export default Post;



