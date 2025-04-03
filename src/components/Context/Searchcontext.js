"use client"
import {createContext, useState} from "react"

export const Searchcontext = createContext();

const name = "Chiburonma"

export const SearchProvider = ({children}) => {
    const [result, setResult]=useState([])
    const cars = ["Porche", "Ferrari", "Lambo", "Bugatti"]

    return(
    <Searchcontext.Provider value={{name,result,setResult}}>
        {children}
    </Searchcontext.Provider>
    )
}