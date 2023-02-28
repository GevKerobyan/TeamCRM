import { CardWrapper, CardIMGWrapper, CardTextWrapper } from "../styled"

const SearchCompanyCard = ({mappedCompany, handleClick}) => {
  return (
    <CardWrapper onClick={()=> handleClick (mappedCompany.id)}>
      <CardIMGWrapper>
        <img src={mappedCompany.logo} alt='logo' />
      </CardIMGWrapper>
        <CardTextWrapper>
          <p>{mappedCompany.name}</p>
        </CardTextWrapper>
        {/* <MoreButton onClick={handleCardClick} fontSize='small'/> */}
    </CardWrapper>
  )
}

export default SearchCompanyCard