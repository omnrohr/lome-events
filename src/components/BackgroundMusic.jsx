import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const userMutedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35; // Ambient background volume
    audio.loop = true;

    // Handle modern browser autoplay policy:
    // Start audio on user's first click/touch anywhere on the page
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      if (!userMutedRef.current && audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was blocked or user cancelled
          });
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      userMutedRef.current = true;
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          userMutedRef.current = false;
        })
        .catch((err) => {
          console.warn("Audio playback failed:", err);
        });
    }
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/sounds/ikoliks_aj-celebration-celebration-music-614567.mp3"
        preload="auto"
      />

      {/* Floating Luxury Audio Controller */}
      <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-40 flex items-center">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className={`group flex items-center gap-2.5 rounded-full border px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] ${
            isPlaying
              ? "border-gold/50 bg-ink/85 text-gold-bright hover:border-gold hover:shadow-[0_0_20px_rgba(201,164,91,0.25)]"
              : "border-gold/25 bg-ink/80 text-muted hover:border-gold/60 hover:text-ivory"
          }`}
        >
          {/* Animated Equalizer Bars when playing, or static icon when muted */}
          {isPlaying ? (
            <div className="flex h-4 items-end gap-[3px]">
              <span className="w-[2.5px] rounded-full bg-gold-bright animate-eq-1" />
              <span className="w-[2.5px] rounded-full bg-gold animate-eq-2" />
              <span className="w-[2.5px] rounded-full bg-gold-bright animate-eq-3" />
              <span className="w-[2.5px] rounded-full bg-gold animate-eq-4" />
            </div>
          ) : (
            <VolumeX size={16} className="text-muted transition-colors group-hover:text-gold" />
          )}

          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gold leading-none">
              {isPlaying ? "Music On" : "Music Off"}
            </span>
            <span className="hidden sm:inline text-[8px] uppercase tracking-wider text-muted/70 leading-tight">
              LOME Ambience
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
