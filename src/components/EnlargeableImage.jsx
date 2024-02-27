import React, { useState } from "react";
import {
  Modal,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const ImageModal = ({ image, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: "auto" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
            title={title}
            sx={{
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-image-title"
        aria-describedby="modal-image-description">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            border: "2px solid #000",
            padding: 16,
          }}>
          <Typography id="modal-image-title" variant="h6" component="h2">
            {/* {title} */}
          </Typography>
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "auto", marginTop: 8 }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
