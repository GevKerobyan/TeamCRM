import axiosInstance from "../axios/axiosConfig"


const getUser = async(id) => {
  const res = await axiosInstance.get(`/user/${id}`)
  console.log('consoling: res in GetUser =====> ', res)
  return res.data
}

export default getUser