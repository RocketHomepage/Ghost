import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import Script from 'next/script';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }


  render() {
  
    return (
      <Html>
        <Head> 
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />

            <Script src="/custom-script.js" strategy="lazyOnload" />

        </Head>
        <body>
      
          <Main />
          <NextScript />


         
    
        </body>
      </Html>
    )
  }
}

export default MyDocument