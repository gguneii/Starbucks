import axiosInstance from "./instance";

async function getAllMenus() {
    const res = await axiosInstance.get("/menus")
    return res.data
}
async function getAllDetails() {
    const res = await axiosInstance.get("/details")
    return res.data
}

// async function getProductById(id, hot){
//     const res = await axios.get(`https://www.starbucks.com/bff/ordering/406/hot`)
//     return res.data
// }

export {getAllMenus, getAllDetails}