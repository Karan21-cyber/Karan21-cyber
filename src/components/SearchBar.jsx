import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Paper,IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const onhandleSubmit = (e) => {
        e.preventDefault(); // when our browser relode to prevent it we write this 

        if(searchTerm ){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

  return (
    // Paper is a component with a white background 
   <Paper
    component="form"
    onSubmit = {onhandleSubmit}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
    }}
   >
    <input 
        className="search-bar"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }    
    />

    <IconButton 
        type="submit"
        sx={{p:'10px', color:'red'}}
    >
        <Search />
    </IconButton>
   </Paper>
  )
}

export default SearchBar