export const exercisesOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key':'3e2b0adbbbmshed7518d737e08efp1b2b80jsn57b2e770335f',
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const optionsVidios = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': '965328a0d1mshacf7a04a2387a34p17f2c2jsnff91ee50fba3',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchdata = async (url,options)=>{
    const res=await fetch(url,options);
    const data=await res.json();


    return data;
}