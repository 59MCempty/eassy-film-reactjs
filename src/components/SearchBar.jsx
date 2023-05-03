import React, {useState} from 'react';
import { Search as SearchIcon } from "react-bootstrap-icons"


const style = {
    searchBar: "w-full text-black h-10 pl-10 rounded-lg px-4 outline outline-neutral-700 font-sans opacity-70 hover:outline-offset-2 text-lg"
}

const SearchBar = ({ onSubmit }) => {

    const [input, setInput] = useState("");

    function submit(e) {
        let userInput = e.target.value
        if (e.key === "Enter" && userInput.trim !== ""){
            onSubmit(userInput)
            setInput(" ")
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div className="flex gap-3">
            <SearchIcon size={24} className="absolute mt-2 ml-2" />
            <input
                onChange={handleChange}
                onKeyUp={submit}
                className={style.searchBar} type="text" placeholder={"Please type something ... "} />
        </div>
    );
};

export default SearchBar;
