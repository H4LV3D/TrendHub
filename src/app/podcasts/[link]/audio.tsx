import React, { useContext, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./audio.css";
import { useRouter } from "next/navigation";
import pageData from "@/data/index.json";
import { ThemeContext } from "@/contexts/themeContext";

interface WaveformProps {
  url: string;
  link: number;
}

const Waveform: React.FC<WaveformProps> = ({ url, link }) => {
  const [playing, setPlaying] = useState(false);
  const waveformRef = useRef<WaveSurfer | null>(null);
  const router = useRouter();
  const { podcasts } = pageData;
  const { theme } = useContext(ThemeContext);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    waveformRef.current = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 70,
      progressColor: theme === "light" ? "#000" : "#d0d0d0",
      waveColor: theme === "light" ? "#EFEFEF" : "#333",
      cursorColor: "transparent",
    });

    if (waveformRef.current) {
      waveformRef.current.load(url);
    }

    if (waveformRef.current) {
      waveformRef.current.on("audioprocess", () => {
        const currentTime = waveformRef.current?.getCurrentTime() || 0;
        setCurrentTime(currentTime);
      });

      waveformRef.current.on("ready", () => {
        const duration = waveformRef.current?.getDuration() || 0;
        setDuration(duration);
      });
    }

    return () => {
      if (waveformRef.current) {
        waveformRef.current.destroy();
      }
    };
  }, [url]);

  const handlePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying);
    if (waveformRef.current) {
      waveformRef.current.playPause();
    }
  };

  const handleFastForward = () => {
    if (waveformRef.current) {
      const currentTime = waveformRef.current.getCurrentTime();
      const newTime = Math.min(
        waveformRef.current.getDuration(),
        currentTime + 10
      );
      waveformRef.current.seekTo(newTime);
    }
  };

  const handleRewind = () => {
    if (waveformRef.current) {
      const currentTime = waveformRef.current.getCurrentTime();
      const newTime = Math.max(0, currentTime - 10);
      waveformRef.current.seekTo(newTime);
    }
  };

  const handleNextTrack = () => {
    if (link === podcasts.length - 1) return;
    router.push(`/podcasts/${Number(link) + 1}`);
  };

  const handlePreviousTrack = () => {
    if (link === 2) return;
    router.push(`/podcasts/${link - 1}`);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="waveformContainer">
      <div id="waveform" className="waveform dark:text-neutral-600 mb-6"></div>

      <div className="timing flex justify-between items-center">
        <p className="">{formatTime(currentTime)} </p>
        <p className="">{formatTime(duration)} </p>
      </div>

      <div className="flex items-center space-x-6 justify-between md:w-3/4 mx-auto dark:text-neutral-400">
        <button
          className="flex justify-center items-center h-10 w-10 rounded-[50%] outline-none "
          onClick={handlePreviousTrack}
        >
          <i className={`fas fa-backward-step fa-lg fa-fw`}></i>
        </button>
        <button
          className="flex justify-center items-center h-12 w-12 rounded-[50%] outline-none "
          onClick={handleRewind}
        >
          <i className={`fas fa-rotate-left fa-xl fa-fw`}></i>
        </button>
        <button
          className="flex justify-center items-center h-16 w-16 rounded-[50%] outline-none border-none bg-[#efefef] dark:bg-neutral-800 dark:text-neutral-400 hover:bg-[#e0e0e0] "
          onClick={handlePlay}
        >
          <i
            className={`fas ${
              !playing ? "fa-play" : "fa-pause"
            } fa-2xl fa-fw text-black dark:text-white `}
          ></i>
        </button>
        <button
          className="flex justify-center items-center h-12 w-12 rounded-[50%] outline-none "
          onClick={handleFastForward}
        >
          <i className={`fas fa-rotate-right fa-xl fa-fw `}></i>
        </button>
        <button
          className="flex justify-center items-center h-10 w-10 rounded-[50%] outline-none "
          onClick={handleNextTrack}
        >
          <i className={`fas fa-forward-step fa-lg fa-fw`}></i>
        </button>
      </div>
      <audio id="track" src={url}></audio>
    </div>
  );
};

export default Waveform;
