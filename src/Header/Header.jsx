import {  NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
        
       
            <nav className='flex gap-5 items-center justify-around bg-slate-300' >
            <h2 className='text-3xl font-bold  text-indigo-500'>Navbar</h2>
                <NavLink className='hover:bg-slate-500 px-2 py-0.5 text-indigo-400' to="/">Home</NavLink>
                <NavLink className='hover:bg-slate-500 px-2 py-0.5 text-indigo-400' to="/about">About</NavLink>
                <NavLink className='hover:bg-slate-500 px-2 py-0.5 text-indigo-400' to="/contact">Contact Us</NavLink>
                <NavLink className='hover:bg-slate-500 px-2 py-0.5 text-indigo-400' to='/user'>user</NavLink>
                <NavLink className='hover:bg-slate-500 px-2 py-0.5 text-indigo-400' to='/posts'>Posts</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;