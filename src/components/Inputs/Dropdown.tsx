import {
    Container,
    IconWrapper,
    List
} from './styles';

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    data: Array<string>;
    children: React.ReactNode;
}

const Dropdown = ({handleChange, data, children}: Props) => {
    return(
        <Container>
            <IconWrapper>
                {children}
            </IconWrapper>
            <List name='cuisine' onChange={handleChange}>
                <option value='' defaultValue='Cuisine' placeholder='Cuisine' hidden>Cuisine</option>
                {data.map((cuisine, index) => {
                    return <option value={cuisine} key={index}>{cuisine}</option>
                })}
            </List>
        </Container>
    )
}

export default Dropdown;