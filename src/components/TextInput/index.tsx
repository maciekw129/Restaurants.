import {
    Container,
    StyledInput,
    IconWrapper,
} from './styles';

interface Props {
    children: React.ReactNode;
    placeholder: string;
    margin?: string;
    textAlign ?: string;
    className?: string;
    type: string;
}

const TextInput = ({children, className, placeholder, margin, textAlign, type}: Props) => {
    return(
        <Container margin={margin} className={className}>
            <IconWrapper>
                {children}
            </IconWrapper>
            <StyledInput
                placeholder={placeholder}
                textAlign={textAlign}
                type={type}
            />
        </Container>
    )
}

export default TextInput;