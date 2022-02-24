import { useState } from 'react';

interface valuesTypes {
    [key: string]: string;
}

const useForm = (initialValues: valuesTypes) => {
    const [values, setValues] = useState<valuesTypes>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setValues({ ...values, [name]:value });
    };
    
    const resetValues = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetValues };
}

export default useForm;