// import { useDispatch, useSelector } from "react-redux"
// import { Navigate, useNavigate } from "react-router"
// import { axiosPrivate } from "../axios/axiosConfig"

// const getInitialUser = async (user) => {
//   const token = sessionStorage.getItem('accessToken')
//   let initialUser;
//   if(token) {
//     axiosPrivate
//     .get('/user')
//     .then((res) => {
//       console.log('consoling: res.data =====> ', res.data )
//       initialUser = res.data;
//     })
//   }
//   console.log('consoling: initialUser =====> ', initialUser )
//   return initialUser
// }

// export default getInitialUser