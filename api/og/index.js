import { ImageResponse } from "@vercel/og";
import React from "react";

export const config = { runtime: "edge" };

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "TeamYearng";
  const description =
    searchParams.get("descriptions") || "Professional System & App Development";

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 20,
          },
        },
        title
      ),
      React.createElement(
        "div",
        {
          style: {
            fontSize: 30,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
          },
        },
        description
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
