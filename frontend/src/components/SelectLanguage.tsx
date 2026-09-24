import { useTranslation } from 'react-i18next';
import { MenuItem, Select } from '@mui/material';
import { languages } from 'i18n';

type SelectLanguageProps = {
  color?: string;
};

export const SelectLanguage = ({ color }: SelectLanguageProps) => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? 'en';

  return (
    <Select
      value={current}
      onChange={(event) => void i18n.changeLanguage(event.target.value)}
      variant="standard"
      disableUnderline
      inputProps={{ 'aria-label': 'Change language' }}
      sx={{ color: color ?? 'inherit', minWidth: 96 }}
    >
      {languages.map((language) => (
        <MenuItem key={language.code} value={language.code}>
          {language.label}
        </MenuItem>
      ))}
    </Select>
  );
};
