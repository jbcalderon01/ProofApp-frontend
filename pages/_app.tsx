import type { AppProps } from 'next/app'

import { LayoutMainContainer } from '@app/layouts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Theme } from '@app/ui/styles/theme.context'
import '@app/ui/styles/GlobalStyles.css'
import { SnackbarProvider } from 'notistack'
import { AuthProvider } from '@app/contexts/auth.context'
import { NextPage } from 'next'

library.add(fas, fab)

type NextPageWithLayout = NextPage & {
    withoutLayout?: boolean
  }

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

    const withoutLayout = Component.withoutLayout

    return (
        <Theme>
            <SnackbarProvider
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}
            >
                <AuthProvider>
                    {withoutLayout ? (
                        <Component {...pageProps} />
                    ) : (
                        <LayoutMainContainer>
                            <Component {...pageProps} />
                        </LayoutMainContainer>
                    )}
                </AuthProvider>
            </SnackbarProvider>
        </Theme>
    )
}

export default MyApp
