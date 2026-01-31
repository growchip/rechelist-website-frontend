import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";
import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Post } from "@/types/blog";

type BlogsHomeProps = {
  blogs: Post[];
};

const BlogsHome: React.FC<BlogsHomeProps> = ({ blogs }) => {
  return (
    <div className="mt-sectionGap">
      <Wrapper>
        <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
          <SectionHeader
            mainText="Recent Blogs"
            subText="Explore Insights & Updates"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gapLarge">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_3px_10px_rgba(0,123,255,0.1)] overflow-hidden flex flex-col hover:shadow-[0_3px_20px_rgba(0,123,255,0.2)] transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-56 lg:h-[18.518rem] ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${blog.image}`}
                    alt={blog.name}
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover p-4 rounded-3xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-gapLarge p-5">
                  <div className="flex flex-col flex-grow gap-gapSmall">
                    <p className="text-sm text-grayCustom2">
                      {format(new Date(blog.created_at), "MMM dd, yyyy")}
                    </p>
                    <Link href={`/blog/${blog.slug}`}>
                      <h3
                        className="text-lg font-semibold text-gray-900 line-clamp-2"
                        title={blog.name}
                      >
                        {blog.name}
                      </h3>
                    </Link>

                    <p className="text-sm text-grayCustom1 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                  <Button
                    type="link"
                    href={`/blog/${blog.slug}`}
                    text="Read More"
                    className="w-fit text-white text-fontDesk px-4 py-2 rounded-full transition-all duration-300 bg-primary hover:opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogsHome;

//------------------------EXTRA DATA--------------------------------
// import blogsOne from "@/images/blogs-home-one.png";
// import blogsTwo from "@/images/blogs-home-two.png";
// import blogsThree from "@/images/blogs-home-three.png";
// const blogsDummyData = [
//   {
//     image: blogsOne,
//     date: "March 31, 2025",
//     title: "Reliable Contract Manufacturing for Skin Care",
//     content:
//       "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
//     url: "#",
//   },
//   {
//     image: blogsTwo,
//     date: "April 31, 2025",
//     title: "Reliable Contract Manufacturing for Skin",
//     content:
//       "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin",
//     url: "#",
//   },
//   {
//     image: blogsThree,
//     date: "June 31, 2025",
//     title: "Reliable Contract Manufacturing for Skin Care",
//     content:
//       "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
//     url: "#",
//   },
//   {
//     image: blogsThree,
//     date: "June 31, 2025",
//     title: "Reliable Contract Manufacturing for Skin Care",
//     content:
//       "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
//     url: "#",
//   },
// ];
