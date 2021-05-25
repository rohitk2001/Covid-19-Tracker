import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{ //Excecuted if data is succesfully fetched 
        /*const {data}  = await axios.get(url);//Stroing the datat recieved in an object

        const modifiedData = { //object
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }or */ 
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios(changeableUrl);

        return {confirmed,recovered,deaths,lastUpdate}; // To App.js
    } catch(error){
        return error;
    }
}

export const fetchDailyData = async () => {
    try{
        const {data}  = await axios.get(`${url}/daily`);
        return data.map((dailyData) => ({ confirmed: dailyData.confirmed.total,deaths: dailyData.deaths.total, date:dailyData.reportDate, }));
    }catch(error){
        return error;
    }
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}}  = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }catch(error){
        return error;
    }
}

//export default fetchData(); does not work