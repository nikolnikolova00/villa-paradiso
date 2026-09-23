import React, {
  createContext,
  useMemo,
  type PropsWithChildren,
} from 'react';
import { useTranslation } from 'react-i18next';
import * as materialLocales from '@mui/material/locale';
import * as dataGridLocales from '@mui/x-data-grid/locales';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as pickersLocales from '@mui/x-date-pickers/locales';

import 'dayjs/locale/bg';
import dayjs from 'dayjs';

const localeKeys: Record<string, string> = {
  bg: 'bgBG',
  en: 'enUS',
};

type AppLocalizationContextType = {
  muiLocales: object[];
};

// eslint-disable-next-line react-refresh/only-export-components
export const AppLocalizationContext =
  createContext<AppLocalizationContextType>(
    {} as AppLocalizationContextType
  );

export const AppLocalizationProvider: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const { i18n: { language } } = useTranslation();

  // changes day of week to selected language. Should import language first!!!
  dayjs.locale(language);

  const localeKey = localeKeys[ language ] || 'enUS';

  // Translates for MUI components
  const muiLocales = useMemo(() => [
    materialLocales[ localeKey as keyof typeof materialLocales ],
    dataGridLocales[ localeKey as keyof typeof dataGridLocales ],
    pickersLocales[ localeKey as keyof typeof pickersLocales ],
  ], [localeKey]);

  return (
    <AppLocalizationContext.Provider
      value={{ muiLocales }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={language}
      >
        {children}
      </LocalizationProvider>
    </AppLocalizationContext.Provider>
  );
};