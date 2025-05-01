import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";
import { IoMdMore } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import FormControl from '@mui/material/FormControl';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import ProductList from '../Product/table'

const Dashboard = () => {

    const [showBy, setShowBy] = useState('');
    const [showCate, setShowCate] = useState('');

    return(
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle/>} title={'Total Users'}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping/>} title={'Total Orders'}/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<IoBagHandle/>} title={'Total Products'}/>
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack/>} title={'Total Reviews'}/>                            
                        </div>
                    </div>

                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center">
                                <h4 className="text-white mb-0">Total Revenue</h4>
                                <Button className="ml-auto toggleIcon"><IoMdMore /></Button>
                            </div>

                            <h3 className="text-white font-weight-bold">$3,785,000.00</h3>
                            <p>$3,700,090.00 in last month</p>
                        </div>
                    </div>


                </div>
                    <div className="card shadow border-0 p-3 mt-3">
                        <h3 className="hd">Users List</h3>

                        {/* <div className="row cardFilters mt-3">
                            <div className="col-md-3">
                                <h4>SHOW BY</h4>
                                <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                </FormControl>
                                
                            </div>

                            <div className="col-md-3">
                                <h4>CATEGORY BY</h4>
                                <FormControl size="small" className="w-100">
                                <Select
                                    value={showCate}
                                    onChange={(e) => setShowCate(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>                                    
                                </FormControl>

                            </div>
                        </div> */}

                        {/* table list */}
                        <ProductList />
                    </div>
            </div>
        </>
    )
}

export default Dashboard;