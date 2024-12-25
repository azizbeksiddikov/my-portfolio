import fs from "fs";
import path from "path";

export function getPageData(page: string, lang: string = "en") {
  const filePath = path.join(process.cwd(), "data", lang, `${page}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getLayoutData(page: string, lang: string = "en") {
  const filePath = path.join(
    process.cwd(),
    "data",
    lang,
    `${page}_layout.json`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}