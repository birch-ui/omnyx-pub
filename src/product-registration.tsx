import React, { useState } from 'react';

import Appbar from './components/appbar-component';
import Footer from './components/footer-component';
import InputField from './components/input-field-component';
import ButtonGroup from './components/button-group-component';
import TextAreaField from './components/textarea-field-component';

const ProductRegistration = () => {

  // 텍스트에어이어 콤퍼넌트
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <div className='container'>
      <div className='navigation-bar'>
        <Appbar
          type="wholesale"
          leftTitle="상품등룩"
          onBackClick={() => console.log("이전페이지 클릭됨")}
        />
      </div>

      <div className='content-wrap'>

        <div className='section'>
          <ButtonGroup
            buttons={[
              { label: '카테고리 선택', size: 'btn-medium', style: 'btn-line', type: 'retail' },
            ]}
          />
          <div>
            선택한 카테고리 : 여자 상의 블라우스
          </div>
        </div>

        <hr className='divider' />
        <div className='section'>
          <form>
            <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='상품명'
            />
            <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='상품코드'
            />
            <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='NCM 코드'
            />
            <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='판매가'
            />
            <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='원가'
            />
            <TextAreaField
              label="상품 소재"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="첫 번째 텍스트 입력"
            />
            <TextAreaField
              label="상품 정보"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="두 번째 텍스트 입력"
            />
             <InputField
              type='text'
              id='username'
              name='username'
              placeholder='사용자 이름을 입력하세요'
              label='검색어'
            />
          </form>
        </div>
        <hr className='divider' />
        <div className='section'></div>
        <hr className='divider' />
        <div className='section'></div>
      </div>
  
      <div className='tab-bar'>
         <Footer /> 
      </div>

    </div>

  );
};

export default ProductRegistration;
