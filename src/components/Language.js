import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsGlobe } from 'react-icons/bs';
import { updateLanguage, updateLangDirection } from '../features/blogSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Language = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(updateLanguage());
    dispatch(updateLangDirection());
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (lang) => {
    setAnchorEl(null);
    changeLanguage(lang);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BsGlobe />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem
          style={{ fontSize: '1.5rem' }}
          onClick={() => handleClose('en')}
        >
          English
        </MenuItem>
        <MenuItem
          style={{ fontSize: '1.5rem' }}
          onClick={() => handleClose('he')}
        >
          עברית
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Language;
