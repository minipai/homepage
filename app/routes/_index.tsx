import type { MetaFunction } from "@remix-run/node";
import { IconSquareCheckFilled } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello" },
    { name: "description", content: "Hello, I am Art Pai" },
  ];
};

export default function Index() {
  const skills = ["React", "Redux", "GraphQL", "TypeScript"];

  return (
    <div className="bg-slate-800 text-slate-100 min-h-screen p-10 source-code-pro">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center">
          <h1 className="noto-serif-bold text-[4rem] mt-20">
            Hello, my name is Art Pai
          </h1>
          <p className="text-[2.5rem] my-10 text-slate-500">
            I am a style coder
          </p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-slate-700 px-3 py-3 rounded-lg flex gap-3 items-center justify-between"
            >
              <span className="pl-2 text-xl">{skill}</span>
              <IconSquareCheckFilled className="text-green-500" size={32} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
