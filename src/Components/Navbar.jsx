import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';
import { MdFavoriteBorder, MdOutlineStore } from 'react-icons/md';
import { CgMenuRound, CgProfile } from 'react-icons/cg';
import { RiProjector2Line, RiMovie2Line } from 'react-icons/ri';
import Create from "./Create";
import { useContext, useState } from "react";
import Learn from "./Learn";
import { AppContext } from "../Context/AppContext";

function Navbar() {

   const [dropdown_i, setDropdown_i] = useState(false);
   const [dropdown_ii, setDropdown_ii] = useState(false);
   const { isLogin, setIsLogin, userEmail, setUserEmail } = useContext(AppContext);
   const [showMenu, setShowMenu] = useState(false);


   const handleLogout = () => {
      setUserEmail('');
      setIsLogin(false);
   }


   return (
      <>
         <nav className="navbar">
            <img className="nav-art" src="https://animoto.com/static/AnimotoLogoBlobs-afa5652205594807da50c94d53f42b86.svg" alt="nav art" />
            <NavLink className="brand-logo" to='/'>
               <img src="https://animoto.com/static/logo-1d220e413f4f69fa42d66d93381db371.svg" alt="brand logo" />
            </NavLink>
            <div>
               <div
                  className="arrow-right"
                  onMouseEnter={() => setDropdown_i(true)}
                  onMouseLeave={() => setDropdown_i(false)}
               >
                  CREATE <IoIosArrowDown className="down-arrow" />
               </div>
               <div>TEMPLATES</div>
               <div>FEATURES</div>
               <NavLink className='nav-link' to='/pricing'>PRICING</NavLink>
               <div
                  className="arrow-right"
                  onMouseEnter={() => setDropdown_ii(true)}
                  onMouseLeave={() => setDropdown_ii(false)}
               >
                  LEARN <IoIosArrowDown className="down-arrow" />
               </div>
            </div>
            <div>
               {isLogin ?
                  <>
                     <CgProfile className='nav-user' />
                     <RiProjector2Line className='nav-user' />
                     <CgMenuRound className="nav-menu" onClick={() => setShowMenu(!showMenu)} />
                  </>
                  : <>
                     <NavLink className="nav-link" to='/login'>LOG IN</NavLink>
                     <NavLink className="nav-link" to='/signup'>SIGN UP FREE</NavLink>
                  </>
               }
               {
                  isLogin && showMenu &&
                  <div className="nav-menu-drawer">
                     <div>
                        <CgProfile className='drawer-icon' />
                        {userEmail}
                     </div>
                     <div>
                        <RiMovie2Line className='drawer-icon' />
                        On going project
                     </div>
                     <div>
                        <MdFavoriteBorder className='drawer-icon' />
                        Favorite templates
                     </div>
                     <div>
                        <MdOutlineStore className='drawer-icon' />
                        Store
                     </div>
                     <div>
                        <AiOutlineSetting className='drawer-icon' />
                        App Settings
                     </div>
                     <div onClick={handleLogout}>
                        <AiOutlineLogout className='drawer-icon' />
                        Log out
                     </div>
                  </div>
               }
            </div>
         </nav>
         {
            dropdown_i &&
            <Create
               onMouseEnter={() => setDropdown_i(true)}
               onMouseLeave={() => setDropdown_i(false)}
            />
         }
         {
            dropdown_ii &&
            <Learn
               onMouseEnter={() => setDropdown_ii(true)}
               onMouseLeave={() => setDropdown_ii(false)}
            />
         }
      </>
   );
}

export default Navbar;