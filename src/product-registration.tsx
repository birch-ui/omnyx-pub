import React, { useState } from 'react';
import Appbar from './components/appbar-component';
import Footer from './components/footer-component';
import InputField from './components/input-field-component';
import ButtonGroup from './components/button-group-component';
import TextAreaField from './components/textarea-field-component';
import CheckBoxGroup from './components/checkbox-group-component';
import ImageUpload from './components/image-upload-component';
import OptionTable from './components/option-table-component';

interface Option {
  id: number;
  color: string;
  size: string;
  stock: number;
  price: number;
}

const ProductRegistration: React.FC = () => {
  // TextArea 상태
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  // CheckBox 데이터
  const checkboxOptions = [
    { id: '1', label: '전시여부', value: 'option1' },
    { id: '2', label: '신상품으로 노출하기', value: 'option2' },
    { id: '3', label: '추천상품으로 노출하기', value: 'option3' },
    { id: '4', label: '인기상품으로 노출하기', value: 'option4' },
  ];

  // 이미지 업로드 상태
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (file: File | null) => {
    console.log('선택된 이미지 파일:', file);
    setImageFile(file);
  };

  // 상품 옵션 데이터
  const [tableOptions, setTableOptions] = React.useState<Option[]>([
    { id: 1, color: 'black', size: '34', stock: 13, price: 1000 },
    { id: 2, color: 'black', size: '36', stock: 10, price: 1000 },
    { id: 3, color: 'red', size: '34', stock: 10, price: 1000 },
    { id: 4, color: 'red', size: '36', stock: 10, price: 1000 },
    { id: 3, color: 'red', size: '34', stock: 10, price: 1000 },
    { id: 4, color: 'red', size: '36', stock: 10, price: 1000 },
  ]);

  const handleUpdate = (id: number, field: 'stock' | 'price', value: number) => {
    setTableOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, [field]: value } : option
      )
    );
  };

  const handleDelete = (selectedIds: number[]) => {
    setTableOptions((prev) =>
      prev.filter((option) => !selectedIds.includes(option.id))
    );
  };


  return (
    <div className="container">
      {/* 네비게이션 바 */}
      <div className="navigation-bar">
        <Appbar
          type="wholesale"
          leftTitle="상품 등록"
          onBackClick={() => console.log('이전페이지 클릭됨')}
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="content-wrap">
        {/* 카테고리 선택 */}
        <div className="section">
          <ButtonGroup
            buttons={[
              {
                label: '카테고리 선택',
                size: 'btn-medium',
                style: 'btn-line',
                type: 'wholesale',
              },
            ]}
          />
          <div>
            선택한 카테고리 <span>{'>'}</span> 여자 상의 블라우스
          </div>
        </div>

        <hr className="divider" />

        {/* 상품 정보 입력 */}
        <div className="section">
          <form>
            <InputField
              type="text"
              id="productName"
              name="productName"
              placeholder="상품명을 입력하세요"
              label="상품명"
            />
            <InputField
              type="text"
              id="productCode"
              name="productCode"
              placeholder="상품 코드를 입력하세요"
              label="상품코드"
            />
            <InputField
              type="text"
              id="ncmCode"
              name="ncmCode"
              placeholder="NCM 코드를 입력하세요"
              label="NCM 코드"
            />
            <InputField
              type="text"
              id="salePrice"
              name="salePrice"
              placeholder="판매가를 입력하세요"
              label="판매가"
            />
            <InputField
              type="text"
              id="costPrice"
              name="costPrice"
              placeholder="원가를 입력하세요"
              label="원가"
            />
            <TextAreaField
              label="상품 소재"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="상품 소재를 입력하세요"
            />
            <TextAreaField
              label="상품 정보"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="상품 정보를 입력하세요"
            />
            <InputField
              type="text"
              id="searchKeywords"
              name="searchKeywords"
              placeholder="검색어를 입력하세요"
              label="검색어"
            />
          </form>
          <CheckBoxGroup options={checkboxOptions} showSelectAll={false} />
        </div>

        <hr className="divider" />

        {/* 이미지 업로드 */}
        <div className="section">
        <ImageUpload />
        </div>

        <hr className="divider" />

        {/* 옵션 테이블 */}
        <div className="section">
          <h1>상품 옵션 테이블</h1>
          <OptionTable
        options={tableOptions}
        onUpdate={handleUpdate} 
        onDelete={handleDelete}
      />
        </div>
      </div>

      {/* 푸터 */}
      <div className="tab-bar">
        <Footer />
      </div>
    </div>
  );
};

export default ProductRegistration;
