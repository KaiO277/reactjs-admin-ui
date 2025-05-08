import Button from '@mui/material/Button';
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const TableRace = () => {
    const [races, setRaces] = useState([]); // State lưu danh sách races
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API để lấy danh sách races
                const response = await axios.get(
                    "https://dagamebc-production.up.railway.app/api/race/"
                );
                setRaces(response.data); // Lưu dữ liệu vào state
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); // Dừng trạng thái loading
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (raceId) => {
        if (window.confirm("Are you sure you want to delete this race?")) {
            try {
                // Gọi API xóa race
                await axios.delete(
                    `https://dagamebc-production.up.railway.app/api/race/delete/${raceId}/`
                );

                // Cập nhật danh sách races sau khi xóa
                setRaces((prevRaces) => prevRaces.filter((race) => race.id !== raceId));
                alert("Race deleted successfully!");
            } catch (err) {
                console.error("Error deleting race:", err);
                alert("Failed to delete race. Please try again.");
            }
        }
    };

    return (
        <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Winner NFT</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="7" className="text-center">Loading...</td>
                        </tr>
                    ) : races.length > 0 ? (
                        races.map((race, index) => (
                            <tr key={race.id || index}>
                                <td>{race.id}</td>
                                <td>{race.name}</td>
                                <td>{race.status}</td>
                                <td>{new Date(race.start_time).toLocaleString()}</td>
                                <td>{new Date(race.end_time).toLocaleString()}</td>
                                <td>{race.winner_nft || "N/A"}</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button
                                            className="secondary"
                                            color="secondary"
                                            onClick={() => navigate(`/race/view?id=${race.id}`)}
                                        >
                                            <FaEye />
                                        </Button>
                                        <Button className="success" color="success"><FaPen /></Button>
                                        <Button
                                            className="error"
                                            color="error"
                                            onClick={() => handleDelete(race.id)}
                                        >
                                            <MdDelete />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No races found.</td>
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

export default TableRace;