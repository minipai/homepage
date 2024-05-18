import type { MetaFunction } from "@remix-run/node";
import {
  IconSquareCheckFilled,
  IconSquareMinusFilled,
  IconSquareXFilled,
} from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello" },
    { name: "description", content: "Hello, I am Art Pai" },
  ];
};

export const headers = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate",
});

export default function Index() {
  const skills = [
    { name: "HTML/CSS/TS", status: "active" },
    { name: "React", status: "active" },
    { name: "Redux", status: "active" },
    { name: "Next.js", status: "active" },
    { name: "CSS Modules", status: "active" },
    { name: "Vitest", status: "active" },
    { name: "Express", status: "paused" },
    { name: "GraphQL", status: "paused" },
    { name: "RxJS", status: "paused" },
    { name: "MobX", status: "paused" },
    { name: "Sass", status: "paused" },
    { name: "Cypress", status: "paused" },
    { name: "PHP/Python/Ruby", status: "stopped" },
    { name: "Rails", status: "stopped" },
    { name: "AngularJS", status: "stopped" },
    { name: "BackboneJS", status: "stopped" },
    { name: "jQuery", status: "stopped" },
    { name: "CoffeeScript", status: "stopped" },
  ];

  return (
    <div className="bg-slate-800 text-slate-100 min-h-screen p-10 source-code-pro">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center">
          <h1 className="noto-serif-bold text-[2rem] md:text-[4rem] mt-20">
            Hello, my name is <span className="text-nowrap">Art Pai</span>
          </h1>
          <p className="text-[1.5rem] md:text-[2.5rem] my-10 text-slate-500">
            I am a style coder
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className={`bg-slate-700 px-3 py-3 rounded-lg flex gap-3 items-center justify-between hover:animate-pulse ${
                  {
                    active: "",
                    paused: "mt-1 opacity-60",
                    stopped: "mt-3 opacity-20",
                  }[skill.status]
                }`}
              >
                <span className="pl-2 text-xl">{skill.name}</span>
                {
                  {
                    active: (
                      <IconSquareCheckFilled
                        className="text-green-500"
                        size={32}
                      />
                    ),
                    paused: (
                      <IconSquareMinusFilled
                        className="text-yellow-500"
                        size={32}
                      />
                    ),
                    stopped: (
                      <IconSquareXFilled className="text-red-500" size={32} />
                    ),
                  }[skill.status]
                }
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10 text-slate-300">
            <p className="flex gap-2">
              <IconSquareCheckFilled className="text-green-500" size={24} />
              Actively using
            </p>
            <p className="flex gap-2">
              <IconSquareMinusFilled className="text-yellow-500" size={24} />
              Had been using
            </p>
            <p className="flex gap-2">
              <IconSquareXFilled className="text-red-500" size={24} />
              It&apos;s been a while
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
