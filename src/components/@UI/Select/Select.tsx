import React, {FC} from 'react';

interface IOptions {
    value: string
    name: string
}

interface SelectProps {
    options: IOptions[]
    defaultValue: string
    onChange: (s: string) => void
    value: string

}

const Select:FC<SelectProps> = ({options, defaultValue, onChange, value}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;