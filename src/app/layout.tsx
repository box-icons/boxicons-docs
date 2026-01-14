import { Footer, Layout, Navbar, LastUpdated } from 'nextra-theme-docs'
import { Banner, Head, Image } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import packageJson from '../../package.json'
import './globals.css'

export const metadata = {}

const banner = <Banner storageKey="some-key"> </Banner>
const navbar = (
  <Navbar
    logo={<div className='flex  gap-2 items-center grayscale hover:grayscale-0 duration-300'><Image src={'/logo.svg'} alt="brand" width="32" height="32" /> <div className='uppercase text-[12px] font-semibold tracking-wider '>docs</div></div>}
    projectLink='https://github.com/box-icons/boxicons'
    
  />
)
const footer = <Footer> <div className='flex w-full justify-between'><span>{new Date().getFullYear()} © Boxicons. All Rights Reserved</span> <span>Current version: v{packageJson.icon_version}</span></div></Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href={'https://cdn.boxicons.com/'+packageJson.icon_version+'/fonts/animations.min.css'} />
        <link rel="stylesheet" href={'https://cdn.boxicons.com/'+packageJson.icon_version+'/fonts/transformations.min.css'} />
        
          <link rel="stylesheet" href="/fonts/boxicons-docs.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Layout
          feedback={{
            content: 'Question? Give us feedback →',
            labels: 'feedback',
          }}
          editLink={'Edit this page'}
          banner={banner}
          navbar={navbar}
          sidebar={{
            defaultMenuCollapseLevel:1,
            
          }}
        
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/atisawd/boxicons-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}