import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/component.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const CalendarInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
  ({ value = '', onClick }, ref) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '5px 5px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        fontSize: '18px', // 입력 필드의 글씨 크기
        width: '100%',
        maxWidth: '400px', // 입력 필드의 최대 크기
      }}
      onClick={onClick}
    >
      <AiOutlineCalendar style={{ marginRight: '10px', fontSize: '24px', color: '#888' }} />
      <input
        ref={ref}
        value={value}
        readOnly
        style={{
          border: 'none',
          background: 'transparent',
          fontSize: '18px', // 입력 필드 글씨 크기
          color: '#333',
          outline: 'none',
          flex: 1,
        }}
        placeholder="날짜를 선택하세요"
      />
    </div>
  )
);

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const CalendarComponent: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div>
      <h3>달력(콤퍼넌트)</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
        {/* 시작 날짜 */}
        <div>
          <DatePicker
            selected={startDate}  
            onChange={onStartDateChange}
            dateFormat="yyyy-MM-dd"
            customInput={<CalendarInput />}
            className="custom-datepicker"
            popperPlacement="bottom"
          />
          {/* <div style={{ marginTop: '20px', fontSize: '18px' }}>
            {startDate ? `시작 날짜: ${startDate.toLocaleDateString()}` : '시작 날짜를 선택하세요'}
          </div> */}
        </div>

        {/* 구분 표시 */}
        <div>~</div>

        {/* 종료 날짜 */}
        <div>
          <DatePicker
            selected={endDate}
            onChange={onEndDateChange}
            dateFormat="yyyy-MM-dd"
            customInput={<CalendarInput />}
            className="custom-datepicker"
            popperPlacement="bottom"
          />
          {/* <div style={{ marginTop: '20px', fontSize: '18px' }}>
            {endDate ? `종료 날짜: ${endDate.toLocaleDateString()}` : '종료 날짜를 선택하세요'}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
