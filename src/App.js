import React from 'react';

/*import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";*/

import {Cards,Charts,CountryPicker} from "./components";//To use this you need to have one index.js file in components folder
import styles from "./App.module.css";
import {fetchData} from "./api";

import coronaImage from "./images/image.png";

class App extends React.Component{

    state = {
        data:{},
        country:'',
    }

    handleCountryChange = async (country) =>{
        //fetch the data
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({data:fetchedData,country:country});
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(data); // We coudl have also done this in index.js file ,but we sent the data recieved to App.js
        this.setState({data:fetchedData});
    }
    render(){
       
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage}/>
                <Cards data = {this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data ={this.state.data} country = {this.state.country}/>
             
            </div>
        )
    }
}

export default App;