import { useState } from 'react';

const useForm = () => {
    const [values, setValues] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target as HTMLInputElement;
        setValues({ ...values, [name]:value });
    }

    return {values, handleChange};
}

export default useForm;