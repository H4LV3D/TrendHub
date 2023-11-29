import React, { use, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./audio.css";
import { useRouter } from "next/navigation";
import pageData from "@/data/index.json";

interface WaveformProps {
  url: string;
  link: number;
}

const Waveform: React.FC<WaveformProps> = ({ url, link }) => {
  const [playing, setPlaying] = useState(false);
  const waveformRef = useRef<WaveSurfer | null>(null);
  const router = useRouter();
  const { podcasts } = pageData;

  useEffect(() => {
    waveformRef.current = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#000",
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
    });

    if (waveformRef.current) {
      waveformRef.current.load(url);
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
        currentTime + 15
      ); // Ensure the new time is within the duration
      waveformRef.current.seekTo(newTime);
    }
  };

  const handleRewind = () => {
    if (waveformRef.current) {
      const currentTime = waveformRef.current.getCurrentTime();
      const newTime = Math.max(0, currentTime - 15);
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

  return (
    <div className="waveformContainer">
      <div id="waveform" className="waveform"></div>
      <div className="flex items-center space-x-6 justify-between md:w-3/4 mx-auto">
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
          className="flex justify-center items-center h-14 w-14 rounded-[50%] outline-none border-none bg-[#efefef] hover:bg-[#e0e0e0] "
          onClick={handlePlay}
        >
          <i
            className={`fas ${
              !playing ? "fa-play" : "fa-pause"
            } fa-2xl fa-fw text-black dark:text-white`}
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
