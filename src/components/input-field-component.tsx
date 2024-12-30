import React, { useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'password' | 'email' | 'cpf'; // 'cpf' 타입 추가
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  buttonLabel?: string; // 버튼 레이블
  onButtonClick?: () => void; // 버튼 클릭 핸들러
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  placeholder,
  label,
  buttonLabel,
  onButtonClick,
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
    if (type === 'email') validateEmail(inputValue);
  };
  const handleClear = () => setInputValue('');
  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className='form-group'>
      {label && <label className='form-title' htmlFor={id}>{label}</label>}
      <div
        className={`input-container ${focused ? 'focused' : ''} ${type === 'email' && !isValid ? 'invalid' : ''
          }`}
      >
        <input
          type={isPasswordVisible && type === 'password' ? 'text' : type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
         style={{ flex: 1 }} // 입력 필드가 버튼과 함께 사용될 때 넓이 설정
        />
        {inputValue && type !== 'cpf' && (
          <button
            type='button'
            className="btn-clear"
            aria-label="입력 내용 지우기"
            onClick={handleClear}
          >
            지우기
          </button>
        )}
        {type === 'password' && (
          <button
            type='button'
            className={isPasswordVisible ? 'btn-eye-on' : 'btn-eye-off'}
            onClick={togglePasswordVisibility}
            aria-label="비밀번호 표시 토글"
          >
            {isPasswordVisible ? '숨기기' : '보기'}
          </button>
        )}
        {type === 'cpf' && (
          <button
            type='button'
            className={`btn-small ${inputValue ? '' : 'btn-disable'}`}
            onClick={onButtonClick}
            disabled={!inputValue} // 입력 값이 없으면 버튼 비활성화
          >
            {buttonLabel}
          </button>
        )}
      </div>
      {type === 'email' && !isValid && (
        <span className="error-message">유효한 이메일 주소를 입력하세요.</span>
      )}
    </div>
  );
};

export default InputField;
