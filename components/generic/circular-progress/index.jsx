"use client";
import Progress from "react-circle-progress-bar";

export default function CircularProgress(props) {
  return (
    <Progress
      {...props}
      reduction={0}
      hideBall
      gradient={[
        { stop: 0.0, color: "#A4238C" },
        { stop: 1, color: "#A4238C" },
      ]}
      strokeWidth={10}
    />
  );
}
