import TableNFT from "./table";

const NFTList = () => {
    return (
        <>
        <h1>NFTList</h1>
        <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-3">
                <h3 className="hd">List NFT</h3>

                <div>
                    <TableNFT />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default NFTList;