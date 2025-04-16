import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }

    // Xử lý khi token hết hạn (401)
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                delete axios.defaults.headers.common["Authorization"];
                window.location.href = "/login"; // Chuyển hướng đến trang login
            }
            return Promise.reject(error);
        }
    );
};
