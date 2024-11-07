import type { Metadata } from 'next'
import './globals.css'
import DashboardWrapper from './dashboardWrapper'

export const metadata: Metadata = {
    title: 'Inventory Management System',
    description: 'AWS deployment test',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <DashboardWrapper>{children}</DashboardWrapper>
            </body>
        </html>
    )
}
