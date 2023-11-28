"use client";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import theme from "@/tailwind-theme";
import { useMode } from "@/components/mode-context";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { mode, setMode } = useMode();
  const { colors } = theme;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-[48px] h-[28px] rounded-full overflow-hidden bg-primary-dark dark:bg-primary-light" />
  }

  return (
    <DarkModeToggle
      mode={mode}
      dark=""
      light=""
      size="sm"
      activeTrackColor={colors.primary.dark}
      activeTrackColorOnHover={colors.secondary.light.off}
      activeTrackColorOnActive="#cbd5e1"
      inactiveTrackColor={colors.primary.light}
      inactiveTrackColorOnHover={colors.primary.light}
      inactiveTrackColorOnActive="#0f172a"
      activeThumbColor={colors.secondary.dark.off}
      inactiveThumbColor={colors.secondary.light.off}
      onChange={(mode) => {
        console.log(mode);
        setMode(mode);
      }}
    />
  );
}
