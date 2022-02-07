import {
    Container,
    StyledInput,
    IconWrapper,
} from './styles';

interface Props {
    children: React.ReactNode;
    placeholder: string;
    width: string;
}

const TextInput = ({children, placeholder, width}: Props) => {
    return(
        <Container>
            <IconWrapper>
                {children}
            </IconWrapper>
            <StyledInput
                placeholder={placeholder}
                width={width}
            />
        </Container>
    )
}

export default TextInput;