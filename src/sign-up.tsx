// SignUp.tsx
import React from 'react';

const SignUp = () => {
  return (
    <div className='wholesale'>

      <div className='appbar'>
        <div className='fl'>
          <button className='appbar-pre'>이전페이지</button>
        </div>
        <div className='fl'>
          <h2 className='title'>공급업체로 가입하기</h2>
        </div>
      </div>


      <div className='contents'>
        <h2 className="register-prompt">
          Omni에서 도매 공급업체로 가입하면
        </h2>
        <p className='register-prompt-info'>디지털화된 마켓플레이스 경험, 새로운 트렌드에 대한 쉬원 접근, 신뢰할 수 있는 공급업체의 광범위한 네트워크 활용을 할 수 있습니다.
          공업업체로 가입하면 브랜드를 홍보하고 역동적인 패션 시장에서 앞서 나갈 수 있는 귀중한 기회가 열립니다.
        </p>



        <div className="form-group">
          <label>법인번호(CNPJ) 또는 개인번호(CPF)</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="CNPJ 또는 CPF 입력하세요"
            />
            <button type="button" className="btn-small btn-disable">
              중복확인
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>도매업체명</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="업체명을 입력하세요"
            />
          </div>
        </div>

        <div className="form-group">
          <label>이메일</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="이메일을 입력하세요"
            />
          </div>
        </div>


        <div className="form-group">
          <label>비밀번호</label>
          <div className="input-container" >
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              required
            />
            <button
              type="button"
              className="btn-clear"
              aria-label="입력 내용 지우기"
            >
              지우기
            </button>
            <button type="button" className="btn-eye-off">
              비밀번호 표시
            </button>
          </div>
        </div>


        <div className="form-group">
          <label>주소</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="주소를 입력하세요"
            />
          </div>
        </div>


        <div className="form-group">
          <label>핸드폰번호</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="핸드폰 번호를 입력하세요"
            />
          </div>
        </div>

        <div className="form-group">
          <label>회사소개</label>
          <div className="input-container" >
            <textarea className='custom-textarea'></textarea>
          </div>
        </div>

        <div className="form-group">
          <label>사용자수</label>
          <div className="input-container" >
            <input type="text"
              id="id"
              name="id"
              placeholder="사용자수를 입력하세요"
            />
          </div>
        </div>

        <div className='agreement'>
          <div className="check-group">
            <div className="check-item stay-login">
              <input
                type="checkbox"
                id="stayLoggedIn"
                name="stayLoggedIn"
                value="yes"
              />
              <label htmlFor="stayLoggedIn">약관에 동의합니다</label>
            </div>
          </div>

          <div className="check-group">
            <div className="check-item stay-login">
              <input
                type="checkbox"
                id="stayLoggedIn"
                name="stayLoggedIn"
                value="yes"
              />
              <label htmlFor="stayLoggedIn">구독안내 </label>
            </div>
          </div>
        </div>

        <div className='btn-group'>
          <button className='btn-fill btn-large'>
            회원가입
          </button>
        </div>

      </div>


    </div>
  );
};

export default SignUp;
