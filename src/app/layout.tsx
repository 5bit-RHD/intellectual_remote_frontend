import type { Metadata } from "next"
import { StyledEngineProvider, ThemeProvider } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import useTheme from "@/shared/theme/useTheme"
import { Header } from "@/widgets"

export const metadata: Metadata = {
  title: "Intellectual remote",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme

  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Header />
            <body style={{ backgroundColor: "#090909" }}>{children}</body>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </StyledEngineProvider>
    </html>
  )
}
