import {
    Container,
    StyledInput,
    IconWrapper,
} from './styles';

interface Props {
    children: React.ReactNode;
    margin?: string;
    textAlign ?: string;
    className?: string;
    type: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
}

const TextInput = ({children, className, name, margin, textAlign, type, handleChange}: Props) => {

    

    return(
        <Container margin={margin} className={className}>
            <IconWrapper>
                {children}
            </IconWrapper>
            <StyledInput
                placeholder={name}
                textAlign={textAlign}
                type={type}
                onChange={handleChange}
                name={name}
            />
        </Container>
    )
}

export default TextInput;