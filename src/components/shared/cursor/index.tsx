"use client";

import React, { useEffect, useState } from "react";

const Cursor: React.FC = () => {
  const [cursorState, setCursorState] = useState({
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
  });

  useEffect(() => {
    const { delay, endX, endY } = cursorState;

    const $dot = document.querySelector(".cursor-dot") as HTMLElement;
    const $outline = document.querySelector(
      ".cursor-dot-outline"
    ) as HTMLElement;

    $dot.style.opacity = "1";
    $outline.style.opacity = "1";

    let animationFrameId: number;

    const animateDotOutline = () => {
      const newX = cursorState._x + (endX - cursorState._x) / delay;
      const newY = cursorState._y + (endY - cursorState._y) / delay;

      $outline.style.top = `${newY}px`;
      $outline.style.left = `${newX}px`;

      setCursorState((prevState) => ({
        ...prevState,
        _x: newX,
        _y: newY,
      }));

      animationFrameId = requestAnimationFrame(animateDotOutline);
    };

    animateDotOutline();

    // Cleanup function
    return () => {
      // Cancel animation frame
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorState]);

  const handleCursorMovement = (e: MouseEvent) => {
    const { pageX, pageY } = e;

    setCursorState((prevState) => ({
      ...prevState,
      cursorVisible: true,
      endX: pageX,
      endY: pageY,
    }));

    const $dot = document.querySelector(".cursor-dot") as HTMLElement;
    $dot.style.top = `${pageY}px`;
    $dot.style.left = `${pageX}px`;
  };

  const toggleCursorSize = () => {
    const $dot = document.querySelector(".cursor-dot") as HTMLElement;
    const $outline = document.querySelector(
      ".cursor-dot-outline"
    ) as HTMLElement;

    if (cursorState.cursorEnlarged) {
      $dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      $outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      $dot.style.transform = "translate(-50%, -50%) scale(1)";
      $outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const toggleCursorVisibility = () => {
    const $dot = document.querySelector(".cursor-dot") as HTMLElement;
    const $outline = document.querySelector(
      ".cursor-dot-outline"
    ) as HTMLElement;

    if (cursorState.cursorVisible) {
      $dot.style.opacity = "1";
      $outline.style.opacity = "1";
    } else {
      $dot.style.opacity = "0";
      $outline.style.opacity = "0";
    }
  };

  useEffect(() => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        setCursorState((prevState) => ({
          ...prevState,
          cursorEnlarged: true,
        }));
        toggleCursorSize();
      });

      el.addEventListener("mouseout", () => {
        setCursorState((prevState) => ({
          ...prevState,
          cursorEnlarged: false,
        }));
        toggleCursorSize();
      });
    });

    document.addEventListener("mousedown", () => {
      setCursorState((prevState) => ({
        ...prevState,
        cursorEnlarged: true,
      }));
      toggleCursorSize();
    });

    document.addEventListener("mouseup", () => {
      setCursorState((prevState) => ({
        ...prevState,
        cursorEnlarged: false,
      }));
      toggleCursorSize();
    });

    document.addEventListener("mousemove", handleCursorMovement);

    document.addEventListener("mouseenter", () => {
      setCursorState((prevState) => ({
        ...prevState,
        cursorVisible: true,
      }));
      toggleCursorVisibility();
    });

    document.addEventListener("mouseleave", () => {
      setCursorState((prevState) => ({
        ...prevState,
        cursorVisible: false,
      }));
      toggleCursorVisibility();
    });

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleCursorMovement);
      document.removeEventListener("mouseenter", toggleCursorVisibility);
      document.removeEventListener("mouseleave", toggleCursorVisibility);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot-outline w-5 h-5 border border-gray-500 rounded-full absolute pointer-events-none z-[9999]"></div>
      <div className="cursor-dot w-3 h-3 bg-gray-500 rounded-full absolute pointer-events-none z-[9999]"></div>
    </>
  );
};

export default Cursor;
