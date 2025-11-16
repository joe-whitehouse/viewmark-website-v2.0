'use client';

import Script from 'next/script';

export default function Home() {
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
      <div className="relative w-full h-screen page-background">
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
          {/* Top right corner text */}
          <div className="absolute top-0 right-0 p-4">
            <a 
              href="https://x.com/viewmarkco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black text-lg hover:text-gray-500 transition-colors" 
              style={{ fontFamily: "'Neue Singular', sans-serif", fontWeight: 300 }}
            >
              @viewmarkco
            </a>
          </div>
          {/* Bottom left corner text */}
          <div className="absolute bottom-0 left-0 p-4 hidden md:flex items-center gap-2">
            <span 
              className="text-black text-lg" 
              style={{ fontFamily: "'Neue Singular', sans-serif", fontWeight: 500 }}
            >
              Viewmark
            </span>
            <span 
              className="text-gray-500 text-lg" 
              style={{ fontFamily: "'Neue Singular', sans-serif", fontWeight: 300 }}
            >
              Put your ads on viral clips
            </span>
          </div>
          {/* Bottom right corner button - left on mobile, right on desktop */}
          <div className="absolute bottom-0 left-0 md:left-auto md:right-0 p-4">
            <div className="relative">
              {/* Gradient blobs behind button */}
              <div className="button-blob button-blob-1"></div>
              <div className="button-blob button-blob-2"></div>
              <a 
                href="https://form.typeform.com/to/nT8Bw9sw"
                target="_blank"
                rel="noopener noreferrer"
                className="roll-button text-white px-3.5 py-1.5 rounded-full text-lg border-0 relative z-10 inline-block cursor-pointer"
                style={{ fontFamily: "'Neue Singular', sans-serif", fontWeight: 300 }}
              >
                <span className="roll-text-placeholder">Get early access</span>
                <span className="roll-text-wrapper">
                  <span className="roll-text-item">Get early access</span>
                  <span className="roll-text-item">Join our waitlist</span>
                </span>
              </a>
            </div>
          </div>
          {/* Your content goes here */}
        </div>
      </div>
    </>
  );
}

