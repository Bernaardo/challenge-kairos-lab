import type { Metadata } from "next";
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/styles/theme";
import "../styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import { CharacterProvider } from "@/contexts/CharacterContext";

export const metadata: Metadata = {
  title: "Star Wars",
  description: "Challenge para KAIROS LAB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head><link rel="icon" href="/icon.png" /></head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <CharacterProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </CharacterProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
