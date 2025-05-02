import Button from '@mui/material/Button';
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { TbCoins } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { GiCheckeredFlag } from "react-icons/gi";

const Sidebar = () => {
    const [submenuState, setSubmenuState] = useState({}); // Trạng thái mở/đóng của submenu

    const toggleSubMenu = (index) => {
        setSubmenuState((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Đảo trạng thái của submenu được nhấn
        }));
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to='/dashboard'>
                        <Button className="w-100">
                            <span className='icon'><RiDashboardHorizontalLine /></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button
                        className={`w-100 ${submenuState[1] ? 'active' : ''}`}
                        onClick={() => toggleSubMenu(1)}
                    >
                        <span className='icon'><LuUsers /></span>
                        User
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${submenuState[1] ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="/user/list">User List</Link></li>
                            <li><Link to="/user/view">User View</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button
                        className={`w-100 ${submenuState[2] ? 'active' : ''}`}
                        onClick={() => toggleSubMenu(2)}
                    >
                        <span className='icon'><TbCoins /></span>
                        Stake 
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${submenuState[2] ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="/stake/list">Stake List</Link></li>
                            <li><Link to="/stake/view">Stake View</Link></li>
                            <li><Link to="/stake/add">Stake Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button
                        className={`w-100 ${submenuState[3] ? 'active' : ''}`}
                        onClick={() => toggleSubMenu(3)}
                    >
                        <span className='icon'><BsCoin /></span>
                        NFT 
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${submenuState[3] ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="/nfts/list">NFT List</Link></li>
                            <li><Link to="/nfts/view">NFT View</Link></li>
                            <li><Link to="/nfts/add">NFT Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button
                        className={`w-100 ${submenuState[4] ? 'active' : ''}`}
                        onClick={() => toggleSubMenu(4)}
                    >
                        <span className='icon'><GiCheckeredFlag /></span>
                        Race 
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${submenuState[4] ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="/race/list">Race List</Link></li>
                            <li><Link to="/race/view">Race View</Link></li>
                            <li><Link to="/race/add">Race Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/settings'>
                        <Button className='w-100'>
                            <span className='icon'><IoSettingsOutline /></span>
                            Settings
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;