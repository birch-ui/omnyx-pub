import React, { useState } from 'react';

interface CheckBoxOption {
  id: string;
  label: string;
  value: string;
}

interface CheckBoxGroupProps {
  options: CheckBoxOption[];
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]); // 모든 항목 선택 해제
    } else {
      setSelectedOptions(options.map((option) => option.value)); // 모든 항목 선택
    }
  };

  const handleChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // 항목 선택 해제
        : [...prev, value] // 항목 선택 추가
    );
  };

  const isAllSelected = selectedOptions.length === options.length;

  return (
    <div>
      {/* 전체선택 */}
      <div className="check-group">
        <div className="check-item">
          <input
            type="checkbox"
            id="selectAll"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          <label htmlFor="selectAll">전체선택</label>
        </div>
      </div>

      {/* 개별 체크박스 */}
      {options.map((option) => (
        <div className="check-group" key={option.id}>
          <div className="check-item">
            <input
              type="checkbox"
              id={option.id}
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxGroup;
