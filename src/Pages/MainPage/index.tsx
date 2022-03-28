import {
    SearchContainer,
    SearchBar,
    RestaurantsContainer,
} from './styles';
import Page from '../../components/Page/';
import  heroImageMainPage  from '../../images/heroImageMainPage.jpg';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';
import requests from '../../helpers/requests';
import RestaurantCard from '../../components/RestaurantCard';
import Dropdown from '../../components/Inputs/Dropdown';
import { City } from '@styled-icons/fa-solid/City';
import axios from 'axios';

interface Restaurant {
    [key: string]: string;
}

const MainPage = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [states, setStates] = useState([]);

    // DO DOKOŃCZENIA FILTROWANIE, TRZEBA W REJESTRACJI SKORZYSTAC Z KONKRETNEGO API!
    useEffect(() => {
        requests.getAllRestaurants()
        .then(response => {
            setRestaurants(response.data.data.restaurants);
        })
        axios.post('https://countriesnow.space/api/v0.1/countries/states', {
            "country": "poland",
        })
        .then(response => {
            setStates(response.data.data.states);
        })
    }, [])

    return(
        <Page heroImage={heroImageMainPage}>
            <h2>Search for your <span>favorite</span> restaurant!</h2>
            <SearchContainer>
                <SearchBar
                    name='search' 
                    textAlign='center'
                    margin='0rem'
                    type="text"
                    placeholder='Enter your address!'
                 >
                    <Search />
                </SearchBar>
                
                <Button>Search!</Button>
            </SearchContainer>
            <RestaurantsContainer>
                {restaurants.map((restaurant, index) => 
                    <RestaurantCard
                        key={index} 
                        title={restaurant.restaurantName} 
                        cuisine={restaurant.cuisine} 
                        id={restaurant._id} 
                    />
                )}
            </RestaurantsContainer>
        </Page>
    )
}

export default MainPage;