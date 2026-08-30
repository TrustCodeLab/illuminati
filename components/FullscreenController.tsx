"use client";

import { useEffect, useState, useCallback } from "react";

export default function FullscreenController() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  // Cross-browser request fullscreen helper
  const enterFullscreen = useCallback(async () => {
    try {
      const docEl = document.documentElement as HTMLElement & {
        webkitRequestFullscreen?: () => Promise<void>;
        mozRequestFullScreen?: () => Promise<void>;
        msRequestFullscreen?: () => Promise<void>;
      };

      if (docEl.requestFullscreen) {
        await docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        await docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        await docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        await docEl.msRequestFullscreen();
      }
      setIsFullscreen(true);
      setShowPrompt(false);
    } catch {
      // Browser blocked without gesture or in iframe
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      const doc = document as Document & {
        webkitExitFullscreen?: () => Promise<void>;
        mozCancelFullScreen?: () => Promise<void>;
        msExitFullscreen?: () => Promise<void>;
      };

      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
      setIsFullscreen(false);
    } catch {
      // Ignored
    }
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen || document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = Boolean(document.fullscreenElement);
      setIsFullscreen(active);
      if (active) {
        setShowPrompt(false);
      }
    };

    // Auto-enter fullscreen on user's first click/touch/keypress on the site
    const handleFirstInteraction = () => {
      if (!document.fullscreenElement) {
        enterFullscreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    window.addEventListener("click", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [enterFullscreen]);

  return (
    <>
      {/* Floating Esoteric Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        title={isFullscreen ? "Exit Fullscreen (Esc)" : "Expand to Fullscreen Clearance"}
        className="fixed bottom-3 right-6 z-40 flex items-center gap-1.5 px-2.5 py-1 bg-background/80 hover:bg-accent/20 border border-foreground/15 hover:border-accent/50 text-foreground/50 hover:text-accent font-mono text-[0.55rem] tracking-widest uppercase backdrop-blur-sm transition-all duration-300 shadow-md group cursor-pointer"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent group-hover:animate-pulse" />
        {isFullscreen ? (
          <>
            <svg
              className="w-3 h-3 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9L4 4m0 0l5 0m-5 0l0 5M15 9l5-5m0 0l-5 0m5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0-5M15 15l5 5m0 0l-5 0m5 0l0-5" />
            </svg>
            <span>[ EXIT ⛶ ]</span>
          </>
        ) : (
          <>
            <svg
              className="w-3 h-3 text-foreground/60 group-hover:text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>[ FULLSCREEN ⛶ ]</span>
          </>
        )}
      </button>

      {/* Subtle First-Launch Prompt if not yet in fullscreen */}
      {showPrompt && !isFullscreen && (
        <div
          onClick={enterFullscreen}
          className="fixed top-16 right-6 z-50 px-3 py-1.5 bg-background/95 border border-accent/40 text-accent font-mono text-[0.6rem] tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(138,31,31,0.2)] animate-pulse cursor-pointer hidden sm:flex items-center gap-2"
        >
          <span className="w-1 h-1 rounded-full bg-accent animate-ping" />
          <span>Click anywhere to activate Fullscreen Clearance</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowPrompt(false);
            }}
            className="text-foreground/40 hover:text-foreground ml-1"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
