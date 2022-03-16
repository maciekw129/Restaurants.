import { RegisterButton } from '../../components/Button';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';

const ChooseType = () => {
    return(
        <>
            <Text bold>Who are you?</Text>
            <Link to='/register/register-restaurant'><RegisterButton>I'm a restaurant owner</RegisterButton></Link>
            <Link to='/register/register-guest'><RegisterButton>I'm a restaurant guest</RegisterButton></Link>  
        </>
    )
};

export default ChooseType;