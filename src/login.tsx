import React, { useState } from 'react';

import RadioGroup from './components/radio-group-component';
import InputField from './components/input-field-component';
import ButtonGroup from './components/button-group-component';
import CheckBoxGroup from './components/checkbox-group-component';

const Login = () => {
  // 상태 관리
  const [loginType, setLoginType] = useState<string>('retail'); // 로그인 타입

  // 라이오그룹 콤퍼넌트
  const [selectedLoginType, setSelectedLoginType] = useState('retail');

  const handleLoginTypeChange = (value: string) => {
    setSelectedLoginType(value);
  };

  // 체크박스 콤퍼넌트
  const options = [
    { id: 'item1', label: '로그인 상태 유지', value: 'item1' },
  ];

  return (
    <div className='container'>
      <div className="modal-container">
        <div className={`modal ${loginType}`}>
          <button className="btn-close-modal">
            닫기
          </button>
          <div className='login'>
            <h1 className="title">Login</h1>
            {/* 로그인 타입 선택 */}
            <RadioGroup
              name='loginType'
              options={[
                { id: 'retailLogin', label: '구매자로 로그인', value: 'retail' },
                { id: 'wholesaleLogin', label: '판매자로 로그인', value: 'wholesale' },
              ]}
              selectedValue={selectedLoginType}
              onChange={handleLoginTypeChange}
            />
            {/* 입력필드 */}
            <form>
              <InputField
                type='text'
                id='username'
                name='username'
                placeholder='이메일주소를 입력하세요'
              />
              <InputField
                type='password'
                id='password'
                name='password'
                placeholder='비밀번호를 입력하세요'
              />
            </form>
            <CheckBoxGroup options={options} />
            <ButtonGroup
              buttons={[
                { label: '로그인', size: 'btn-large', style: 'btn-fill', type: 'retail' },
              ]}
            />
            <div className="help-links">
              <button className='btn-saech-id'>아이디 찾기</button>
              <button className='btn-saech-pw'>비밀번호 찾기</button>
            </div>
            <div className="register-prompt">
              구매자 계정이 없으신가요?
            </div>
            {/* 구매자가입 버튼 */}
            <ButtonGroup
              buttons={[
                { label: '구매자로 가입', size: 'btn-large', style: 'btn-dark', type: 'retail' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
