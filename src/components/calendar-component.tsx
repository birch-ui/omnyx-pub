import React, { useState, forwardRef } from 'react';
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
        fontSize: '18px',
        width: '100%',
        maxWidth: '400px',
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
          fontSize: '18px',
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
      <div className="calendar-range">
        {/* 시작 날짜 */}
        <div>
          <DatePicker
            selected={startDate || new Date()} // 기본값으로 오늘 날짜
            onChange={onStartDateChange}
            dateFormat="yyyy-MM-dd"
            customInput={<CalendarInput />}
            className="custom-datepicker"
            popperPlacement="bottom"
          />
        </div>

        {/* 구분 표시 */}
        <div>~</div>

        {/* 종료 날짜 */}
        <div>
          <DatePicker
            selected={endDate || new Date()} // 기본값으로 오늘 날짜
            onChange={onEndDateChange}
            dateFormat="yyyy-MM-dd"
            customInput={<CalendarInput />}
            className="custom-datepicker"
            popperPlacement="bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
