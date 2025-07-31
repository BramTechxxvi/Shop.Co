import { useState} from 'react'
import { HiOutlineSearch } from "reacct-icons/hi";

const SearchBar = ({ onSearch, className = "" }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event)=> {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

  return (
    <form className={`relative w-full ${className}`}>
        <HiOutlineSearch className="absolute"/>
    </form>
  )
}
