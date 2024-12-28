import React, { useState } from 'react';

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}) => {
  const [focused, setFocused] = useState(false); // 포커스 상태 관리

  return (
    <div className="form-group">
      <label className="form-title">{label}</label>
      <textarea
        className={`text-area ${focused ? 'focused' : ''}`} // 포커스 상태에 따라 클래스 추가
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)} // 포커스 상태로 전환
        onBlur={() => setFocused(false)} // 포커스 해제 상태로 전환
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
