import React, { useState } from 'react';

const Login = () => {
  // 상태 관리
  const [loginType, setLoginType] = useState<string>('retail'); // 로그인 타입
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // 모달 표시 여부
  const [focusedInput, setFocusedInput] = useState<string | null>(null); // 포커스된 입력 필드

  // 라디오 버튼 선택 이벤트 핸들러
  const handleLoginTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginType(event.target.value);
  };

  // 포커스 이벤트 핸들러
  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  // 블러 이벤트 핸들러
  const handleBlur = () => {
    setFocusedInput(null);
  };

  // 모달 닫기 이벤트 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 모달이 닫힌 경우 null 반환
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="container">
      <div className="modal-container">
        <div className={`modal ${loginType}`}>
          {/* 모달 닫기 버튼 */}
          <button className="btn-close-modal" onClick={handleCloseModal}>
            닫기
          </button>
          <div className="login">
            <h1 className="title">Login</h1>
            {/* 로그인 타입 선택 */}
            <div className="radio-group">
              <div className="radio-item">
                <input
                  type="radio"
                  id="retailLogin"
                  name="loginType"
                  value="retail"
                  checked={loginType === 'retail'}
                  onChange={handleLoginTypeChange}
                />
                <label htmlFor="retailLogin">구매자로 로그인</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="wholesaleLogin"
                  name="loginType"
                  value="wholesale"
                  checked={loginType === 'wholesale'}
                  onChange={handleLoginTypeChange}
                />
                <label htmlFor="wholesaleLogin">판매자로 로그인</label>
              </div>
            </div>

            {/* 아이디 입력 */}
            <div className="form-group">
              <div
                className={`input-container ${focusedInput === 'id' ? 'focused' : ''
                  }`}
              >
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="이메일주소를 입력하세요"
                  required
                  onFocus={() => handleFocus('id')}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div className="form-group">
              <div
                className={`input-container ${focusedInput === 'password' ? 'focused' : ''
                  }`}
              >
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
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

            {/* 로그인 상태 유지 */}
            <div
              className={`form-group ${loginType === 'wholesale'
                ? 'wholesale-checkbox'
                : 'retail-checkbox'
                }`}
            >
              <div className="check-group">
                <div className="check-item stay-login">
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

            {/* 로그인 버튼 */}
            <button type="submit" className="btn-fill btn-large">
              로그인
            </button>

            <div className="help-links">
              <button className='btn-saech-id'>아이디 찾기</button>
              <button className='btn-saech-pw'>비밀번호 찾기</button>
            </div>

            {/* 로그인 타입별 다른 UI */}
            {loginType === 'retail' && (
              <>
                <div className="register-prompt">
                구매자 계정이 없으신가요?
                </div>
                <button type="submit" className="btn-dark btn-large">
                  구매자로 가입
                </button>
              </>
            )}

            {loginType === 'wholesale' && (
              <>
                <h2 className="register-prompt">
                판매자 계정이 없으신가요?
                </h2>
                <button type="submit" className="btn-dark btn-large">
                 판매자로 가입
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
