
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Shreya Maurya. I started programming in 2020, at the age of 18, and
          since then I have created some projects.

        </p>
        <p>
          I&apos;m passionate about building cool websites and I love
          sharing the things I learn with my friends.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
          {/* I also have experience with Android development but have stopped
          working with it a few years ago. */}
           I prefer web development because we can use a modern responsive website on almost every device and reach the whole world with it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/SiriusAlpha96/ai-fusion-hub"
              className="text-primary hover:underline"
            >
              Ai-Fusion Hub
            </a>{" "}
            - An -AI tools to generate code, images, 3-second short videos, and music clips.
          </li>
          <li>
            <Link
              href="https://github.com/SiriusAlpha96/next-ai-note-app"
              className="text-primary hover:underline"
            >
              Ai Note App
            </Link>{" "}
            - An AI Note app that provide the information.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love to do crafting. I also enjoy reading books and going out
          sometimes. I think having hobbies other than coding is important for
          mental health.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
  
      </section>
    </section>
  );
}