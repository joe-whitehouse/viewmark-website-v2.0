'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Prevent bottom overscroll on mobile (allow pull-to-refresh at top)
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      let lastTouchY = 0;

      const handleTouchStart = (e: TouchEvent) => {
        lastTouchY = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchY - lastTouchY;
        const currentScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const isAtBottom = currentScrollY + clientHeight >= scrollHeight - 1;
        const isScrollingDown = deltaY < 0;

        // Only prevent scrolling down past the bottom (allow pull-to-refresh at top)
        if (isAtBottom && isScrollingDown) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  return (
    <>
      <Script
        id="unicorn-studio-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `,
        }}
      />
      <div className="relative w-full h-screen page-background overflow-hidden md:overflow-visible">
        {/* Unicorn Studio Interactive Background Container - positioned behind all content */}
        <div 
          id="unicorn-studio-background"
          className="fixed inset-0 w-full h-full z-0"
          style={{ pointerEvents: 'none' }}
        >
          <div 
            data-us-project="T5hJK2Mawlc5GDXCrdsA" 
            className="w-full h-full"
          />
        </div>
        
        {/* Main content area - positioned above background */}
        <div className="relative z-10 w-full h-full">
          {/* Fixed Header - invisible wrapper for mobile, absolute for desktop */}
          <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none md:absolute md:z-20 md:pointer-events-auto md:top-0 md:left-0 md:right-0">
            {/* Top right corner text */}
            <div className="absolute top-0 right-0 p-4 pointer-events-auto">
              <a 
                href="https://x.com/viewmarkco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-lg hover:text-gray-500 transition-colors" 
                style={{ fontFamily: "'Neue Singular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 300 }}
              >
                @viewmarkco
              </a>
            </div>
          </header>

          {/* Fixed Footer - invisible wrapper for mobile, absolute for desktop */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none md:absolute md:z-20 md:pointer-events-auto md:bottom-0 md:left-0 md:right-0">
            {/* Bottom left corner text */}
            <div className="absolute bottom-0 left-0 p-4 hidden md:flex items-center gap-2 pointer-events-auto">
              <span 
                className="text-black text-lg" 
                style={{ fontFamily: "'Neue Singular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 500 }}
              >
                Viewmark
              </span>
              <span 
                className="text-gray-500 text-lg" 
                style={{ fontFamily: "'Neue Singular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 300 }}
              >
                Put your ads on viral clips
              </span>
            </div>
            {/* Bottom right corner button - left on mobile, right on desktop */}
            <div className="absolute bottom-0 left-0 md:left-auto md:right-0 p-4 pointer-events-auto">
              <div className="relative">
                {/* Gradient blobs behind button */}
                <div className="button-blob button-blob-1"></div>
                <div className="button-blob button-blob-2"></div>
                <a 
                  href="https://form.typeform.com/to/nT8Bw9sw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="roll-button text-white px-3.5 py-1.5 rounded-full text-lg border-0 relative z-10 inline-block cursor-pointer"
                  style={{ fontFamily: "'Neue Singular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 400 }}
                >
                  <span className="roll-text-placeholder">Get early access</span>
                  <span className="roll-text-wrapper">
                    <span className="roll-text-item">Get early access</span>
                    <span className="roll-text-item">Join our waitlist</span>
                  </span>
                </a>
              </div>
            </div>
          </footer>

          {/* Your content goes here */}
        </div>
      </div>
    </>
  );
}

