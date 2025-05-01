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
import { BsHourglass } from "react-icons/bs";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [submenuState, setSubmenuState] = useState({});

    const context = useContext(MyContext);

    const toggleSubMenu = (index) => {
        setSubmenuState((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to='/dashboard'>
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className='icon'><RiDashboardHorizontalLine /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 1 && submenuState[1] ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(1);
                                toggleSubMenu(1);
                            }}
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
                            className={`w-100 ${activeTab === 2 && submenuState[2] ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(2);
                                toggleSubMenu(2);
                            }}
                        >
                            <span className='icon'><TbCoins /></span>
                            Stake 
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${submenuState[2] ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/stake/list">Stake List</Link></li>
                                <li><Link to="/stake/view">Stake View</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 3 && submenuState[3] ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(3);
                                toggleSubMenu(3);
                            }}
                        >
                            <span className='icon'><BsCoin  /></span>
                            NFT 
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${submenuState[3] ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/nfts/list">NFT List</Link></li>
                                <li><Link to="/nfts/view">NFT View</Link></li>
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
        </>
    );
};

export default Sidebar;