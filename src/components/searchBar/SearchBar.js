+'use client'
import React from 'react'
import styles from "./searchBar.module.css"
import { fetchData } from '@/utilities/fetchData'
import {useState} from 'react'
import { fetchInfo } from '@/utilities/fetchData'


const SearchBar = () => {

const [userKeyword, setUserKeyword] = useState('')
const [result, setResult] = useState([])
const [loading, setLoading] = useState(false)

const handleSearch = async (e)=>{
    e.preventDefault(); // prevents the default behaviour of your onSubmit event
    const data = await fetchData(userKeyword)
    setLoading(true)

    setResult(data.result.timeline.instructions) 
    setLoading(false)  
}
console.log(result)  
// console.log(result)

const handleActive = async (e)=>{
    e.preventDefault();
    fetchInfo();

    // setResult(data.result.timeline.instructions)//
}
console.log(result)

    return (
    <div>    
    <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search post'
        value={userKeyword}
            className='bg-transparent'        
            onChange={(e) => setUserKeyword(e.target.value)}
            />
    </form>
    {
        loading? <p className='text-white'>Loading Data</p>:(
            result.map((item, index)=>(
            <div key={index}>
                {item.entries?.map((entry, entryIndex)=>(
                    <div key={entryIndex}>
                        {entry.content?.items?.map((eachItem, itemIndex)=>(
                            <div>
                                <h1>
                                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.location || "No Location"}
                                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.followers_count || "No follow"}
                                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.screen_name || "No Name"}
                                </h1>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            ))
        )
    }
    <button onClick={handleActive}>Search Product</button>
    </div>
    )
}

export default SearchBar
