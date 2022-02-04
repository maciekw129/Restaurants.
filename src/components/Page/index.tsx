import {
    Container,
} from './styles';
import Hero from '../Hero';

interface Props {
    heroImage: string;
    children: React.ReactNode;
}

const Page = ({heroImage, children}: Props) => {
    return(
        <Container>
            <Hero heroImage={heroImage} />
            {children}
        </Container>
    )
};

export default Page;