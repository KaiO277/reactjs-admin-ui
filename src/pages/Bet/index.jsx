import TableBet from "./table";

const BetList = () => {
    return (
        <>
        <h1>BetList</h1>
        <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-3">
                <h3 className="hd">List Stake</h3>

                <div>
                    <TableBet />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default BetList;