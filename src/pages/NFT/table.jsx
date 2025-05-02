import Button from '@mui/material/Button';
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const TableNFT = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true); // thêm trạng thái loading
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                 // lấy token mỗi lần fetch
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/nfts/");
                    setNfts(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); // luôn dừng loading
            }
        };

        fetchData();
    }, []);

    console.log("Nfts: ", nfts);
    

    return (
        <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Token ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Staked</th>
                        <th>Created At</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="8" className="text-center">Loading...</td>
                        </tr>
                    ) : nfts.length > 0 ? (
                        nfts.map((nft, index) => (
                            <tr key={nft.id || index}>
                                <td>{nft.id}</td>
                                <td>{nft.token_id}</td>
                                <td>{nft.name}</td>
                                <td>
                                    <img
                                        src={nft.image_url}
                                        alt={nft.name}
                                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                    />
                                </td>
                                <td>{nft.staked ? "Yes" : "No"}</td>
                                <td>{new Date(nft.created_at).toLocaleString()}</td>
                                <td>{nft.user}</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button
                                            className="secondary"
                                            color="secondary"
                                            onClick={() => navigate(`/nft/view?id=${nft.id}`)}
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
                            <td colSpan="8" className="text-center">No NFTs found.</td>
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

export default TableNFT;