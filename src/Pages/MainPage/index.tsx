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

interface Restaurant {
    [key: string]: string;
}

const MainPage = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        requests.getAllRestaurants()
        .then(response => {
            setRestaurants(response.data.data.restaurants);
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
                {
                    restaurants.map((restaurant, index) => {
                        return <RestaurantCard key={index} title={restaurant.restaurantName} cuisine={restaurant.cuisine} />
                    })
                }
            </RestaurantsContainer>
        </Page>
    )
}

export default MainPage;