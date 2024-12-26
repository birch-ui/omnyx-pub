// src/AllComponent.tsx
import React, { useState } from 'react';


const AllComponent = () => {

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (inputName: string) => setFocusedInput(inputName);
  const handleBlur = () => setFocusedInput(null);
  return <div>

    <div className='component'>
      <h3>1. Appbar</h3>

      <div className='h10'></div>

      <div className='retail'>
        <div className='appbar main' style={{position:'relative'}}>
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
        <div className='appbar main' style={{position:'relative'}}>
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
        <div className='appbar dashboard' style={{position:'relative'}}>
          {/* <button>전체메뉴</button>
            <button>로고</button>
            <button>검색</button> */}
        </div>
      </div>
      <div className='h10'></div>
      <div className='wholesale'>
        <div className='appbar' style={{position:'relative'}}>
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
      <h3>3. form </h3>
      <form>
        <div className="form-group">
          <div className={`input-container ${focusedInput === 'password' ? 'focused' : ''}`}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              required
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
            />
            <button type="button" className="btn-clear" aria-label="입력 내용 지우기">
              지우기
            </button>
            <button type="button" className="btn-eye-off">
              비밀번호 표시
            </button>
          </div>
        </div>
      </form>
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


    <div className='component'></div>





  </div>;
};

export default AllComponent;
