import React, { useState } from 'react';

// 컴포넌트 임포트
import InputField from './components/input-field-component';
import TextAreaField from './components/textarea-field-component';
import Appbar from './components/appbar-component';
import CheckBoxGroup from './components/checkbox-group-component';
import ButtonGroup from './components/button-group-component';


const SubscriptionRequest= () => {

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
    {/* 상단 Appbar */}
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
        <h2 className='register-prompt'>구독요청 중 입니다</h2>

        {/* 회원가입 폼 */}
        <form>
          <InputField
            type="cpf"
            id="cpf"
            name="cpf"
            placeholder="12.345.678/0001-99"
            label="법인번호(CNPJ) 또는 개인번호(CPF)"
            buttonLabel="중복확인"
            disabled={true}
          />
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="Birch Holdings"
            label="판매자명"
            disabled={true}
          />
          <InputField
            type="email"
            id="email"
            name="email"
            placeholder="birch@birch.holdings"
            label="이메일 주소"
            disabled={true}
          />
          <InputField
            type="text"
            id="address"
            name="address"
            placeholder="Rua das Flores, 123, Apt 45, Vila Nova,São Paulo - SP, CEP 01010-123, Brasil"
            label="주소"
            disabled={true}
          />
          <InputField
            type="tel"
            id="phone"
            name="phone"
            placeholder="010-1234-5678"
            label="핸드폰번호"
            disabled={true}
          />
          <TextAreaField
            label="회사소개"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Este é um shopping para mulheres na faixa dos 30 e 40 anos, onde você encontra primeiro a moda da moda."
            rows={5}
            disabled={true} // 비활성화
          />
          <InputField
            type="number"
            id="userCount"
            name="userCount"
            placeholder="사용자 수를 입력하세요"
            label="사용자수"
            disabled={true}
          />
         
        </form>

        <div className='btn-area-relative'>
          <ButtonGroup
            buttons={[
              { label: '구독 재요청', size: 'btn-large', style: 'btn-fill', type: 'retail' },
            ]}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default SubscriptionRequest;
