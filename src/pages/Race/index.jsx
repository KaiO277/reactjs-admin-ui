import TableRace from "./table";

const RaceList = () => {
    return (
        <>
        <h1>Race List</h1>
        <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-3">
                <h3 className="hd">List Race</h3>

                <div>
                    <TableRace />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default RaceList;