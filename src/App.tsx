import React, { useState } from 'react';
import Login from './login';
import FindPassword from './find-password';
import SignUp from './sign-up';

import AllComponent from './all-componet';
import CalendarComponent from './components/calendar-component';
import InputFieldComponent from './components/input-field-component';
import SignUpComplete from './sign-up-complete';

import './assets/css/index-pub.css'; // 인덱스 퍼블리싱에만 사용



function App(): React.ReactElement {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const componentMap: { [key: string]: React.ReactNode } = {
    login: <Login />,
    findPassword: <FindPassword />,
    signUp: <SignUp />,
    signUpComplete: <SignUpComplete />,
    allComponent: <AllComponent />,
    calendarComponent: (
      <CalendarComponent
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date: Date | null) => setStartDate(date)}
        onEndDateChange={(date: Date | null) => setEndDate(date)}
      />
    ),
    inputFieldComponent: (
      <form>
      <InputFieldComponent
        type="text"
        id="username"
        name="username"
        placeholder="사용자 이름을 입력하세요"
        label="사용자 이름"
      />
     <InputFieldComponent
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        label="비밀번호"
      />
       <InputFieldComponent
        type="email"
        id="email"
        name="email"
        placeholder="이메일 주소를 입력하세요"
        label="이메일"
      />
        <InputFieldComponent
        type="cpf"
        id="cpf"
        name="cpf"
        placeholder="CNPJ 또는 CPF 입력하세요"
        label="법인번호(CNPJ) 또는 개인번호(CPF)"
        buttonLabel="중복확인"
      />
    </form>
    ),
  };


  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(componentMap.allComponent);
  // const [selectedcalendar, setSelectedcalendar] = useState<React.ReactNode>(componentMap.calendarComponent);
  const [viewStyle, setViewStyle] = useState({ width: '375px', height: '812px' });

  const handleLinkClick = (componentKey: keyof typeof componentMap) => {
    const selected = componentMap[componentKey];
    if (selected) {
      setSelectedComponent(selected);
      // setSelectedcalendar(selected);
    }
  };

  const toggleViewStyle = (view: 'mobile' | 'tablet') => {
    if (view === 'mobile') {
      setViewStyle({ width: '375px', height: '812px' });
    } else {
      setViewStyle({ width: '820px', height: '1180px' });
    }
  };

  return (
    <div style={{ display: 'flex', padding: '1rem', gap:'1rem'}}>

  
      {/* 화면 영역 */}
      <div className="indexSt" style={{ flex: 2 }}>
        <h3>OMNYX INDEX</h3>
        <table>
          <thead>
            <tr>
              <th className='w80'>구분</th>
              <th className='w120'>1Depth</th>
              <th className='w120'>2Depth</th>
              <th className='w150'>3Depth</th>
              <th className='w80'>Type</th>
              <th className='w150'>화면명(파일명.tsx)</th>
              <th className='w50'>상태</th>
              <th className='w80'>완료/수정일</th>

              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={4}>로그인</td>
              <td>로그인</td>
              <td></td>
              <td></td>
              <td className="type">
                <span className="modal-b">modal-b</span>
              </td>
              <td
                className="id"
                onClick={() => handleLinkClick('login')}
                style={{ cursor: 'pointer' }}
              >
                login
              </td>
              <td></td>
              <td className="date"></td>
              <td className="etc"></td>
            </tr>
            <tr>
              <td>비밀번호찾기</td>
              <td></td>
              <td></td>
              <td className="type">
                <span className="modal-b">modal-b</span>
              </td>
              <td
                className="id"
                onClick={() => handleLinkClick('findPassword')}
                style={{ cursor: 'pointer' }}
              >
                find-password
              </td>
              <td></td>
              <td className="date"></td>
              <td className="etc"></td>
            </tr>
            <tr>
              <td>아이디찾기</td>
              <td></td>
              <td></td>
              <td className="type">
                <span className="modal-b">modal-b</span>
              </td>
              <td></td>
              <td></td>
              <td className="date"></td>
              <td className="etc"></td>
            </tr>
            <tr>
              <td>아이디찾기결과</td>
              <td></td>
              <td></td>
              <td className="type">
                <span className="modal-b">modal-b</span>
              </td>
              <td className="id"></td>
              <td></td>
              <td className="date"></td>
              <td className="etc"></td>
            </tr>
            <tr>
              <td rowSpan={5}>회원가입</td>
              <td rowSpan={3}>판매자로 회원가입</td>
              <td>회원가입하기</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td
                className="id"
                onClick={() => handleLinkClick('signUp')}
                style={{ cursor: 'pointer' }}
              >
                sign-up
              </td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td>회원가입완료</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td
                className="id"
                onClick={() => handleLinkClick('signUpComplete')}
                style={{ cursor: 'pointer' }}
            >
                sign-up-complete
            </td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td>구독재신청</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td className='id'></td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td rowSpan={2}>구매자로 회원가입</td>
              <td>회원가입하기</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td className='id'></td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td>회원가입완료</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={17}>판매자(어드민)</td>
              <td>홈</td>
              <td>대시보드</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td className='id'></td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td rowSpan={2}>카테고리관리</td>
              <td>카테고리설정</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td className='id'></td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
              <td>카테고리생성</td>
              <td></td>
              <td className='type'><span className='page'>page</span></td>
              <td className='id'></td>
              <td></td>
              <td className='date'></td>
              <td className='etc'></td>
            </tr>
            <tr>
            <td rowSpan={4}>상품관리</td>
            <td>상품관리조회/수정</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>상품관리조회/수정</td>
            <td>상품관리조회/수정 상세</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>상품등록</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>상품카테고리 일괄적용</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>주문관리</td>
            <td>주문 및 취소내역</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td className='dimed'>클레임관리</td>
            <td className='dimed'>교환/환불처리</td>
            <td className='dimed'></td>
            <td className='type dimed'></td>
            <td className='id dimed'></td>
            <td className='dimed'></td>
            <td className='date dimed'></td>
            <td className='etc dimed'>
              <div>
                 - 2차로 미룸 (2024-12-19)
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={4}>정산관리</td>
            <td>수금내역</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>정산처리</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>정산내역</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td className='dimed'>캐시내역</td>
            <td className='dimed'></td>
            <td className='type dimed'></td>
            <td className='id dimed'></td>
            <td className='dimed'></td>
            <td className='date dimed'></td>
            <td className='etc dimed'>
              <div>
                 - 2차로 미룸 (2024-12-19)
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>프로모션관리</td>
            <td>행사목록</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>행사등록</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>구매자 관리</td>
            <td>구매자 승인내역</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>관리페이지</td>
            <td>직원등록 및 권한</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>



          <tr>
            <td rowSpan={20}>구매자 메인</td>
            <td>전체카테고리(로그인전)</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>상품명 검색하기/결과</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>상품 전체보기</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>옴니추천</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>판매자</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>랭킹</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td>프로모션</td>
            <td></td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>판매자 카테고리</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>제품상세</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>장바구니</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>장바구니</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>주문수정</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>주문결제</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>주문완료</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>판매자메인</td>
            <td>주문내역</td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>
          <tr>
            <td></td>
            <td>마이페이지</td>
            <td></td>
            <td className='type'><span className='page'>page</span></td>
            <td className='id'></td>
            <td></td>
            <td className='date'></td>
            <td className='etc'></td>
          </tr>

          </tbody>
        </table>
      </div>



      <div className="indexSt" style={{ width: 'auto' }}>
        <h3>COMPONENT INDEX</h3>
        <table>
          <thead>
            <tr>
              <th className='w150'>콤포넌트명(파일명.tsx)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="id"
                onClick={() => handleLinkClick('allComponent')}
                style={{ cursor: 'pointer' }}
              >
                all-componets
              </td>
            </tr>
            <tr>
              <td
                className="id"
                onClick={() => handleLinkClick('inputFieldComponent')}
                style={{ cursor: 'pointer' }}
              >
               input-field-component.
              </td>
            </tr>
            {/* <tr>
              <td
                className="id"
                onClick={() => handleLinkClick('calendarComponent')}
                style={{ cursor: 'pointer' }}
              >
                calendar-component
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>



        {/* 모바일/태블릿 섹션 */}
      <div style={{ ...viewStyle }} className="view">
        <div className="view-btn">
           <button onClick={() => toggleViewStyle('mobile')}>mobile (375px)</button>
           <button onClick={() => toggleViewStyle('tablet')}>tablet (820px)</button>
        </div>
        {selectedComponent}
      </div>
    </div>
  );
}

export default App;
