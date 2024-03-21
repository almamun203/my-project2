import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Details = () => {
    const user=useLoaderData();

const {userId} =useParams();
console.log(userId);


    const {name,phone }=user;
    
   const navigate=useNavigate();

 const    handleGoBack=()=>{
    navigate(-1);
 }


    return (
        <div className="flex flex-col justify-center items-center border-2 rounded-xl p-16 m-20 bg-green-100">
            <h3 className="text-2xl text-green-500 font-bold">Hi Guys</h3>
            <h2>I am {name}</h2>
            <p>My phone number is {phone}</p>
            <button onClick={handleGoBack} className="btn btn-sm mt-4 btn-primary">Back</button>
        </div>
    );
};

export default Details;