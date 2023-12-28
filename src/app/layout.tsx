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
        <meta name="apple-mobile-web-app-title" content="Info Hub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Info Hub  | Gen-Z Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="manifest"
          content="https://trendingstuffs.vercel.app/manifest.json"
        />
        <meta
          name="google-site-verification"
          content="P87XQ14dd_vM4ABrQLpLUhBIoPcvwWUKiOH0eMVnYy4"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="referrer" content="no-referrer" />
        <meta name="shortlink" content="https://trendingstuffs.vercel.app" />
        <meta name="url" content="https://trendingstuffs.vercel.app" />
        <meta
          name="identifier-URL"
          content="https://trendingstuffs.vercel.app"
        />
        <meta name="category" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        <meta name="shortcut icon" content="/favicon.png" />

        {/* alternates */}
        <link rel="canonical" href="https://trendingstuffs.vercel.app" />
        <link rel="alternate" href="https://trendingstuffs.vercel.app" />
        <link
          rel="alternate"
          href="https://trendingstuffs.vercel.app"
          hrefLang="en-US"
        />

        {/* formatDetection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="email=yes" />
        <meta name="format-detection" content="address=no" />

        {/* generator, refferer, authors, creators, publisher, application Name */}
        <meta name="generator" content="Info Hub" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="referrer" content="no-referrer" />
        <meta name="application-name" content="Info Hub" />
        <meta name="author" content="Toluwalope Akinkunmi" />
        <meta name="apple-mobile-web-app-title" content="Info Hub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="creator" content="Toluwalope Akinkunmi" />
        <meta name="publisher" content="Info Hub" />

        <meta
          name="keywords"
          content="Technology trends, Culture exploration, Creative intersection, Podcast hub, Blogging insights, Innovation spotlight, Digital creativity, Trend analysis, Content curation, Future trends, Emerging technologies, Design inspiration, Thought leadership, Information hub, Trending topics, Cultural impact, Creative expression, Tech and culture, Podcast discussions, Blogging community, Digital storytelling, Creative perspectives, Technology insights, Cultural commentary, Podcast highlights, Blogging trends, Innovative ideas, Trendsetting content, Intersectional content, Digital exploration, Cultural evolution, Creative technology, Trendwatching, Podcast excellence, Blogging resources, Tech trends roundup, Cultural diversity, Creative visionaries, Innovation junction, Digital convergence, Trend interpretation, Cultural narratives, Creative discussions, Tech and creativity, Podcast diversity, Blogging insights, Futuristic concepts, Trend analysis, Intersectional dialogues, Digital creativity showcase, Culture and tech fusion, Creative insights, Trendsetting ideas, Podcast exploration, Blogging excellence, Tech innovation hub, Cultural reflections, Creative perspectives, Trendspotting, Digital storytelling, Cultural impact analysis, Tech and creativity synergy, Podcast community, Blogging trends, Innovative thinking, Trendsetting content, Intersectional narratives, Digital exploration, Cultural evolution, Creative technology showcase, Trendwatching insights, Podcast excellence, Blogging resources, Tech trends roundup, Cultural diversity exploration, Creative visionaries spotlight, Innovation junction insights,   Digital convergence trends,  Trend interpretation discussions, Cultural narratives exploration,   Creative discussions platform.   Tech and creativity synergy, Podcast diversity showcase,  Blogging insights hub, Futuristic concepts exploration,   Trend analysis and insights, Intersectional dialogues platform, Digital creativity showcase,   Culture and tech fusion hub, Creative insights discussions,   Trendsetting ideas platform,   Podcast exploration hub,  Blogging excellence platform, Tech innovation hub,   Cultural reflections discussions,   Creative perspectives insights,  Trendspotting platform,   Digital storytelling hub,  Cultural impact analysis discussions,  Tech and creativity synergy insights"
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
