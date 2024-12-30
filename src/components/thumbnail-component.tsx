import React from 'react';

// Props 타입 정의
interface ThumbnailProps {
  tempImage: string; // 썸네일 이미지 URL
  sellerLogo: string; // 판매자 로고 이미지 URL
  isLiked: boolean; // 찜 상태
  toggleLike: () => void; // 찜 상태 토글 함수
  productName: string; // 상품명
  productPrice: number; // 상품 가격
  discountRate: number; // 할인율 (예: 30)
  isHotDeal: boolean; // 핫딜 여부
}

// Thumbnail 컴포넌트 정의
const Thumbnail: React.FC<ThumbnailProps> = ({
  tempImage,
  sellerLogo,
  isLiked,
  toggleLike,
  productName,
  productPrice,
  discountRate,
  isHotDeal,
}) => {
  return (
    <div className='thumbnail'>
      <div className='thumbnail-content'>
        <img src={tempImage} alt='Thumbnail' />
        <div className='promotion-bedge'>
          {discountRate > 0 && <span className='sale'>{discountRate}%</span>}
          {isHotDeal && <span className='hotdeal'>Hot Deal</span>}
        </div>
        <div className='seller-logo'>
          <img src={sellerLogo} alt='SellerLogo' />
        </div>
        <button
          className={`btn-icon ${isLiked ? 'btn-like-on' : 'btn-like'}`}
          onClick={toggleLike}>
          찜하기
        </button>
      </div>
      <ul className='product-info'>
        <li className='product-name text-ellipsis'>{productName}</li>
        <li className='product-price'>
          <em className='unit'>R$</em> {productPrice.toLocaleString('pt-BR')}
        </li>
      </ul>
    </div>
  );
};

export default Thumbnail;
