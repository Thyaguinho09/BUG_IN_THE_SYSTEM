import { useState, useRef, useEffect } from "react";

export function cellKey(r, c) {
  return `${r},${c}`;
}

export function getLineCells(r0, c0, r1, c1) {
  const dr = r1 - r0, dc = c1 - c0;
  if (dr === 0 && dc === 0) return [{ r: r0, c: c0 }];
  const absDr = Math.abs(dr), absDc = Math.abs(dc);
  if (dr !== 0 && dc !== 0 && absDr !== absDc) return [{ r: r0, c: c0 }];
  const steps = Math.max(absDr, absDc);
  const sr = Math.sign(dr), sc = Math.sign(dc);
  const cells = [];
  for (let i = 0; i <= steps; i++) cells.push({ r: r0 + i * sr, c: c0 + i * sc });
  return cells;
}
