import React from 'react'
import { NextThemeProviderWrapper } from './NextThemeProviderWrapper/NextThemeProviderWrapper'
import AuthSessionProvider from './SessionProvider/SessionProvider'
import { Session } from 'next-auth';

function Providers({children,session}: { children: React.ReactNode; session: Session | null }) {
  return (
    <>
        <NextThemeProviderWrapper   >
          <AuthSessionProvider session={session}>
            {children}
          </AuthSessionProvider>
        </NextThemeProviderWrapper>
    </>
  )
}

export default Providers