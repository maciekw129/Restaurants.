import {
    Container,
    Image,
    Content,
} from './styles';
import showImage from '../../helpers/showImage';
import Text from '../../components/Text';

interface Props {
    title: string,
    cuisine: string,
}

const RestaurantCard = ({title = 'No name', cuisine}: Props) => {
    return(
        <Container>
            <Image image={showImage(cuisine)} />
            <Content>
                <h2>{title}</h2>
                <Text fontSize="0.9rem">{cuisine} cuisine</Text>
            </Content>
        </Container>
    )
};

export default RestaurantCard;