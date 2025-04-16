import Button from '@mui/material/Button';
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubMenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

    return (
        <>
         <div className="sidebar"> 
            <ul>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab===0 ? 'active':''}`}>
                            <span className='icon'><RiDashboardHorizontalLine/></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                    
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true  ? 'active':''}`} onClick={()=>isOpenSubMenu(1)}>
                        <span className='icon'><RiProductHuntLine/></span>
                        Product
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===1  && isToggleSubmenu===true  ? 'colapse':'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="/product/list">Products List</Link></li>
                            <li><Link to="#">Products View</Link></li>
                            <li><Link to="#">Products Upload</Link></li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Link to='/'>
                    <Button className='w-100'>
                        <span className='icon'><IoCartOutline/></span>
                        Order
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    <Button className='w-100'>
                        <span className='icon'><IoSettingsOutline/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                    <Button className='w-100'>
                        <span className='icon'><RiDashboardHorizontalLine/></span>
                        Dashboard
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li>
            </ul>
         </div>
        </>
    )
}

export default Sidebar;