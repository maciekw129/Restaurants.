import Hero from '../Hero';
import { Container } from './styles';

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