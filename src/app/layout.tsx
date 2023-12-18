"use client";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/solid.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/all.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/brands.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/regular.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/fontawesome.css"
        />
        <link
          rel="icon"
          href="https://https://trendingstuffs.vercel.app/assets/Memoji/male/Memoji-1.png"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="https://https://trendingstuffs.vercel.app/assets/Memoji/female/Memoji-1.png"
          type="image/x-icon"
        />

        {/* META TAGS */}
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Toluwalope Akinkunmi" />
        <meta name="apple-mobile-web-app-title" content="TrendHub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="TrendHub  | Gen-Z Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="P87XQ14dd_vM4ABrQLpLUhBIoPcvwWUKiOH0eMVnYy4"
        />

        <meta
          name="keywords"
          content="culture, creativity, technology, TrendHub, newsletters, podcasts, blogs, Gen Z, content trends, creative company, inclusive culture, global collective, cultural engineers, brand marketing, communications, diverse mediums, media, authentic connections, cultural conversations, progress, trailblazing, future, boundless creativity, collective empowerment, vanguards, inspiration, showcase, creativity from around the globe, peak creativity, Gen-Z Tales, express, thoughts, opinions, words, central hub, stay updated, latest content trends, intuitive platform, explore, discover, stay updated, TrendHub website, TrendHub hub, TrendHub Gen Z, TrendHub culture, TrendHub creativity, TrendHub technology, TrendHub newsletters, TrendHub podcasts, TrendHub blogs, TrendHub content trends, TrendHub creative company, TrendHub inclusive culture, TrendHub global collective, TrendHub cultural engineers, TrendHub brand marketing, TrendHub communications, TrendHub diverse mediums, TrendHub media, TrendHub authentic connections, TrendHub cultural conversations, TrendHub progress, TrendHub trailblazing, TrendHub future, TrendHub boundless creativity, TrendHub collective empowerment, TrendHub vanguards, TrendHub inspiration, TrendHub showcase, TrendHub best of the best, TrendHub creativity from around the globe, TrendHub peak creativity, Gen-Z Tales website, Gen-Z Tales hub, Gen-Z Tales Gen Z, Gen-Z Tales culture, Gen-Z Tales creativity, Gen-Z Tales technology, Gen-Z Tales newsletters, Gen-Z Tales podcasts, Gen-Z Tales blogs, Gen-Z Tales content trends, Gen-Z Tales creative company, Gen-Z Tales inclusive culture, Gen-Z Tales global collective, Gen-Z Tales cultural engineers, Gen-Z Tales brand marketing, Gen-Z Tales communications, Gen-Z Tales diverse mediums, Gen-Z Tales media, Gen-Z Tales authentic connections, Gen-Z Tales cultural conversations, Gen-Z Tales progress, Gen-Z Tales trailblazing, Gen-Z Tales future, Gen-Z Tales boundless creativity, Gen-Z Tales collective empowerment, Gen-Z Tales vanguards, Gen-Z Tales inspiration, Gen-Z Tales showcase, Gen-Z Tales best of the best, Gen-Z Tales creativity from around the globe, Gen-Z Tales peak creativity, express thoughts in words, central hub for content trends, intuitive platform for exploration, discover latest content trends, TrendHub SEO, creative platform, cultural intersection, creative technology, TrendHub branding, digital media, authentic content, cultural impact, creative community, technology trends, global connectivity, online hub, creative expression, cultural influencers, technology enthusiasts, TrendHub updates, creative discussions, cultural insights, technology innovations, blog updates, podcast releases, newsletter subscriptions, stay informed, cultural diversity, creative industries,technology landscape, TrendHub news, Gen Z lifestyle, digital creativity, content creation, interactive platform, engage with content, share opinions, connect with community, latest trends in culture, creativity, and technology."
        />
      </head>
      <body className={`${raleway.className}`}>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
