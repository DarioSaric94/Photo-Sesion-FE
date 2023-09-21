import React, { ChangeEvent, useEffect, useState } from 'react';
import { Avatar } from '@mui/material';

interface AddImageProps {
  onImageChange: (file: File | null) => void;
  image?: string;
  htmlFor: string;
}

export const AddImage: React.FC<AddImageProps> = ({
  onImageChange,
  image,
  htmlFor,
}) => {
  const [selectedImage, setSelectedImage] = useState<undefined | string>(image);

  useEffect(() => {
    if (!selectedImage) {
      setSelectedImage(image);
    }
  }, [image]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor={htmlFor} style={{ borderRadius: '50%' }}>
      <input
        id={htmlFor}
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <Avatar
        src={selectedImage}
        sx={{
          width: '200px',
          height: '200px',
          backgroundSize: 'cover',
        }}
      />
    </label>
  );
};
