import React, { useState } from "react";

const MAX_IMAGES = 10; // 업로드 가능한 최대 이미지 개수

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);

    if (files.length + images.length > MAX_IMAGES) {
      alert(`이미지는 최대 ${MAX_IMAGES}개까지 업로드 가능합니다.`);
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>이미지를 선택하세요 ({images.length}/{MAX_IMAGES})</h2>
      <div className="image-grid">
        {previews.map((preview, index) => (
          <div key={index} className="image-item">
            <img src={preview} alt={`Preview ${index}`} className="image-preview" />
            <button
              type="button"
              className="remove-button"
              onClick={() => handleRemoveImage(index)}
            >
              ❌
            </button>
            {index === 0 && <div className="main-image-label">대표사진</div>}
          </div>
        ))}
      </div>
      {images.length < MAX_IMAGES && (
        <div className="upload-container">
          <label htmlFor="image-upload" className="upload-label">
            + 이미지 추가
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="upload-input"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
