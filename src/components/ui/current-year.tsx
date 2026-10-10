"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getYear() {
  return new Date().getFullYear();
}

export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, () => 2026);
  return <>{year}</>;
}