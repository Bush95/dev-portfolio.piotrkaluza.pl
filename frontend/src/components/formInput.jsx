function FormInput(props) {
    const { id, nodeType, type, name, label, placeholder, onFieldChange, ...inputProps } = props;

    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            {nodeType === 'input' &&
                <input type={type} name={name} placeholder={placeholder} onChange={onFieldChange} {...inputProps} />
            }
            {nodeType === 'textarea' &&
                <textarea name={name} placeholder={placeholder} onChange={onFieldChange} {...inputProps} />
            }
            <div className="form-input__border"></div>
        </div>
    )
}

export default FormInput;