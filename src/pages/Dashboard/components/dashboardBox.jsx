import { IoMdMore } from "react-icons/io";
import Button from '@mui/material/Button';

const DashboardBox = ({
    title = "Default Title",
    icon = null,
    color = ["#000", "#333"], // Giá trị mặc định cho gradient
    value = "N/A", // Giá trị mặc định cho số liệu
}) => {
    const gradientStyle = color?.length === 2
        ? `linear-gradient(to right, ${color[0]} , ${color[1]})`
        : "none";

    const iconElement = icon ? <span className="icon">{icon}</span> : null;

    return (
        <Button className="dashboardBox" style={{ backgroundImage: gradientStyle }} component="div">
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">{title}</h4>
                    <span className="text-white">{value}</span>
                </div>
                <div className="ml-auto">{iconElement}</div>
            </div>
            <div className="d-flex align-items-center w-100">
                <h6 className="text-white mb-0 mt-0">Last Month</h6>
                <div className="ml-auto toggleIcon"><IoMdMore /></div>
            </div>
        </Button>
    );
};

export default DashboardBox;