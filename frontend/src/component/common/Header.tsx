import styled from "styled-components";

import { Container, FlexBox } from "../common";
import {
  Menu,
  Avatar,
  MenuItem,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import { getAcronym } from "../../utils";
import { Logout } from "@mui/icons-material";
import { useState } from "react";

interface HeaderProps {
  handleLogout: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-grey-700);

  .title {
    color: var(--color-white);
    font-weight: var(--fontWeight-semibold);
  }
`;

export const Header: React.FC<HeaderProps> = ({ handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Container size="md" padding="20px">
        <FlexBox align="center" justify="space-between">
          <div className="title">Practitioner Profile Management </div>
          <div>
            <IconButton onClick={handleClick}>
              <Avatar src="">{getAcronym("Pramod Thapa")}</Avatar>
            </IconButton>

            <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};
