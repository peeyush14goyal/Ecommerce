import React from 'react';
import { FieldRenderProps } from 'react-final-form';
interface IProps
extends FieldRenderProps<string, HTMLElement>{

}

const SelectInput: React.FC<IProps> = ({
    input,
    width,
    options,
    placeholder,
    meta: { touched, error }
  }) => {
    return (
        <div>
            <select
                 value={input.value}
                 onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>input.onChange(e.currentTarget.value)}
                 placeholder={placeholder}

            >
                
            </select>
        </div>
    )
}

export default SelectInput;