import axiosInstance from '../axios/axiosConfig'


const getUser = async(id) => {
  const res = await axiosInstance.get(`/user/${id}`)
  return res.data
}

export default getUser