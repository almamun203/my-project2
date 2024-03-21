import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Use = ({user}) => {
    const{name,email,username,id}=user;
    const navigate=useNavigate();
   const handleShowDetails=()=>{
    navigate(`/user/${id}`);
   }




    return (
        <div className='border-2 rounded-xl p-5 m-5 text-center'>
            <p>{username}</p>
            <h2 className='font-bold'>{name}</h2>
            <p className='text-sm font-extralight'>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link> <br />
            <button className='btn btn-sm mt-4 btn-accent' onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

Use.propTypes={
    user:PropTypes.object,
}

export default Use;