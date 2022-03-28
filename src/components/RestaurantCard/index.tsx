import {
    Container,
    Image,
    Content,
} from './styles';
import showImage from '../../helpers/showImage';
import Text from '../../components/Text';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string,
    cuisine: string,
    id: string,
}

const RestaurantCard = ({title = 'No name', cuisine, id}: Props) => {
    
    const navigate = useNavigate();

    return(
        <Container onClick={() => navigate(`/restaurant/${id}`)}>
            <Image image={showImage(cuisine)} />
            <Content>
                <h2>{title}</h2>
                <Text fontSize="0.9rem">{cuisine} cuisine</Text>
            </Content>
        </Container>
    )
};

export default RestaurantCard;