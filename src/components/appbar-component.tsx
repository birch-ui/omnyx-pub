import React from "react";

interface AppbarProps {
  type: "retail" | "wholesale"; // 소매(retail) 또는 도매(wholesale)
  title?: string; // 중앙에 표시될 제목
  leftTitle?: string; // 좌측에 표시될 제목
  showMenuButton?: boolean; // 메뉴 버튼 표시 여부
  showLogo?: boolean; // 로고 표시 여부
  showSearchButton?: boolean; // 검색 버튼 표시 여부
  showAlarmButton?: boolean; // 알람 버튼 표시 여부
  showCartButton?: boolean; // 장바구니 버튼 표시 여부
  cartCount?: number; // 장바구니 아이템 개수
  onMenuClick?: () => void; // 메뉴 버튼 클릭 이벤트
  onSearchClick?: () => void; // 검색 버튼 클릭 이벤트
  onAlarmClick?: () => void; // 알람 버튼 클릭 이벤트
  onCartClick?: () => void; // 장바구니 버튼 클릭 이벤트
  onBackClick?: () => void; // 뒤로 가기 버튼 클릭 이벤트 (옵션)
}

const Appbar: React.FC<AppbarProps> = ({
  type,
  title,
  leftTitle,
  showMenuButton = false,
  showLogo = false,
  showSearchButton = false,
  showAlarmButton = false,
  showCartButton = false,
  cartCount = 0,
  onMenuClick,
  onSearchClick,
  onAlarmClick,
  onCartClick,
  onBackClick,
}) => {
  return (
    <div className={`appbar ${type}`}>
      {/* 왼쪽 콘텐츠 (뒤로가기, 메뉴, 좌측 타이틀) */}
      <div className="fl">
        {onBackClick && (
          <button className="appbar-pre" onClick={onBackClick}>
            &lt; {/* 뒤로가기 아이콘 */}
          </button>
        )}
        {showMenuButton && (
          <button className="appbar-menu" onClick={onMenuClick}>
            ☰ {/* 메뉴 아이콘 */}
          </button>
        )}
        {leftTitle && <h2 className="left-title">{leftTitle}</h2>}
      </div>

      {/* 중앙 로고 또는 제목 */}
      <div className="center">
        {showLogo && <button className="appbar-logo">OMNYX</button>}
        {title && <h2 className="title">{title}</h2>}
      </div>

      {/* 오른쪽 버튼 */}
      <div className="fr">
        {showSearchButton && (
          <button className="appbar-search" onClick={onSearchClick}>
            🔍 {/* 검색 아이콘 */}
          </button>
        )}
        {showAlarmButton && (
          <button className="appbar-alarm" onClick={onAlarmClick}>
            🔔 <span className="badge-dot"></span>
          </button>
        )}
        {showCartButton && (
          <button className="appbar-cart" onClick={onCartClick}>
            🛒 <span className="badge-num">{cartCount}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
