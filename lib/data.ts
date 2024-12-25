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

/*
Use nextjs 15, react, tailwind css, shadcn if necessary

app/layout.tsx 
app/(site)/page.tsx 
app/(site)/projects/page.tsx 
app/(site)/experience/page.tsx 
app/(site)/contacts/page.tsx

components/
- Sidebar.tsx

*/
