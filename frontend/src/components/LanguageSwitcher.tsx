import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { languages } from '../i18n';

type LanguageSwitcherProps = {
  color?: string;
};

export const LanguageSwitcher = ({ color }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const current = i18n.resolvedLanguage ?? 'en';

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        size="small"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        startIcon={<LanguageIcon />}
        sx={{ color: color ?? 'inherit', minWidth: 0, px: 1.5 }}
        aria-label="Change language"
      >
        {current.toUpperCase()}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            selected={language.code === current}
            onClick={() => {
              void i18n.changeLanguage(language.code);
              handleClose();
            }}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
