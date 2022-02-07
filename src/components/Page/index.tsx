import Hero from '../Hero';

interface Props {
    heroImage: string;
    children: React.ReactNode;
}

const Page = ({heroImage, children}: Props) => {
    return(
        <div>
            <Hero heroImage={heroImage} />
            {children}
        </div>
    )
};

export default Page;