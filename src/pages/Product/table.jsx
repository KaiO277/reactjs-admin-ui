import Button from '@mui/material/Button';
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const TableProduct = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // thêm trạng thái loading
    const navigate = useNavigate()
    // const token = localStorage.getItem("username");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Lấy token từ localStorage
                const token = localStorage.getItem("accessToken");
                if (!token) {
                    throw new Error("Token not found. Please log in.");
                }
    
                // Gọi API với token trong header
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/users/",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Thêm token vào header
                        },
                    }
                );
                setUsers(response.data); // Cập nhật danh sách người dùng
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); // Luôn dừng trạng thái loading
            }
        };
    
        fetchData();
    }, []);

    // console.log("User: ", users);
    

    return (
        <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
                <thead className="thead-dark">
                    <tr>
                        <th>UID</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>Wallet Address</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" className="text-center">Loading...</td>
                        </tr>
                    ) : users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={user.id || index}>
                                <td>#{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.profile?.wallet_address || "N/A"}</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button
                                            className="secondary"
                                            color="secondary"
                                            onClick={() => navigate(`/user/view?id=${user.id}`)}
                                        >
                                            <FaEye />
                                        </Button>
                                        <Button className="success" color="success"><FaPen /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="d-flex tableFooter justify-content-center">
                <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
            </div>
        </div>
    );
};

export default TableProduct;
