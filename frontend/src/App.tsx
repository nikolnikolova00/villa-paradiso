import { CssBaseline, GlobalStyles } from '@mui/material';
import { AppProviders } from 'providers';
import { AppRoutes } from 'router';
import { Refine } from '@refinedev/core';
import { useNotificationProvider } from '@refinedev/mui';
import routerProvider from '@refinedev/react-router';
import { adminResources, stubDataProvider } from 'admin';
import 'dayjs/locale/bg';
import { useTranslation } from 'react-i18next';
import type { TOptions } from 'i18next';

const App = () => {
    const { t, i18n: { language, changeLanguage } } = useTranslation('translation');
    const i18nProvider = {
        translate: (key: string, params?: TOptions) => t(key, params),
        changeLocale: (lang: string) => changeLanguage(lang),
        getLocale: () => language,
    };

    return (
        <AppProviders >
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
            <Refine
                routerProvider={routerProvider}
                dataProvider={stubDataProvider}
                notificationProvider={useNotificationProvider}
                resources={adminResources.map(({ name }) => ({
                    name,
                    list: `/admin/${name}`,
                }))}
                options={{ syncWithLocation: true }}
                i18nProvider={i18nProvider}
            >
                <AppRoutes />
            </Refine>
        </AppProviders>
    )
}

export default App;
