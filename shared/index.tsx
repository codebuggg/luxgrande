import { PropsWithChildren, ReactElement } from 'react'
import { Footer } from './footer'
import { Header } from './header'

interface Props {
    heroSection: ReactElement
}

export const Shared = ({ children, heroSection }: PropsWithChildren<Props>) => {
    return (
        <>
            <Header>
                {heroSection}
            </Header>
            {children}
            <Footer />
        </>
    )
}