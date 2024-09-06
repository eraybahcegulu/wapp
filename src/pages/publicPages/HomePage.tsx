import CityTable from "../../features/city/components/CityTable"
import SearchCityInput from "../../features/city/components/SearchCityInput"
import SearchedCityCard from "../../features/city/components/SearchedCityCard"



const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center gap-5 p-[3%] items-center md:items-start">
      <div className="flex w-[600px]  ">
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