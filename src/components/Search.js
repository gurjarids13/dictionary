import React, { useState } from 'react'
import App from '../App';
const Search = () => {
    const [search,setSearch] =useState()
const [data,setData] = useState();


    const handleInput =(event) =>{
setSearch(event.target.value)    


}

const myFun = async() =>{
    const get= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    const jsonData =await get.json()
    setData(jsonData[0])
}

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> 
      <div ><h1  className="text-4xl font-bold mb-4">Dictionary</h1>
     </div>
      <div className="container bg-white shadow-md rounded-lg p-6 w-96">
        <div className="searchBar flex space-x-2 mb-4">
            <input type='text' placeholder='Search Word'
 className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
onChange={handleInput}
            />
            <button 
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
            onClick={myFun}>Search</button>
        </div>
        <div className='dates'>
            {
                data ?
                <div className='dates'>
                    <h2>Word : {data.word}</h2>
                    <p>Part of Speech : {data.meanings[0].partOfSpeech}</p>
                    <p>Synoyms : {data.meanings[0].synonyms[0]}</p>
                    <p>Example : {data.meanings[0].definitions[0].example}</p>
                     </div>
                : "data not found"
            }
        </div>
      </div>
     
     </div>
    
  )
}

export default Search
