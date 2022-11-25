import './SearchBar.css';
import {useState} from 'react'
import crossIcon from '../assets/icons/cross.svg'
import searchIcon from '../assets/icons/search.svg'

const SearchBar = ({handleResearch}) => {
    const [searchedWords, setSearchedWords] = useState('')

    
    function handleSearchedWords(e) {
        setSearchedWords(e.target.value);
    }
    function clearSearchedWords() {
        setSearchedWords('');
        handleResearch('');
    }
    function handleEnter(e){
        if (e.key === 'Enter'){
            handleResearch(searchedWords)
        }
    }


    return (
        <div className='searchbar-container'>
            <input className='searchbar-input' type='text' value={searchedWords} onChange={(e)=>handleSearchedWords(e)} onKeyDown={(e)=>handleEnter(e)}/>
            <button className='searchbar-btn search-btn' onClick={()=>handleResearch(searchedWords)}><img src={searchIcon} style={{width: '15px', height:'15px'}}/></button>
            <button className='searchbar-btn cancel-btn' onClick={clearSearchedWords}><img src={crossIcon} style={{width: '15px', height:'15px'}}/></button>
        </div>

    )
}

export default SearchBar