import { NavLink } from "react-router-dom";
const Header = () => {

    const Links = <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-400 focus:text-green-400 border border-green-400 font-bold' : 'font-bold'} style={{ background: 'transparent' }} >
                Home
            </NavLink>
        </li>
        <li><NavLink to="/listedBook" className={({ isActive }) => isActive ? 'text-green-400 focus:text-green-400  border border-green-400 font-bold' : 'font-bold'}  style={{ background: 'transparent' }} >Listed Books</NavLink></li>
        <li><NavLink to="/pagetoRead" className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 font-bold focus:text-green-400 ' : 'font-bold'}  style={{ background: 'transparent' }} >Pages to Read</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 font-bold focus:text-green-400 ' : 'font-bold'}  style={{ background: 'transparent' }} >Gallery</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 font-bold focus:text-green-400 ' : 'font-bold'}  style={{ background: 'transparent' }} >Contact</NavLink></li>

    </>
    return (
     
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <a className="btn bg-[#23BE0A] text-white">Sign in</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign up</a>
                </div>
            </div>

    );
};

export default Header;