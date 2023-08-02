import { Button } from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .image-container {
    width: 100px;
    height: 100px;
    display: flex;
    overflow: hidden;
    border-radius: 50%;
    align-items: center;
    border: 2px solid #ccc;
    justify-content: center;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    display: flex;
    color: #ccc;
  }

  .upload-input {
    display: none;
  }
`;

export const ImageUpload = () => {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /**
   *
   * @param event
   */
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Handle upload button click.
   */
  const handleUploadButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <Wrapper className="image-upload-preview">
      <div className="image-container">
        {previewUrl ? (
          <img src={previewUrl.toString()} alt="Preview" />
        ) : (
          <div className="placeholder">No Image</div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="upload-input"
        onChange={handleImageChange}
      />

      <Button
        disableRipple
        color="primary"
        startIcon={<FileUploadIcon />}
        sx={{ textTransform: "none" }}
        onClick={handleUploadButtonClick}
      >
        Upload Image
      </Button>
    </Wrapper>
  );
};
