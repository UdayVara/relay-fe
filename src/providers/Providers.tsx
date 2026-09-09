import React from 'react'
import { NextThemeProviderWrapper } from './NextThemeProviderWrapper/NextThemeProviderWrapper'

function Providers({  children}: { children: React.ReactNode }) {
  return (
    <>
        <NextThemeProviderWrapper   >
            {children}
        </NextThemeProviderWrapper>
    </>
  )
}

export default Providers