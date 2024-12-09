import axiosInstance from "./instance";

async function getAllMenus() {
    const res = await axiosInstance.get("/menus")
    return res.data
}
async function getAllDetails() {
    const res = await axiosInstance.get("/details")
    return res.data
}
async function getAllGifts(){
    const res = await axiosInstance.get("/gift")
    return res.data
}

export {getAllMenus, getAllDetails , getAllGifts}