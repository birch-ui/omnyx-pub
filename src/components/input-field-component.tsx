import React, { useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'password' | 'email' | 'cpf' | 'tel' | 'number';
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showIncrementDecrement?: boolean;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean; // disabled 속성 추가
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  placeholder,
  label,
  buttonLabel,
  onButtonClick,
  showIncrementDecrement = false,
  step = 1,
  min,
  max,
  disabled = false, // 기본값 추가
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => !disabled && setFocused(true);
  const handleBlur = () => {
    if (!disabled) {
      setFocused(false);
      validateInput(inputValue);
    }
  };

  const handleClear = () => !disabled && setInputValue('');
  const togglePasswordVisibility = () =>
    !disabled && setPasswordVisible((prev) => !prev);

  const handleIncrement = () => {
    if (disabled) return;
    const value = parseFloat(inputValue) || 0;
    const newValue = value + step;
    if (max !== undefined && newValue > max) return;
    setInputValue(newValue.toString());
  };

  const handleDecrement = () => {
    if (disabled) return;
    const value = parseFloat(inputValue) || 0;
    const newValue = value - step;
    if (min !== undefined && newValue < min) return;
    setInputValue(newValue.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const value = e.target.value;
    if (type === 'number') {
      const numericValue = value.replace(/[^0-9.]/g, '');
      setInputValue(numericValue);
    } else {
      setInputValue(value);
    }
  };

  const validateInput = (value: string) => {
    if (disabled) return;
    let valid = true;

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailRegex.test(value);
    }

    if (type === 'tel') {
      const telRegex = /^010-\d{3,4}-\d{4}$/;
      valid = telRegex.test(value);
    }

    if (type === 'number') {
      const numericValue = parseFloat(value);
      valid =
        !isNaN(numericValue) &&
        (min === undefined || numericValue >= min) &&
        (max === undefined || numericValue <= max);
    }

    if (type === 'cpf') {
      const cpfRegex = /^\d{11}$/;
      valid = cpfRegex.test(value);
    }

    setIsValid(valid);
  };

  const errorMessages: { [key: string]: string } = {
    email: '* 유효한 이메일 주소를 입력하세요',
    tel: '* 유효한 전화번호를 입력하세요 (010-XXXX-XXXX)',
    number: `* 유효한 숫자를 입력하세요 ${
      min !== undefined && max !== undefined ? `(범위: ${min} - ${max})` : ''
    }`,
    cpf: '* 유효한 CPF를 입력하세요',
  };

  return (
    <div className={`form-group ${disabled ? 'disable' : ''}`}>
      {label && <label className="form-title" htmlFor={id}>{label}</label>}

      <div
        className={`input-container ${focused ? 'focused' : ''} 
        }`}
      >
        <input
          type={isPasswordVisible && type === 'password' ? 'text' : type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled} // disabled 적용
          style={{ flex: 1 }}
        />

        {showIncrementDecrement && type === 'number' && (
          <div className="increment-decrement-buttons">
            <button type="button" onClick={handleIncrement} disabled={disabled}>
              ▲
            </button>
            <button type="button" onClick={handleDecrement} disabled={disabled}>
              ▼
            </button>
          </div>
        )}

        {inputValue && type !== 'cpf' && (
          <button
            type="button"
            className="btn-clear"
            aria-label="입력 내용 지우기"
            onClick={handleClear}
            disabled={disabled} // disabled 적용
          >
            지우기
          </button>
        )}

        {type === 'password' && (
          <button
            type="button"
            className={isPasswordVisible ? 'btn-eye-on' : 'btn-eye-off'}
            onClick={togglePasswordVisibility}
            aria-label="비밀번호 표시 토글"
            disabled={disabled} // disabled 적용
          >
            {isPasswordVisible ? '숨기기' : '보기'}
          </button>
        )}
      </div>

      {!isValid && type && errorMessages[type] && (
        <span className="error-message">{errorMessages[type]}</span>
      )}
    </div>
  );
};

export default InputField;
