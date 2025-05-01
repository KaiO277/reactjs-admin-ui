import Button from '@mui/material/Button';
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const TableBet = () => {
    const [bets, setBets] = useState([]);
    const [loading, setLoading] = useState(true); // thêm trạng thái loading
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                 // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/bets/");
                    setBets(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); // luôn dừng loading
            }
        };

        fetchData();
    }, []);

    console.log("Bet: ", bets);
    

    return (
        <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Created At</th>
                        <th>User</th>
                        <th>NFT</th>
                        <th>Race</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="7" className="text-center">Loading...</td>
                        </tr>
                    ) : bets.length > 0 ? (
                        bets.map((bet, index) => (
                            <tr key={bet.id || index}>
                                <td>{bet.id}</td>
                                <td>{bet.amount}</td>
                                <td>{new Date(bet.created_at).toLocaleString()}</td>
                                <td>{bet.user}</td>
                                <td>{bet.nft}</td>
                                <td>{bet.race}</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button
                                            className="secondary"
                                            color="secondary"
                                            onClick={() => navigate(`/bet/view?id=${bet.id}`)}
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
                            <td colSpan="7" className="text-center">No bets found.</td>
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

export default TableBet;
