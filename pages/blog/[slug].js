import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Script from "next/script"
import Link from 'next/link';
import Image from 'next/image';


const Post = ({ blog }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Script src="/assets/js/main.js"></Script>
      <Script src='https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js'></Script>
      <Script src='https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js'></Script>
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

        <title>WorkWithSaptarshi - Developer, Coder</title>

        <meta property="og:title" content="Homepage | Portfolio Website" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//"
        />

        <meta
          property="og:url"
          content="//"
        />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />
      </Head>
      <div id="main" className="relative">
        <div>
          <div>
            <div className="container py-6 md:py-10">
              <div className="mx-auto max-w-4xl">
                <div className="">
                  <h1 className="pt-5 font-body my-10 text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                    {blog.title}
                  </h1>
                  <div className="flex items-center pt-5 md:pt-10">
                    <div>
                      <Image width={40} height={40} src="/assets/img/blog-author.jpg" className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                        alt="author image" />
                    </div>
                    <div className="pl-5">
                      <span className="block font-body text-xl font-bold text-grey-10">By Saptarshi Nag</span>
                      <span className="block pt-1 font-body text-xl font-bold text-grey-30">February 27, 2022</span>
                    </div>
                  </div>
                </div>
                <div className="prose max-w-none pt-8">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    content={blog.content}
                    projectId="n6h0e0q4"
                    dataset="production"
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                      li: ({ children }) => <li className="special-list-item">{children}</li>
                    }}
                  />
                </div>

                <div className="mt-10 flex justify-between border-t border-lila py-12">
                  <Link href="/" className="flex items-center">
                    <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                    <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous Post</span>
                  </Link>
                  <Link href="/" className="flex items-center">
                    <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next Post</span>
                    <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                  </Link>
                </div>
                <div
                  className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                  <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                    <Image width={40} height={40} src="/assets/img/blog-author.jpg" className="rounded-full shadow" alt="author image" />
                  </div>
                  <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                    <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                      Saptarshi Nag
                    </h3>
                    <p
                      className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                      I'm a web developer and designer living in Kolkata, West Bengal, India. I spend my days with my hands in many different areas of web development from back end programming (Node.js, MongoDB and Strapi) to front end engineering (HTML, CSS, jQuery/Javascript, React and Next.js), digital accessibility, user experience and visual design.

                    </p>
                    <div className="flex items-center justify-center pt-5 md:justify-start">
                      <Link href="https://www.facebook.com/profile.php?id=100010429742389">
                        <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow mr-2"></i>
                      </Link>
                      <Link href="https://mobile.twitter.com/SaptarshiNag7 " className="pl-4">
                        <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                      </Link>
                      <Link href="https://www.linkedin.com/in/saptarshi-nag-132803234" className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                      </Link>
                      <Link href="https://instagram.com/marine_rider_12?igshid=YmMyMTA2M2Y=" className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
              <p className="text-center font-body text-white md:text-left">
                © Copyright 2022. All right reserved, Saptarshi.
              </p>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link href="https://www.facebook.com/profile.php?id=100010429742389" target={'_blank'}>
                  <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                </Link>
                <Link href="https://mobile.twitter.com/SaptarshiNag7 " className="pl-4" target={'_blank'}>
                  <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/saptarshi-nag-132803234" className="pl-4" target={'_blank'}>
                  <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </Link>
                <Link href="https://instagram.com/marine_rider_12?igshid=YmMyMTA2M2Y=" className="pl-4" target={'_blank'}>
                  <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                </Link>
              </div>
            </div>
          </div>

        </div >

        <Script src="/assets/js/main.js"></Script>

      </div >
    </div >
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "n6h0e0q4",
    dataset: "production",
    apiVersion: "2022-06-06",
    useCdn: false,
  })
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`
  const blog = await client.fetch(query)
  return {
    props: {
      blog
    }
  }
}


export default Post
