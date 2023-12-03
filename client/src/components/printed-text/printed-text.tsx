import { SxProps, css, styled } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import setting from "./setting";
import { bounce } from "./bounce";
import { Operation, TextProps } from "./types";

const Text = styled("span")<TextProps>`
  border-right: 4px solid white;
  animation: ${({ flash }) =>
    flash === "false"
      ? "none"
      : css`
          ${bounce} 1s step-end infinite
        `};
`;

const PrintedText: React.FC<Props> = ({
  list,
  children,
  onStart,
  onFinish,
  timeShow,
  speedClean,
  speedTyping,
  delay,
  ...props
}) => {
  const [value, setValue] = useState<string>("");
  const [flash, setFlash] = useState<boolean>(true);

  const handleStart = useCallback(
    (item: string) => {
      onStart?.(item);
    },
    [onStart]
  );

  const handleFinish = useCallback(
    (item: string) => {
      onFinish?.(item);
    },
    [onFinish]
  );

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!list.length) {
      return;
    }

    let operation: Operation = "typing";
    let index = 0;
    let cursor = 0;
    handleFinish(list[index]);
    setValue(list[index]);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (operation === "show") {
        setFlash(true);
        if (elapsed >= (timeShow || setting.timeShow)) {
          startTimeRef.current = timestamp;
          operation = "clean";
        }
      }

      if (operation === "clean") {
        setFlash(false);
        if (elapsed >= (speedClean || setting.speedClean)) {
          startTimeRef.current = timestamp;
          if (cursor > 0) {
            cursor--;
            setValue(list[index].slice(0, cursor));
          } else {
            index = index + 1 > list.length - 1 ? 0 : ++index;
            cursor = 0;
            operation = "delay";
            setFlash(true);
            handleStart(list[index]);
          }
        }
      }

      if (operation === "delay") {
        if (elapsed >= (delay || setting.delay)) {
          startTimeRef.current = timestamp;
          operation = "typing";
        }
      }

      if (operation === "typing") {
        setFlash(false);
        if (elapsed >= (speedTyping || setting.speedTyping)) {
          startTimeRef.current = timestamp;
          cursor++;
          if (cursor <= list[index].length) {
            setValue(list[index].slice(0, cursor));
          } else {
            operation = "show";
            setFlash(true);
            handleFinish(list[index]);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [list, handleStart, handleFinish]);

  return (
    <Text {...props} flash={flash ? "true" : "false"}>
      {children}
      {value}
    </Text>
  );
};

export default PrintedText;

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  list: string[];
  sx?: SxProps;
  onStart?: (item: string) => void;
  onFinish?: (item: string) => void;
  timeShow?: number;
  speedClean?: number;
  speedTyping?: number;
  delay?: number;
}
