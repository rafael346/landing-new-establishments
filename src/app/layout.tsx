import { Providers } from './providers'
import {Roboto_Mono} from 'next/font/google'

const inter = Roboto_Mono({weight:'400', subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
