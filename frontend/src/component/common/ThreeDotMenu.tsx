import { ReactNode, useState } from "react";

import { Menu, IconButton } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ThreeDotMenu {
  children: ReactNode;
}

export const ThreeDotMenu: React.FC<ThreeDotMenu> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-label="more">
        <MoreVertIcon />
      </IconButton>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </Menu>
    </>
  );
};
