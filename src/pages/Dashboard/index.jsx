import axios from 'axios'; // Thêm dòng này
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";
import { IoMdMore } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import FormControl from '@mui/material/FormControl';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import ProductList from '../Product/table';
import { GiCheckeredFlag } from "react-icons/gi";
import { TbCoins } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";

const Dashboard = () => {
    const [showBy, setShowBy] = useState('');
    const [showCate, setShowCate] = useState('');
    const [userCount, setUserCount] = useState(0);
    const [raceCount, setRaceCount] = useState(0);
    const [betCount, setBetCount] = useState(0);
    const [nftCount, setNftCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/users/"
                );
                setUserCount(response.data.length); // cập nhật số lượng người dùng
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/race/"
                );
                setRaceCount(response.data.length); // cập nhật số lượng người dùng
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/nfts/"
                );
                setNftCount(response.data.length); // cập nhật số lượng người dùng
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/bets/"
                );
                setBetCount(response.data.length); // cập nhật số lượng người dùng
                const data = response.data;

                // Tính tổng amount từ mảng dữ liệu
                const total = data.reduce((sum, item) => {
                  return sum + parseFloat(item.amount); // Chuyển từ string sang float rồi cộng dồn
                }, 0);
        
                setTotalAmount(total);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} value={userCount} title={'Total Users'} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<GiCheckeredFlag />} value={raceCount} title={'Total Race'} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<TbCoins />} value={betCount} title={'Total Stake'} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<BsCoin />} value={nftCount} title={'Total NFT'} />
                        </div>
                    </div>

                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center">
                                <h4 className="text-white mb-0">Total Revenue</h4>
                                <Button className="ml-auto toggleIcon"><IoMdMore /></Button>
                            </div>

                            <h3 className="text-white font-weight-bold">${totalAmount}</h3>
                            <p>$3,700,090.00 in last month</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow border-0 p-3 mt-3">
                    <h3 className="hd">Users List</h3>
                    <ProductList />
                </div>
            </div>
        </>
    );
};

export default Dashboard;