// src/AllComponent.tsx
import React, { useState, forwardRef } from 'react';
import tempImage01 from './assets/images/temp/temp01.png';
import tempImage02 from './assets/images/temp/temp02.png';
import sellerLogoImage from './assets/images/seller-logo.png';
//콤퍼넌트 
import InputField from './components/input-field-component';
import CalendarComponent from './components/calendar-component'; 
import SelectField from './components/select-field-component'; 


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







  


  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const [selectedOption, setSelectedOption] = useState('1주일'); // 초기 선택값

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); // 선택된 값을 업데이트
  };

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // const handleFocus = (inputName: string) => setFocusedInput(inputName);
  const handleBlur = () => setFocusedInput(null);

  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };


  const [activeTabs, setActiveTabs] = useState({
    group1: '1주일', // 첫 번째 탭 그룹
    group2: '1개월', // 두 번째 탭 그룹
  });

  const handleTabClick = (group: string, tabName: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [group]: tabName, // 해당 그룹의 활성화된 탭 업데이트
    }));
  };

  return <div style={{position:'relative'}}>


    <div className='component'>
      <h3>입력필드 (콤포넌트)</h3>
      <form>
        <InputField
          type="text"
          id="username"
          name="username"
          placeholder="사용자 이름을 입력하세요"
          label="사용자 이름"
        />
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
        />
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="이메일 주소를 입력하세요"
          label="이메일"
        />
        <InputField
          type="cpf"
          id="cpf"
          name="cpf"
          placeholder="CNPJ 또는 CPF 입력하세요"
          label="법인번호(CNPJ) 또는 개인번호(CPF)"
          buttonLabel="중복확인"
        />
      </form>
    </div>

    <hr className='divider'></hr>

    <div className='component'>
      <h3>셀렉트 콤퍼넌트</h3>
      <div>
      <SelectField
        label="대분류 선택"
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
        label="중분류 선텍"
        value={selectValues.select2}
        onChange={handleSelectChange('select2')}
        options={[
          { value: '여성의류', label: '여성의류' },
          { value: '플러스 여성의류', label: '플러스 여성의류' },
          { value: '세계의류', label: '세계의류' },
          { value: '결혼식 & 이벤트', label: '결혼식 & 이벤트' },
          { value: '특수의류', label: '특수의류' }
        ]}
      />
      

    </div>
    </div>

    <hr className='divider'></hr>





    {/* 달력 컴포넌트*/}
    <div className='component'>
        <CalendarComponent
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date: Date | null) => setStartDate(date)}
          onEndDateChange={(date: Date | null) => setEndDate(date)}
        />
        <div style={{ marginTop: '20px', fontSize: '16px' }}>
          {startDate && endDate
            ? `선택된 기간: ${startDate.toLocaleDateString()} ~ ${endDate.toLocaleDateString()}`
            : '기간을 선택하세요'}
        </div>
      </div>


  



    <div className='component'>
      <h3>탭</h3>
      <div>
        {/* 첫 번째 탭 그룹 */}
        <div className='tabs' style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            className={activeTabs.group1 === '1주일' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group1', '1주일')}
          >
            1주일
          </button>
          <button
            className={activeTabs.group1 === '2주일' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group1', '2주일')}
          >
            2주일
          </button>
          <button
            className={activeTabs.group1 === '1개월' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group1', '1개월')}
          >
            1개월
          </button>
        </div>
        <div>
          <h3>첫 번째 그룹 선택된 탭: {activeTabs.group1}</h3>
        </div>

        {/* 두 번째 탭 그룹 */}
        <div className='tabs' style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            className={activeTabs.group2 === '1개월' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group2', '1개월')}
          >
            1개월
          </button>
          <button
            className={activeTabs.group2 === '2개월' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group2', '2개월')}
          >
            2개월
          </button>
          <button
            className={activeTabs.group2 === '3개월' ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick('group2', '3개월')}
          >
            3개월
          </button>
        </div>
        <div>
          <h3>두 번째 그룹 선택된 탭: {activeTabs.group2}</h3>
        </div>
      </div>


    </div>

    <div className='component'>
      <h3>상품이미지</h3>
      <div style={{ display: 'flex' }}>

        <div className='thumbnail'>
          <div className='thumbnail-content'>
            <img src={tempImage01} alt='Thumbnail' />
            <div className='promotion-bedge'>
              <span className='sale'>30%</span>
              <span className='hotdeal'>Hot Deal</span>
            </div>
            <div className='seller-logo'>
              <img src={sellerLogoImage} alt='SellerLogo' />
            </div>
            <button
              className={`btn-icon ${isLiked ? 'btn-like-on' : 'btn-like'}`}
              onClick={toggleLike}>찜하기</button>
          </div>
          <ul className='product-info'>
            <li className='product-name text-ellipsis'> Vestido de festa em renda buquê</li>
            <li className='product-price'><em className='unit'>R$</em> 59.000</li>
          </ul>
        </div>


        <div className='thumbnail'>
          <div className='thumbnail-content'>
            <img src={tempImage02} alt='Thumbnail' />
            <div className='promotion-bedge'>
              <span className='sale'>30%</span>
              <span className='hotdeal'>Hot Deal</span>
            </div>
            <div className='seller-logo'>
              <img src={sellerLogoImage} alt='SellerLogo' />
            </div>
            <button
              className={`btn-icon ${isLiked ? 'btn-like-on' : 'btn-like'}`}
              onClick={toggleLike}>찜하기</button>
          </div>
          <ul className='product-info'>
            <li className='product-name text-ellipsis'> Vestido de festa em renda buquê</li>
            <li className='product-price'><em className='unit'>R$</em> 59.000</li>
          </ul>
        </div>



      </div>
    </div>

    <div className='component'>
      <h3>1. Appbar</h3>
      <div className='retail'>
        <div className='appbar main' style={{ position: 'relative' }}>
          <div className='fl'>
            <button className='appbar-menu'>전체메뉴</button>
          </div>
          <div className='center'><button className='appbar-logo'>OMNYX</button></div>
          <div className='fr'>
            <button className='appbar-search'>검색</button>
            <button className='appbar-alarm'>알림</button>
            <button className='appbar-cart'>장바구니</button>
          </div>
        </div>
      </div>

      <div className='h10'></div>

      <div className='retail'>
        <div className='appbar main' style={{ position: 'relative' }}>
          <div className='fl'>
            <button className='appbar-menu'>전체메뉴</button>
          </div>
          <div className='center'><button className='appbar-logo'>OMNYX</button></div>
          <div className='fr'>
            <button className='appbar-search'>검색</button>
            <button className='appbar-alarm on'>알림</button>
            <button className='appbar-cart'>장바구니 <div className='badge'>9</div> </button>
          </div>
        </div>
      </div>
      <div className='h10'></div>
      <div className='wholesale'>
        <div className='appbar dashboard' style={{ position: 'relative' }}>
          {/* <button>전체메뉴</button>
            <button>로고</button>
            <button>검색</button> */}
        </div>
      </div>
      <div className='h10'></div>
      <div className='wholesale'>
        <div className='appbar' style={{ position: 'relative' }}>
          <div className='fl'>
            <button className='appbar-pre'>이전페이지</button>
          </div>
          <div className='fl'>
            <h2 className='title'>공급업체로 가입하기</h2>
          </div>
        </div>
      </div>
    </div>
    <div className='component'>
      <h3>2. Button</h3>
      <div className='btnlist'>
        <div className='retail'><button type='submit' className='btn-large'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-fill btn-large'>Button</button></div>
        <div className='wholesale'><button type='submit' className='btn-fill btn-large'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-disable btn-large'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-line btn-large'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-dark btn-large'>Button</button></div>
      </div>
      <div className='btnlist'>
        <div className='retail'><button type='submit' className='btn-medium'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-fill btn-medium'>Button</button></div>
        <div className='wholesale'><button type='submit' className='btn-fill btn-medium'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-disable btn-medium'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-line btn-medium'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-dark btn-medium'>Button</button></div>
      </div>
      <div className='btnlist'>
        <div className='retail'><button type='submit' className='btn-small'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-fill btn-small'>Button</button></div>
        <div className='wholesale'><button type='submit' className='btn-fill btn-small'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-disable btn-small'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-line btn-small'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-dark btn-small'>Button</button></div>
      </div>
      <div className='btnlist'>
        <div className='retail'><button type='submit' className='btn-xsmall'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-fill btn-xsmall'>Button</button></div>
        <div className='wholesale'><button type='submit' className='btn-fill btn-xsmall'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-disable btn-xsmall'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-line btn-xsmall'>Button</button></div>
        <div className='retail'><button type='submit' className='btn-dark btn-xsmall'>Button</button></div>
      </div>
    </div>

  
    <div className='component'>
      <h3>Radio Group </h3>
      <div className="radio-group">
        <div className="radio-item">
          <input
            type="radio"
            id="retailLogin"
            name="loginType"
            value="retail"
          />
          <label htmlFor="retailLogin">소매로 로그인</label>
        </div>
        <div className="radio-item">
          <input
            type="radio"
            id="wholesaleLogin"
            name="loginType"
            value="wholesale"
          />
          <label htmlFor="wholesaleLogin">도매로 로그인</label>
        </div>
      </div>
    </div>


    <div className='component'>
      <h3>Checkbox Group</h3>
      <div className="check-group">
        <div className="check-item">
          <input
            type="checkbox"
            id="stayLoggedIn"
            name="stayLoggedIn"
            value="yes"
          />
          <label htmlFor="stayLoggedIn">로그인 상태 유지</label>
        </div>
      </div>

    </div>




    <div className='component'></div>


    <div className='component'></div>





  </div>;
};

export default AllComponent;
