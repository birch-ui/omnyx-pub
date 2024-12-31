// src/AllComponent.tsx
import React, { useState } from 'react';

import tempImage01 from './assets/images/temp/temp01.png';
import tempImage02 from './assets/images/temp/temp02.png';
import sellerLogo from './assets/images/seller-logo.png';

//콤퍼넌트 
import InputField from './components/input-field-component';
import CalendarComponent from './components/calendar-component';
import SelectField from './components/select-field-component';
import TextAreaField from './components/textarea-field-component';
import ButtonGroup from './components/button-group-component';
import RadioGroup from './components/radio-group-component';
import CheckBoxGroup from './components/checkbox-group-component';
import TabsComponent from './components/tabs-component';
import Thumbnail from './components/thumbnail-component';
import Footer from './components/footer-component';
import Appbar from './components/appbar-component';

const AllComponent = () => {

  // 셀렉트 콤퍼넌트
  const [selectValues, setSelectValues] = useState({
    select1: '1주일',
    select2: '1개월',
  });

  const handleSelectChange = (key: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValues((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  // 텍스트에어이어 콤퍼넌트
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };


  // 라디오 그룹 콤퍼넌트
  const [selectedLoginType, setSelectedLoginType] = useState('retail');

  const handleLoginTypeChange = (value: string) => {
    setSelectedLoginType(value);
  };

  // 체크박스 콤퍼넌트
  const options = [
    { id: 'item1', label: '항목1', value: 'item1' },
    { id: 'item2', label: '항목2', value: 'item2' },
    { id: 'item3', label: '항목3', value: 'item3' },
  ];

  // 탭
  const tabGroups = {
    group1: ['주문목록', '주문취소'],
    group2: ['1개월', '2개월', '3개월', '6개월'],
    group3: ['1주일', '1개월', '2개월'],
  };
  const [activeTabs, setActiveTabs] = useState({
    group1: '1주일', // 첫 번째 탭 그룹
    group2: '1개월', // 두 번째 탭 그룹
  });


  // 상품 데이터 (상품썸네일 리스트)
  const [products, setProducts] = useState([
    {
      id: 1,
      tempImage: tempImage01,
      sellerLogo: sellerLogo,
      productName: 'Vestido de festa em renda buquê',
      productPrice: 59000,
      discountRate: 30,
      isHotDeal: true,
    },
    {
      id: 2,
      tempImage: tempImage02,
      sellerLogo: sellerLogo,
      productName: 'Calça jeans skinny',
      productPrice: 45000,
      discountRate: 20,
      isHotDeal: false,
    },
  ]);

  const [likedProducts, setLikedProducts] = useState<{ [id: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  //캘린더
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);



  return <div style={{ position: 'relative' }}>

  <div className='component'>
    <h3>입력필드 (콤포넌트)</h3>
    <form>
      <InputField
        type='text'
        id='username'
        name='username'
        placeholder='사용자 이름을 입력하세요'
        label='사용자 이름'
      />
      <InputField
        type='password'
        id='password'
        name='password'
        placeholder='비밀번호를 입력하세요'
        label='비밀번호'
      />
      <InputField
        type='email'
        id='email'
        name='email'
        placeholder='이메일 주소를 입력하세요'
        label='이메일'
      />
      <InputField
        type='cpf'
        id='cpf'
        name='cpf'
        placeholder='CNPJ 또는 CPF 입력하세요'
        label='법인번호(CNPJ) 또는 개인번호(CPF)'
        buttonLabel='중복확인'
      />
      <InputField
        type="tel"
        id="phone"
        name="phone"
        placeholder="010-1234-5678"
        label="핸드폰번호"
      />
    </form>
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>셀렉트 콤퍼넌트</h3>
    <SelectField
      label='대분류 선택'
      value={selectValues.select1}
      onChange={handleSelectChange('select1')}
      options={[
        { value: '여성', label: '여성' },
        { value: '남성', label: '남성' },
        { value: '스포츠 & 야외활동', label: '스포츠 & 야외활동' },
        { value: '속옷 & 잠옷', label: '속옷 & 잠옷' },
      ]}
    />
    <SelectField
      label='중분류 선택'
      value={selectValues.select2}
      onChange={handleSelectChange('select2')}
      options={[
        { value: '여성의류', label: '여성의류' },
        { value: '플러스 여성의류', label: '플러스 여성의류' },
        { value: '세계의류', label: '세계의류' },
        { value: '결혼식 & 이벤트', label: '결혼식 & 이벤트' },
        { value: '특수의류', label: '특수의류' },
      ]}
    />
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>텍스트에어리어 콤퍼넌트</h3>
    <div>
      <TextAreaField
        label='회사소개'
        value={description}
        onChange={handleDescriptionChange}
        placeholder='회사소개를 입력하세요'
        rows={5}
      />
    </div>
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>버튼 콤퍼넌트</h3>
    <ButtonGroup
      buttons={[
        { label: 'Button', size: 'btn-large', style: '', type: 'retail' },
        { label: 'Button', size: 'btn-large', style: 'btn-fill', type: 'retail' },
        { label: 'Button', size: 'btn-large', style: 'btn-fill', type: 'wholesale' },
        { label: 'Button', size: 'btn-large', style: 'btn-disable', type: 'retail' },
        { label: 'Button', size: 'btn-large', style: 'btn-line', type: 'retail' },
        { label: 'Button', size: 'btn-large', style: 'btn-dark', type: 'retail' },
      ]}
    />
    {/* 추가 버튼 그룹 */}
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>Radio Group</h3>
    <RadioGroup
      name='loginType'
      options={[
        { id: 'retailLogin', label: '소매로 로그인', value: 'retail' },
        { id: 'wholesaleLogin', label: '도매로 로그인', value: 'wholesale' },
      ]}
      selectedValue={selectedLoginType}
      onChange={handleLoginTypeChange}
    />
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>Checkbox Group</h3>
    <CheckBoxGroup options={options} />
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>탭</h3>
    <TabsComponent groups={{ group1: tabGroups.group1 }} styleType='line' />
    <TabsComponent groups={{ group2: tabGroups.group2 }} styleType='button' />
    <TabsComponent groups={{ group3: tabGroups.group3 }} styleType='round' />
  </div>

  <hr className='divider' />

    <div className='component'>
      <h3>Appbar 콤퍼넌트</h3>
      {/* 소매 Appbar */}
      <Appbar
        type="retail"
        showMenuButton={true}
        showLogo={true}
        showSearchButton={true}
        showAlarmButton={true}
        showCartButton={true}
        cartCount={99}
        onMenuClick={() => console.log("전체메뉴 클릭됨")}
        onSearchClick={() => console.log("검색 클릭됨")}
        onAlarmClick={() => console.log("알람 클릭됨")}
        onCartClick={() => console.log("장바구니 클릭됨")}
      />
      <div className="h10"></div>

      {/* 도매 대시보드 Appbar */}
      <Appbar
        type="wholesale"
        leftTitle="'판매자명' 대시보드"
        showAlarmButton={true}
        onAlarmClick={() => console.log("알람 클릭됨")}
      />

      <div className="h10"></div>

      {/* 도매 가입 Appbar */}
      <Appbar
        type="wholesale"
        leftTitle="판매자로 가입하기"
        onBackClick={() => console.log("이전페이지 클릭됨")}
      />
    </div>

  <div className='component'>
      <h3>Footer Menu 콤퍼넌트</h3>
      <Footer />
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>상품이미지</h3>
    <div className='product-list'>
      {products.map((product) => (
        <Thumbnail
          key={product.id}
          tempImage={product.tempImage}
          sellerLogo={product.sellerLogo}
          isLiked={!!likedProducts[product.id]}
          toggleLike={() => toggleLike(product.id)}
          productName={product.productName}
          productPrice={product.productPrice}
          discountRate={product.discountRate}
          isHotDeal={product.isHotDeal}
        />
      ))}
    </div>
  </div>

  <hr className='divider' />

  <div className='component'>
    <h3>기간 선택</h3>
    <CalendarComponent
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={(date: Date | null) => setStartDate(date)}
      onEndDateChange={(date: Date | null) => setEndDate(date)}
    />
  </div>

</div>

};

export default AllComponent;
