import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import Feeds from "@/components/feed/Feeds";
import fetchData from "@/utilities/fetchData";
import SearchBar from "@/components/searchBar/SearchBar";
import Tweets from "@/components/Tweets/Tweet";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Feeds/>
    <SearchBar/>
  

    </div>
  );
}

