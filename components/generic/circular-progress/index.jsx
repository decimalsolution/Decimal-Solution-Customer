"use client";
import { useEffect, useState } from "react";
import Progress from "react-circle-progress-bar";

export default function CircularProgress(props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.progress);
  }, [props.progress]);

  return (
    <Progress
      reduction={0}
      progress={value}
      hideBall
      transitionDuration={3}
      transitionTimingFunction="ease"
      gradient={[
        { stop: 0.0, color: "#A4238C" },
        { stop: 1, color: "#A4238C" },
      ]}
      strokeWidth={10}
    />
  );
}
