'use client'

import { motion } from "framer-motion";
import { barsItem } from "../types";
import '../styles/loading.css'

export default function LoadingScreen() {
  const bars: barsItem[] = [
    {id:1, delay: "delay-0"},
    {id:2, delay: "delay-200"},
    {id:3, delay: "delay-400"},
    {id:4, delay: "delay-600"},
    {id:5, delay: "delay-800"}, 
    {id:6, delay: "delay-1000"},
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">

      <div className="loader">
  <div className="square" id="sq1"></div>
  <div className="square" id="sq2"></div>
  <div className="square" id="sq3"></div>
  <div className="square" id="sq4"></div>
  <div className="square" id="sq5"></div>
  <div className="square" id="sq6"></div>
  <div className="square" id="sq7"></div>
  <div className="square" id="sq8"></div>
  <div className="square" id="sq9"></div>
</div>
    </div>
  );
}