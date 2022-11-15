import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>


                <link
                    rel="preconnect"
                    crossOrigin="crossOrigin"
                    href="https://fonts.gstatic.com"

                />

                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"

                />

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap" />

                <link
                    rel="stylesheet"
                    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"

                />

                <link
                    rel="stylesheet"
                    crossOrigin="anonymous"
                    href="/assets/styles/main.min.css"
                    media="screen"

                />


            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}




