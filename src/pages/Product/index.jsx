import TableProduct from "./table";

const ProductList = () => {
    return (
        <>
        <h1>List User</h1>
        <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-3">
                <h3 className="hd">User</h3>

                <div>
                    <TableProduct />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ProductList;