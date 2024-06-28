import React from "react";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { NextSeoProps } from "next-seo";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/icon-community/docs.icon.community"
  },
  chat: {
    link: "https://icon.community/icondiscord/"
  },
  docsRepositoryBase: "https://github.com/icon-community/docs.icon.community/blob/master",
  useNextSeoProps(): NextSeoProps {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();
    const commonMetadata = {
      titleTemplate: "%s – ICON Documentation",
      description: frontMatter.description || "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use cross-chain messaging standard and connections to secure bridging protocols.",
      openGraph: {
        title: "ICON Documentation",
        description: "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use cross-chain messaging standard and connections to secure bridging protocols.",
        url: `https://docs.icon.community${asPath}`,
        siteName: "ICON Documentation",
        images: [
          {
            url: "https://docs.icon.community/images/link-preview.jpg",
            alt: "ICON Documentation",
            width: 1200,
            height: 630
          },
          {
            url: "https://docs.icon.community/images/link-preview.jpg",
            alt: "ICON Documentation",
            width: 1800,
            height: 1600
          }
        ],
        locale: "en_US",
        type: "website"
      },
      twitter: {
        cardType: 'summary_large_image',
        site: '@helloiconworld',
        description: "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use cross-chain messaging standard and connections to secure bridging protocols.",
        title: "ICON Documentation",
        images: {
          url: "https://docs.icon.community/images/link-preview.jpg",
          alt: "ICON Documentation",
          width: 1200,
          height: 630
        }
      }
    };

    if (asPath !== "/") {
      return {
        ...commonMetadata,
        titleTemplate: "%s – ICON Documentation",
        description: frontMatter.description
      };
    } else {
      return {
        ...commonMetadata,
        title: "ICON Documentation",
        description:
          "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use cross-chain messaging standard and connections to secure bridging protocols."
      };
    }
  },
  gitTimestamp: () => {
    const { frontMatter } = useConfig();
    return (
      <div>
        {/* Keeping this empty on purpose */}
        {/* Last updated on: {frontMatter.gitTimestamp} */}
      </div>
    );
  },
  primaryHue: {
    dark: 182,
    light: 192
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();
    const gitTimestampString = frontMatter.gitTimestamp;
    const realTitle = title !== "Index" ? title : "ICON Documentation";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: realTitle,
      image: "https://docs.icon.community/images/link-preview.jpg",
      author: {
        "@type": "Organization",
        name: "ICON Foundation",
        url: "https://www.icon.foundation/"
      },
      publisher: {
        "@type": "Organization",
        name: "ICON Foundation",
        logo: {
          "@type": "ImageObject",
          url: "https://docs.icon.community/images/icon-foundation-logo.svg"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://docs.icon.community/"
      },
      datePublished: "2023-07-31",
      dateModified: gitTimestampString,
      description:
        "ICON Documentation - General purpose blockchain ecosystem with a focus on linking different blockchains together"
    };

    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.ico"
          hrefLang="en"
        />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="ICON Documentation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
        <meta name="twitter:site:domain" content="docs.icon.community" />
        <meta name="twitter:url" content="https://docs.icon.community" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </>
    );
  },
  editLink: {
    text: "Contribute directly to this page →"
  },
  feedback: {
    content: "Feedback or questions about this page? Post them here →",
    labels: "feedback"
  },
  logo: () => {
    return (
      <Image
        src="/images/icon-documentation-over-white.svg"
        height="50"
        width="240"
        alt={"ICON logo"}
      />
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (title === "Cross-chain Communication" || title === "Develop on ICON Chain" || title === "Welcome" || title === "Operate ICON" || title === "Advanced Topics" || title === "Contact") {
        return <span className="py-4 ">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  // banner: {
  //   key: 'banner-2',
  //   text: <span>💬 Help us improve this documentation and drop us some <Link className="font-bold" href='/contact'>feedback</Link>!</span>
  // },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: (
      <div className="grid w-full grid-cols-2 sm:grid-cols-3">
        <div className="flex flex-col px-2">
          <h3 className="font-bold">Ecosystem</h3>
          <Link className='text-sm ' href="https://forum.icon.community/">Forum</Link>
          <Link className='text-sm'  href="https://tracker.icon.community/">ICON Tracker</Link>
          <Link className='text-sm'  href="https://xcallscan.xyz/">Cross-chain Tracker</Link>
          <Link className='text-sm'  href="https://icon.community/hanawallet/">Wallet</Link>
        </div>
        <div className="flex flex-col px-2">
          <h3 className="font-bold">Resources</h3>
          <Link className='text-sm'  href="https://icon.community/branding-kit/">Branding Kit</Link>
          <Link className='text-sm'  href="https://icon.community/glossary/">Glossary</Link>
        </div>
        <div className="flex flex-col px-2">
          <h3 className="font-bold">Community</h3>
          <Link className='text-sm'  href="https://icon.community/icondiscord/">Discord</Link>
          <Link  className='text-sm' href="https://twitter.com/helloiconworld">X (Twitter)</Link>
          <Link  className='text-sm' href="https://coinmarketcap.com/community/profile/ICONNetwork">CoinMarketCap</Link>
          <p className="text-sm opacity-100">-</p>
          <p className='text-sm' >© ICON Foundation 2024</p>
        </div>
      </div>
    )
  },
  faviconGlyph: "🌐",
  navbar: {
    extraContent: (
      <a className="bg-black" href='https://icon.community/'>
        <img src='/images/back-to-icon-button.png' alt='Back to ICON button' width='156' height='42'/>
      </a>
    )
  }
};

export default config;
