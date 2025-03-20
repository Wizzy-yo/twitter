const BASE_URL = "https://twitter241.p.rapidapi.com";

export const fetchData= async (params)=>{ 
    const result = await fetch(`${BASE_URL}/search?type=Top&count=20&query=${params}`, {
        method: "GET",
        headers: {
        "x-rapidapi-key": "8c678422c9mshf2eee02f0ebb987p1edec9jsn2b571b71132f",
        "x-rapidapi-host": "twitter241.p.rapidapi.com",
        },
    });

    // console.log(result); // a promise 
    const data = await result.json();
    console.log(data)
    // console.log(data) // a json object
    return data;
}

export const fetchInfo= async ()=>{
    const result = await fetch("https://fakestoreapi.com/products",{
        method: "GET"
    });
    const data = await result.json();
    console.log(data)
    return data;
}