import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div
              className={
                banner.image_enable
                  ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                  : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
              }
            >
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mb-6 mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              {/* <br /> */}
              <Link
                className="btn btn-primary mb-6 md:ml-5"
                target="_blank"
                href="https://drive.google.com/file/d/16aq6VgNWwSKscakRptxwLE0qEhWr9LSn/view"
              >
                Download Resume
              </Link>
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className={`${styles.animation} mx-auto object-contain `}
                  src={banner.image}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
            Website Projects
          </h1>

          <div className="mt-4 text-center text-gray-500 dark:text-gray-300">
            In my portfolio, I proudly feature select projects completed during
            my tenure at company Ive work. <br />
            These projects exemplify my contributions to real-world applications
            and demonstrate my ability to deliver high-quality solutions in a
            professional setting
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <a href=" https://www.pragmanila.com/" target="_blank">
              <div className="group h-96 cursor-pointer overflow-hidden rounded-lg bg-[url('/images/website/Pragmanila_Website.png')] bg-cover">
                <div className="flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                    Pragmanila Website
                  </h2>
                  <p className="mt-2 text-lg  tracking-wider text-gray-100 ">
                    Pragmatic Innovations, Straightforward Solutions to Propel
                    Your Business
                  </p>
                </div>
              </div>
            </a>

            <Link href="http://orcaconsult.ph/" target="_blank">
              <div className="group h-96 cursor-pointer overflow-hidden rounded-lg bg-[url('/images/website/OrcaWebsite.png')] bg-cover ">
                <div className="flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                    Orca Website
                  </h2>
                  <p className="mt-2 text-lg  tracking-wider text-gray-100 ">
                    Guiding Your Business to Success Expert Consulting and
                    Advisory Services for Business Excellence
                  </p>
                </div>
              </div>
            </Link>

            <a href=" https://korg.ph/" target="_blank">
              <div className="group h-96 cursor-pointer overflow-hidden rounded-lg bg-[url('/images/website/KorgWebsite.png')] bg-cover">
                <div className="flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                    Korg Website
                  </h2>
                  <p className="mt-2 text-lg  tracking-wider text-gray-100 ">
                    Music & Audio Solutions & Services, Inc. is the authorized
                    exclusive distributor of KORG, VOX, SEQUENZ, and SAKAE
                    products in the Philippines
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
