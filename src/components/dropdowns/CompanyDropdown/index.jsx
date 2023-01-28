import { useSelector } from "react-redux"

 const CompanyDropdown = ({props}) => {
  const { user, company } = useSelector(state => state)
return (
<h1> Company </h1>
  )
}

export default CompanyDropdown