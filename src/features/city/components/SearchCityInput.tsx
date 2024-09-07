import { useSearchedCityStore } from "@/zustand/SearchedCityStore";
import { Input } from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { searchCityValidator } from "../validators";
import toast from "react-hot-toast";

const SearchCityInput = () => {
    const { cityName, setCityName } = useSearchedCityStore();
    const [inputValue, setInputValue] = useState(cityName);

    const handleSearch = async () => {
        await searchCityValidator.validate({ name: inputValue })
            .then(() => {
                return setCityName(inputValue);
            })
            .catch(err => {
                console.log(err)
                return toast.error(err.message);
            });
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleIconClick = () => {
        handleSearch();
    };

    return (
        <Input
            placeholder="Select City"
            className="w-[300px]"
            labelPlacement="outside"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            endContent={
                <IoMdSearch
                    className="text-2xl text-default-400 cursor-pointer flex-shrink-0"
                    onClick={handleIconClick}
                />
            }
        />
    );
};

export default SearchCityInput;
