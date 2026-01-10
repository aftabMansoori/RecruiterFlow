import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { ROUTES } from "constants";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  elevation: 0,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
  },
}));

const Brand = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  paddingRight: theme.spacing(2),
  borderRight: '2px solid #ecf0f1',
  [theme.breakpoints.down('sm')]: {
    borderRight: 'none',
    paddingRight: 0,
    paddingBottom: theme.spacing(1),
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ecf0f1',
  textTransform: 'none',
  borderBottom: '2px solid transparent',
  borderRadius: 0,
  transition: 'border-bottom 0.2s ease',
  '&:hover': {
    borderBottom: '2px solid #ecf0f1',
    backgroundColor: 'transparent',
  },
  '&.active': {
    borderBottom: '2px solid #ecf0f1',
    fontWeight: 600,
  },
}));

function Navbar() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Brand variant="h6" component="div">
          Shipping Box
        </Brand>
        <NavBox component="nav">
          <NavButton
            component={NavLink}
            to={ROUTES.ADD_BOX}
          >
            Add Box
          </NavButton>
          <NavButton
            component={NavLink}
            to={ROUTES.BOX_LIST}
          >
            Box List
          </NavButton>
        </NavBox>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
