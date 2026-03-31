import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);

function encodePathSegments(value: string): string {
  return value
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export async function GET(request: NextRequest) {
  const folderParam = request.nextUrl.searchParams.get("folder");

  if (!folderParam) {
    return NextResponse.json({ images: [] });
  }

  const normalizedFolder = folderParam.replace(/\\/g, "/").replace(/^\/+/, "");

  if (!normalizedFolder || normalizedFolder.includes("..")) {
    return NextResponse.json({ images: [] }, { status: 400 });
  }

  const targetFolder = path.join(process.cwd(), "public", normalizedFolder);

  try {
    const stats = await fs.stat(targetFolder);
    if (!stats.isDirectory()) {
      return NextResponse.json({ images: [] });
    }

    const files = await fs.readdir(targetFolder, { withFileTypes: true });
    const encodedFolder = encodePathSegments(normalizedFolder);

    const images = files
      .filter((entry) => {
        if (!entry.isFile()) return false;
        const extension = path.extname(entry.name).toLowerCase();
        return IMAGE_EXTENSIONS.has(extension);
      })
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((fileName) => `/${encodedFolder}/${encodeURIComponent(fileName)}`);

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}