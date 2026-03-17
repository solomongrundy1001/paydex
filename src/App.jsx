import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { ThemeCtx } from "./context/ThemeContext";
import { C, solutionPages, servePages, platformPages } from "./constants";
import GenericPage from "./components/GenericPage";

import HomePage           from "./pages/HomePage";
import LoginPage          from "./pages/LoginPage";
import RequestAccessPage  from "./pages/RequestAccessPage";
import NotFoundPage       from "./pages/NotFoundPage";

// import { OurStoryPage, NewsroomPage, CaseStudiesPage } from "./pages/about";
import { OurStoryPage, LeadershipPage, NewsroomPage, CareersPage, CaseStudiesPage } from "./pages/about";
import { ContactPage, SystemStatusPage, OnboardingGuidePage } from "./pages/support";
// import { ContactPage, HelpCenterPage, SystemStatusPage, OnboardingGuidePage } from "./pages/support";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <HelmetProvider>
      <ThemeCtx.Provider value={{ dark, setDark }}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={C.teal} />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_NG" />
          <meta name="author" content="FlowPay Technologies Ltd" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            {/* Core Pages */}
            <Route path="/"               element={<HomePage />} />
            <Route path="/login"          element={<LoginPage />} />
            <Route path="/request-access" element={<RequestAccessPage />} />

            {/* Solutions — 6 pages, all via GenericPage template */}
            {solutionPages.map(p => (
              <Route key={p.path} path={p.path} element={
                <GenericPage seo={p.seo} tag={p.tag} title={p.title} subtitle={p.subtitle} features={p.features} />
              } />
            ))}

            {/* Who We Serve — 5 pages */}
            {servePages.map(p => (
              <Route key={p.path} path={p.path} element={
                <GenericPage seo={p.seo} tag={p.tag} title={p.title} subtitle={p.subtitle} features={p.features} />
              } />
            ))}

            {/* Platform — 5 pages */}
            {platformPages.map(p => (
              <Route key={p.path} path={p.path} element={
                <GenericPage seo={p.seo} tag={p.tag} title={p.title} subtitle={p.subtitle} features={p.features} />
              } />
            ))}

            {/* About */}
            <Route path="/about/our-story"    element={<OurStoryPage />} />
            <Route path="/about/leadership"   element={<LeadershipPage />} />
            <Route path="/about/newsroom"     element={<NewsroomPage />} />
            <Route path="/about/careers"      element={<CareersPage />} />
            <Route path="/about/case-studies" element={<CaseStudiesPage />} />

            {/* Support */}
            <Route path="/support/contact"          element={<ContactPage />} />
            {/* <Route path="/support/help-center"      element={<HelpCenterPage />} /> */}
            <Route path="/support/system-status"    element={<SystemStatusPage />} />
            <Route path="/support/onboarding-guide" element={<OnboardingGuidePage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeCtx.Provider>
    </HelmetProvider>
  );
}
