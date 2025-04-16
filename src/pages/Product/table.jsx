import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';

const tableProduct = () => {
    return (
        <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped v-align">
            <thead className="thead-dark">
                <tr>
                    <th>UID</th>
                    <th>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SALES</th>
                    <th>ACTION</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>#1</td>
                    <td>
                        <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                                <div className="img card shadow m-0">
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                </div>
                            </div>
                            <div className="info pl-3">
                                <h6>Tops and skirt set for Female</h6>
                                <p>Women's exclusive summer To</p>
                            </div>
                        </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                        <div style={{ width:'70px' }}>
                            <del className="old">$21.00</del>
                            <span className="new text-danger">$21.00</span>
                        </div>
                    </td>
                    <td>a</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="secondary" color="secondary"><FaEye /></Button>
                            <Button className="success" color="success"><FaPen /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>#1</td>
                    <td>
                        <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                                <div className="img card shadow m-0">
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                </div>
                            </div>
                            <div className="info pl-3">
                                <h6>Tops and skirt set for Female</h6>
                                <p>Women's exclusive summer To</p>
                            </div>
                        </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                        <div style={{ width:'70px' }}>
                            <del className="old">$21.00</del>
                            <span className="new text-danger">$21.00</span>
                        </div>
                    </td>
                    <td>a</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="secondary" color="secondary"><FaEye /></Button>
                            <Button className="success" color="success"><FaPen /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>#1</td>
                    <td>
                        <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                                <div className="img card shadow m-0">
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                </div>
                            </div>
                            <div className="info pl-3">
                                <h6>Tops and skirt set for Female</h6>
                                <p>Women's exclusive summer To</p>
                            </div>
                        </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                        <div style={{ width:'70px' }}>
                            <del className="old">$21.00</del>
                            <span className="new text-danger">$21.00</span>
                        </div>
                    </td>
                    <td>a</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="secondary" color="secondary"><FaEye /></Button>
                            <Button className="success" color="success"><FaPen /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>#1</td>
                    <td>
                        <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                                <div className="img card shadow m-0">
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                </div>
                            </div>
                            <div className="info pl-3">
                                <h6>Tops and skirt set for Female</h6>
                                <p>Women's exclusive summer To</p>
                            </div>
                        </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                        <div style={{ width:'70px' }}>
                            <del className="old">$21.00</del>
                            <span className="new text-danger">$21.00</span>
                        </div>
                    </td>
                    <td>a</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="secondary" color="secondary"><FaEye /></Button>
                            <Button className="success" color="success"><FaPen /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>#1</td>
                    <td>
                        <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                                <div className="img card shadow m-0">
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                </div>
                            </div>
                            <div className="info pl-3">
                                <h6>Tops and skirt set for Female</h6>
                                <p>Women's exclusive summer To</p>
                            </div>
                        </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                        <div style={{ width:'70px' }}>
                            <del className="old">$21.00</del>
                            <span className="new text-danger">$21.00</span>
                        </div>
                    </td>
                    <td>a</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="secondary" color="secondary"><FaEye /></Button>
                            <Button className="success" color="success"><FaPen /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>

        <div className="d-flex tableFooter">
            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
        </div>
        
    </div>
    )
}

export default tableProduct;