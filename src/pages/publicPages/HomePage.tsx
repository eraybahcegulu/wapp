import CityTable from "../../features/city/components/CityTable"
import SearchCityInput from "../../features/city/components/SearchCityInput"
import SearchedCityCard from "../../features/city/components/SearchedCityCard"


const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between gap-5 py-10 items-center md:items-start overflow-auto">
      <div className="flex w-full  ">
        <CityTable />
      </div>


      <div className="flex flex-col gap-5 ">
        <SearchCityInput />
        <SearchedCityCard />
      </div>


    </div>
  )
}

export default HomePage