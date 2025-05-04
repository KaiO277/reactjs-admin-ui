import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../SearchBox';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import * as React from 'react';
import { IoShieldHalf } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MyContext } from '../../App';
import { useNavigate } from "react-router-dom"; 
import { setAuthToken } from "../../helpers/setAuthToken";
import { FaRegBell } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { useEffect, useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
    });

    const context = React.useContext(MyContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

    const navigate = useNavigate();

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const username = localStorage.getItem("username") || "Guest";
        const email = localStorage.getItem("email") || "guest@example.com";

        setUserInfo({ username, email });
    }, []);

    const handleLogout = () => {
          localStorage.clear();
          setAuthToken(null);
          navigate("/login"); // Điều hướng về trang login
    };
    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className='d-flex align-items-center logo'>
                                <img src={logo}/>
                                <span className='ml-2'>Admin</span>
                            </Link>
                        </div>


                        <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                            <Button className='rounded-circle mr-3' onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                
                                {
                                    context.isToggleSidebar ===false ? <MdMenuOpen/> : <MdOutlineMenu/>
                                }
                            </Button>
                            <SearchBox/>
                        </div>


                        <div className='col-sm-7 d-flex align-items-center justify-content-end part3'>
                            {/* <Button className='rounded-circle mr-3'><MdMenuOpen/></Button> */}
                            <Button className='rounded-circle mr-3'><FaRegBell/></Button>
                            <Button className='rounded-circle mr-3'><LuMessageCircle/></Button>
                            {/* <Button className='rounded-circle mr-3'><MdMenuOpen/></Button> */}

                            <div className="myAccWrapper">
                                <Button className='myAcc d-flex align-items-center' onClick={handleClick}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                                        </span>
                                    </div>  

                                    <div className='userInfo'>
                                        <h4>{userInfo.username}</h4>
                                        <p className='mb-0'>{userInfo.email}</p>
                                    </div>  
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose} 
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <FaUser fontSize="small" />
                                    </ListItemIcon>
                                    My account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <IoShieldHalf fontSize="small" />
                                    </ListItemIcon>
                                    Reset password
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                     Logout
                                    </MenuItem>
                                </Menu>  
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
        
    );
}

export default Header;