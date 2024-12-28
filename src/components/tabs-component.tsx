import React, { useState, useEffect } from 'react';

interface TabProps {
  groups: {
    [key: string]: string[];
  };
  styleType?: 'line' | 'button'| 'round'; // 스타일 타입 추가
}

const TabsComponent: React.FC<TabProps> = ({ groups, styleType = 'line' }) => {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});

  // 초기 상태에서 각 그룹의 첫 번째 탭 활성화
  useEffect(() => {
    const initialActiveTabs: { [key: string]: string } = {};
    Object.entries(groups).forEach(([group, tabs]) => {
      if (tabs.length > 0) {
        initialActiveTabs[group] = tabs[0]; // 첫 번째 탭 선택
      }
    });
    setActiveTabs(initialActiveTabs);
  }, [groups]);

  const handleTabClick = (group: string, tabName: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [group]: tabName, // 특정 그룹의 활성화된 탭 업데이트
    }));
  };

  return (
    <div className={`tabs-group tabs-${styleType}`}>
      {Object.entries(groups).map(([group, tabs]) => (
        <div key={group} className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTabs[group] === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(group, tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TabsComponent;
