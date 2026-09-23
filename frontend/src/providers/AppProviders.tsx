import { DevtoolsProvider } from "@refinedev/devtools";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./QueryProvider";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../theme";
import { AppLocalizationProvider } from "./AppLocalizationProvider";
import { RefineSnackbarProvider } from "@refinedev/mui";
import type { PropsWithChildren } from "react";

export const AppProviders = ({ children }: PropsWithChildren) => (
    <DevtoolsProvider>
        <BrowserRouter>
            <QueryProvider>
                <ThemeProvider theme={appTheme}>
                    <AppLocalizationProvider>
                        <RefineSnackbarProvider>
                            {children}
                        </RefineSnackbarProvider>
                    </AppLocalizationProvider>
                </ThemeProvider>
            </QueryProvider>
        </BrowserRouter>
    </DevtoolsProvider>
);