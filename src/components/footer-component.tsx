import React, { useState } from "react";

const Footer: React.FC = () => {
  // 활성화된 버튼 상태 관리
  const [activeButton, setActiveButton] = useState<string>("menu");

  // 버튼 클릭 핸들러
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    console.log(`${buttonName} 클릭됨`);
  };

  return (
    <div className="footer">
      <div
        className={`footer-menu ${activeButton === "menu" ? "active" : ""}`}
        onClick={() => handleButtonClick("menu")}
      >
        <button>메뉴</button>
      </div>
      <div
        className={`footer-mystore ${activeButton === "mystore" ? "active" : ""}`}
        onClick={() => handleButtonClick("mystore")}
      >
        <button>내 스토어</button>
      </div>
      <div
        className={`footer-mypage ${activeButton === "mypage" ? "active" : ""}`}
        onClick={() => handleButtonClick("mypage")}
      >
        <button>마이페이지</button>
      </div>
      <div
        className={`footer-register ${activeButton === "register" ? "active" : ""}`}
        onClick={() => handleButtonClick("register")}
      >
        <button>상품등록</button>
      </div>
    </div>
  );
};

export default Footer;
