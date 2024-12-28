import React from 'react';

interface ButtonProps {
  label: string; // 버튼 텍스트
  size: 'btn-large' | 'btn-medium' | 'btn-small' | 'btn-xsmall';
  style: 'btn-fill' | 'btn-line' | 'btn-dark' | 'btn-disable' | ''; // 스타일 클래스
  type?: 'retail' | 'wholesale'; // 버튼 타입
}

interface ButtonGroupProps {
  buttons: ButtonProps[]; // 버튼 속성 배열
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="btnlist">
      {buttons.map((button, index) => (
        <div className={button.type || ''} key={index}>
          <button type="submit" className={`${button.style} ${button.size}`}>
            {button.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
