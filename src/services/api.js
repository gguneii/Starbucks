import axios from "axios";

async function getAllMenus() {
    const res = await axios.get("https://starbucksbk.vercel.app/menus")
    return res.data
}

export {getAllMenus}