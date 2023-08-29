import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BsRssFill, BsSteam, BsTwitch, BsYoutube} from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from '../../redux/store/sidebarSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    <main>
      <div className='contain'>
        <div className='navbar-content'>
          <div className='brand-and-toggler'>
            <Link to = "/" className="navbar-brand">G<span>ESTATE</span></Link>
            <button type='button' className='navbar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt3 size = { 25 } />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
              <MdClose size = { 25 } />
            </button>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to = "/" className='nav-link'>home</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/creators" className='nav-link'>creators</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/stores" className='nav-link'>stores</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/games" className='nav-link'>games</Link>
              </li>
            </ul>

            <ul className='connect-list '>
              <li className='text-uppercase fw-7 w-100 connect-text mb-2'>connect</li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsRssFill />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsSteam size = { 18 } />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsTwitch size = { 18 } />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsYoutube size = { 19 } />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Navbar;