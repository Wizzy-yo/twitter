import React from "react";
import Image from "next/image";
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={`${styles.sideContainer} flex flex-col items-start justify-center gap-16 h-screen w-1/6 text-white pl-8 pt-2`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"style={{filter:"brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)",}}></path></g></svg>

      <div className='flex flex-col gap-10 h-[50vh] w-full'>
        <div className={`${styles.Icons} flex w-full items-center gap-2`}>
          <Image src="/side_images/home.png" width={20} height={20} alt="Home Image"style={{ filter:"brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)",}}/>
          <h1>Home</h1>
        </div>
        <div>
          <h1>Explore</h1>
        </div>
        <div>
          <h1>Notifications</h1>
        </div>
        <div>
          <h1>Messages</h1>
        </div>
        <div>
          <h1>Grok</h1>
        </div>
        <div>
          <h1>Communities</h1>
        </div>
        <div>
          <h1>Profile</h1>
        </div>
        <div>
          <h1>More</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// bearer token => AAAAAAAAAAAAAAAAAAAAAE7UzgEAAAAAA3%2Bdku9NAMHG8A2yhXrAsT12SRA%3DCmzfLNA7QzJEP462xoW65poybbie9wVAvGRkYtkAEtnAkw8tlT

// access token => 1441156814838452232-s1qzY2Mmo3qMESzVfpUECrhSsUFIzv

// access token secret => gwU29FqXegYiZhs0j10O3z59gQbRhk4V7AaqAiDByD4FY