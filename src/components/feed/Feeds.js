"use client"
import React from 'react'
import styles from "./feeds.module.css"
import {useState} from 'react'
import Tweets from '../Tweets/Tweet'

const Feeds = () => {
  const [active, setActive]= useState("For you")

  const handleActive=(tab)=>{
    setActive(tab)
  }

  return (
    <div className={`${styles.feedContainer}`}>

      <div className={`${styles.feedHeader}`}>
        <div>
        <a href="#" onClick={(e)=> {e.preventDefault(); handleActive("For you");}} className={`${active === "For you" ? styles.active:""}`}>For you</a>
        </div>
        <div>
        <a href="#" onClick={(e)=> {e.preventDefault(); handleActive("Following");}} className={`${active === "Following" ? styles.active:""}`}>Following</a>
        </div>
      </div>

      <Tweets/> 
      
    </div>
  )
}

export default Feeds

