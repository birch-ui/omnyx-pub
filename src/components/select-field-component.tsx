import React from 'react';

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label className="form-title">{label}</label>
      <div className="input-container">
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
