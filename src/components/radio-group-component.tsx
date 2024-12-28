import React, { ChangeEvent } from 'react';

interface RadioOption {
  id: string;
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void; // 값을 직접 전달
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, selectedValue, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // 이벤트에서 값을 추출하여 전달
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <div className="radio-item" key={option.id}>
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange} // 수정된 핸들러
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
