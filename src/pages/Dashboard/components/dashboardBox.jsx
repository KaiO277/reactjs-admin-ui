// import { useEffect } from "react";
import { IoMdMore } from "react-icons/io";
import Button from '@mui/material/Button';

const DashboardBox = (props) => {

    // useEffect(() => {
    //     console.log(props.color);
    // }, []);
    
    return (
        <Button className="dashboardBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})` 
        }}>

            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">{props.title}</h4>
                    <span className="text-white">277</span>
                </div>

                <div className="ml-auto">
                    {
                        props.icon ? 
                        <span className="icon">
                            {props.icon ? props.icon : ''}
                        </span>
                        :
                        ''
                    }
                    
                </div>
            </div>

            <div className="d-flex align-items-center w-100">
                    <h6 className="text-white mb-0 mt-0">Last Month</h6>
                    <Button className="ml-auto toggleIcon"><IoMdMore /></Button>
            </div>        
        </Button>
    );
}

export default DashboardBox;