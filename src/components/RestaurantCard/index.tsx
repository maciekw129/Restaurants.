import {
    Container,
    Image,
} from './styles';
import showImage from '../../helpers/showImage';

interface Props {
    title: string,
    cuisine: string,
}

const RestaurantCard = ({title, cuisine}: Props) => {
    return(
        <Container>
            <Image src={showImage(cuisine)} />
            <p>{title}</p>
        </Container>
    )
};

export default RestaurantCard;