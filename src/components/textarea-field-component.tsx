import React, { useState } from 'react';

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
  disabled?: boolean; // disabled 속성 추가
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false, // 기본값 추가
}) => {
  const [focused, setFocused] = useState(false); // 포커스 상태 관리

  return (
    <div className={`form-group ${disabled ? 'disabled' : ''}`}>
      <label className="form-title">{label}</label>
      <textarea
        className={`text-area ${focused ? 'focused' : ''} ${
          disabled ? 'disabled' : ''
        }`} // disabled 클래스 추가
        value={value}
        onChange={onChange}
        onFocus={() => !disabled && setFocused(true)} // disabled일 경우 포커스 무시
        onBlur={() => !disabled && setFocused(false)} // disabled일 경우 블러 무시
        placeholder={placeholder}
        rows={rows}
        disabled={disabled} // disabled 속성 적용
      ></textarea>
    </div>
  );
};

export default TextAreaField;
