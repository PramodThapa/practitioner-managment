import { Button, CircularProgress } from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../../services";

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
    justify-content: center;
    border: 2px solid var(--color-grey-500);
  }

  .image-container img {
    display: block;
    border-radius: 50%;
    max-width: 100%;
  }

  .placeholder {
    display: flex;
    color: var(--color-grey-500);
  }

  .upload-input {
    display: none;
  }
`;

interface ImageUploadProps {
  onChange: (data: string) => void;
}

export const ImageUpload = ({ onChange }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /**
   * Function to handle image changes.
   *
   * @param event
   */
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);

    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "PRACTITIONER");

    try {
      const response = await uploadImage(formData);
      const { url } = response?.data;

      onChange(url);
      setPreviewUrl(url);
    } catch (_error) {
    } finally {
      setIsUploading(false);
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
        {isUploading ? (
          <CircularProgress />
        ) : previewUrl ? (
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
        disabled={isUploading}
        startIcon={<FileUploadIcon />}
        sx={{ textTransform: "none" }}
        onClick={handleUploadButtonClick}
      >
        Upload Image
      </Button>
    </Wrapper>
  );
};
