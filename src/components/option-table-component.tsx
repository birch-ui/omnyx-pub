import React from 'react';
import ButtonGroup from './button-group-component';
interface Option {
  id: number;
  color: string;
  size: string;
  stock: number;
  price: number;
}

interface OptionTableProps {
  options: Option[];
  onUpdate: (id: number, field: 'stock' | 'price', value: number) => void;
  onDelete: (selectedIds: number[]) => void;
}

const OptionTable: React.FC<OptionTableProps> = ({ options, onUpdate, onDelete }) => {
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options.map((option) => option.id));
    }
  };

  const handleInputChange = (
    id: number,
    field: 'stock' | 'price',
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10) || 0; // 숫자로 변환, 빈 값은 0
    onUpdate(id, field, value);
  };

  return (
    <div>
      <div>
        <button onClick={() => onDelete(selected)}>선택삭제</button>
      </div>
      <ButtonGroup
          buttons={[
            { label: '선택삭제', size: 'btn-small', style: '', type: 'retail' },
          ]}
        />
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === options.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>컬러</th>
            <th>사이즈</th>
            <th>재고수량</th>
            <th>옵션가</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(option.id)}
                  onChange={() => handleSelect(option.id)}
                />
              </td>
              <td>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: option.color,
                    borderRadius: '50%',
                  }}
                ></div>
              </td>
              <td>{option.size}</td>
              <td>
                <input
                  type="number"
                  value={option.stock}
                  onChange={(e) => handleInputChange(option.id, 'stock', e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={option.price}
                  onChange={(e) => handleInputChange(option.id, 'price', e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionTable;
