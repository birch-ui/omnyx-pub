import React, { useState } from 'react';

// 컴포넌트 임포트
import InputField from './components/input-field-component';
import TextAreaField from './components/textarea-field-component';
import Appbar from './components/appbar-component';
import CheckBoxGroup from './components/checkbox-group-component';
import ButtonGroup from './components/button-group-component';

const SignUp = () => {
  // 상태 관리
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  // 체크박스 콤퍼넌트
  const options = [
    { id: '1', label: '약관 동의 [더보기]', value: 'option1' },
    { id: '2', label: '구독 안내 [더보기]', value: 'option2' },
  ];

  return (
      <div className='container wholesale'>
        <div className='navigation-bar'>
          <Appbar
            type="wholesale"
            leftTitle="판매자로 가입하기"
            onBackClick={() => console.log("이전페이지 클릭됨")}
          />
        </div>

        <div className='content-wrap align-center'>
          <div className='sign-up-set'>
            {/* 등록 설명 */}
            <h2 className='register-prompt'>Omnyx에서 판매자로 가입하면</h2>
            <p className='register-prompt-info'>
              디지털화된 마켓플레이스 경험, 새로운 트렌드에 대한 쉬운 접근,
              신뢰할 수 있는 공급업체의 광범위한 네트워크 활용을 할 수 있습니다.
              공업업체로 가입하면 브랜드를 홍보하고 역동적인 패션 시장에서
              앞서 나갈 수 있는 귀중한 기회가 열립니다.
            </p>

            {/* 회원가입 폼 */}
            <form>
              <InputField
                type="cpf"
                id="cpf"
                name="cpf"
                placeholder="CNPJ 또는 CPF 입력하세요"
                label="법인번호(CNPJ) 또는 개인번호(CPF)"
                buttonLabel="중복확인"
              />
              <InputField
                type="text"
                id="username"
                name="username"
                placeholder="판매업체명을 입력하세요"
                label="판매자명"
              />
              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="이메일 주소를 입력하세요"
                label="이메일 주소"
              />
              <InputField
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                label="비밀번호"
              />
              <InputField
                type="text"
                id="address"
                name="address"
                placeholder="주소를 입력하세요"
                label="주소"
              />
              <InputField
                type="tel"
                id="phone"
                name="phone"
                placeholder="010-1234-5678"
                label="핸드폰번호"
              />
              <TextAreaField
                label="회사소개"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="회사소개를 입력하세요"
                rows={5}
              />
              <InputField
                type="number"
                id="userCount"
                name="userCount"
                placeholder="사용자 수를 입력하세요"
                label="사용자수"
              />
              <CheckBoxGroup options={options} showSelectAll={false} />
            </form>

            <div className='btn-area-relative'>
              <ButtonGroup
                buttons={[
                  { label: '회원가입/구독요청', size: 'btn-large', style: 'btn-fill', type: 'retail' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignUp;
