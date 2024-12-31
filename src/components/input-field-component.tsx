import React, { useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'password' | 'email' | 'cpf' | 'tel' | 'number'; // 'number' 타입 추가
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  buttonLabel?: string; // 버튼 레이블
  onButtonClick?: () => void; // 버튼 클릭 핸들러
  showIncrementDecrement?: boolean; // 증가/감소 버튼 표시 여부
  step?: number; // 증가/감소 단위 (기본값: 1)
  min?: number; // 최소값
  max?: number; // 최대값
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
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // 핸들러 함수
  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
    validateInput(inputValue);
  };
  const handleClear = () => setInputValue('');
  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const handleIncrement = () => {
    const value = parseFloat(inputValue) || 0;
    const newValue = value + step;
    if (max !== undefined && newValue > max) return;
    setInputValue(newValue.toString());
  };

  const handleDecrement = () => {
    const value = parseFloat(inputValue) || 0;
    const newValue = value - step;
    if (min !== undefined && newValue < min) return;
    setInputValue(newValue.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (type === 'number') {
      const numericValue = value.replace(/[^0-9.]/g, ''); // 숫자만 허용
      setInputValue(numericValue);
    } else {
      setInputValue(value);
    }
  };

  // 유효성 검사 함수
  const validateInput = (value: string) => {
    let valid = true;

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailRegex.test(value);
    }

    if (type === 'tel') {
      const telRegex = /^010-\d{3,4}-\d{4}$/; // 한국 전화번호 형식
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
      const cpfRegex = /^\d{11}$/; // 단순한 CPF 형식 (11자리 숫자)
      valid = cpfRegex.test(value);
    }

    setIsValid(valid);
  };

  // 에러 메시지 매핑
  const errorMessages: { [key: string]: string } = {
    email: '* 유효한 이메일 주소를 입력하세요',
    tel: '* 유효한 전화번호를 입력하세요 (010-XXXX-XXXX)',
    number: `* 유효한 숫자를 입력하세요 ${
      min !== undefined && max !== undefined ? `(범위: ${min} - ${max})` : ''
    }`,
    cpf: '* 유효한 CPF를 입력하세요',
  };

  return (
    <div className="form-group">
      {/* 레이블 */}
      {label && <label className="form-title" htmlFor={id}>{label}</label>}

      <div
        className={`input-container ${focused ? 'focused' : ''} ${
          !isValid ? 'invalid' : ''
        }`}
      >
        {/* 입력 필드 */}
        <input
          type={isPasswordVisible && type === 'password' ? 'text' : type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ flex: 1 }}
        />

        {/* 증가/감소 버튼 */}
        {showIncrementDecrement && type === 'number' && (
          <div className="increment-decrement-buttons">
            <button type="button" onClick={handleIncrement}>
              ▲
            </button>
            <button type="button" onClick={handleDecrement}>
              ▼
            </button>
          </div>
        )}

        {/* 지우기 버튼 */}
        {inputValue && type !== 'cpf' && (
          <button
            type="button"
            className="btn-clear"
            aria-label="입력 내용 지우기"
            onClick={handleClear}
          >
            지우기
          </button>
        )}

        {/* 비밀번호 보기 토글 버튼 */}
        {type === 'password' && (
          <button
            type="button"
            className={isPasswordVisible ? 'btn-eye-on' : 'btn-eye-off'}
            onClick={togglePasswordVisibility}
            aria-label="비밀번호 표시 토글"
          >
            {isPasswordVisible ? '숨기기' : '보기'}
          </button>
        )}
      </div>

      {/* 에러 메시지 */}
      {!isValid && type && errorMessages[type] && (
        <span className="error-message">{errorMessages[type]}</span>
      )}
    </div>
  );
};

export default InputField;
