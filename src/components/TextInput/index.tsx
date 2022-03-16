import {
    Container,
    StyledInput,
    IconWrapper,
} from './styles';

interface Props {
    children: React.ReactNode;
    margin?: string;
    textAlign?: string;
    type: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    value?: string;
    placeholder: string;
}

const TextInput = ({children, name, margin, textAlign, type, handleChange, value, placeholder}: Props) => {
    return(
        <Container margin={margin}>
            <IconWrapper>
                {children}
            </IconWrapper>
            <StyledInput
                placeholder={placeholder}
                textAlign={textAlign}
                type={type}
                onChange={handleChange}
                name={name}
                value={value}
            />
        </Container>
    )
}

export default TextInput;