import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";


const User = () => {

const users=useLoaderData();

    return (
        <div>
            <div className='text-2xl font-bold text-green-400 py-4 text-center '>These are our Users total:{users.length}</div>
           <div className='grid lg:grid-cols-3 grid-cols-2 '>
            {
                users.map((user,index)=><Use
                key={index}
                user={user}
                ></Use>)
            }
           </div>
          
        </div>
    );
};

export default User;