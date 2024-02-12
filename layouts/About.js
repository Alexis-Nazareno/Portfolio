import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <section className="section ">
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}
        {markdownify(title, "h1", "h1 text-left lg:text-[48px] mt-12")}

        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        <div className="row mt-24 grid-cols-2 gap-4 text-left lg:grid">
          <div className=" ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(education.title, "h2", "section-title mb-12")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className=" mb-7 " key={"degree-" + index}>
                    <h4 className="text-base lg:text-[25px]">
                      {degree.university}
                    </h4>
                    <p className="mt-2">{degree.content}</p>
                    <p className="mt-2">{degree.course}</p>

                    <p className="mt-2">{degree.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(experience.title, "h2", "section-title mb-12")}
              <div className="row">
                {experience.list.map((item, index) => (
                  <div
                    className="mb-5 text-lg font-bold text-dark  dark:text-darkmode-light"
                    key={"experience-" + index}
                  >
                    <h4 className="text-base dark:text-orange-500 lg:text-[25px]">
                      {item.description}
                    </h4>

                    <p className="mt-2">{item.work}</p>
                    <p className="font-strong mt-2 text-base">{item.date}</p>

                    <ul className="mt-3 text-base font-light">
                      <li className="mt-3 text-base font-light">{item.des1}</li>
                      <li className="mt-3 text-base font-light">{item.des2}</li>
                      <li className="mt-3 text-base font-light">{item.des3}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:mt-[-450px] ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              <h2 className="section-title mb-12"> Skills</h2>
              <div className="row">
                <ul className="grid grid-cols-2 gap-4  ">
                  <li className="text-md ml-7 list-disc font-bold">
                    Algorithms
                  </li>
                  <li className="text-md ml-7 list-disc font-bold">
                    Databases
                  </li>
                  <li className="text-md ml-7 list-disc font-bold">
                    Web Development
                  </li>
                  <li className="text-md ml-7 list-disc font-bold"> SDLC </li>
                  <li className="text-md ml-7 list-disc font-bold">
                    Problem-solving
                  </li>
                  <li className="text-md ml-7 list-disc font-bold">
                    Optimization
                  </li>
                  <li className="text-md ml-7 list-disc font-bold">Security</li>
                  <li className="text-md ml-7 list-disc font-bold"> Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
