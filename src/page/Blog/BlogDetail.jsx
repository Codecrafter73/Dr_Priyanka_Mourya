import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import BreadCrumbs from "../../component/BreadCums";
import blog from '../../assets/blog/blog1.png'

const staticBlogData = {
  blogName: "The Benefits of Homeopathic Treatment",
  blogPhoto: {
    secure_url: "https://cdn.easyfrontend.com/pictures/blog/homeopathy_1.jpg",
  },
  blogDetail: `<p>Homeopathy is a natural and alternative form of medicine used by over 200 million people worldwide to treat both acute and chronic conditions. It is based on the principle of ‘like cures like,’ meaning that a substance that causes symptoms in large amounts can help treat the same symptoms when taken in very small, diluted doses.</p>

<p>Homeopathic remedies are derived from natural sources such as plants, minerals, and animal products. These substances undergo a process called potentization, where they are repeatedly diluted and shaken to enhance their healing properties while minimizing toxicity. This makes homeopathy a gentle yet effective form of treatment.</p>

<p>One of the key aspects of homeopathy is its holistic approach. Instead of merely suppressing symptoms, it aims to treat the root cause of an illness by stimulating the body’s natural healing processes. Homeopathy considers a person’s physical, emotional, and mental well-being to provide a personalized treatment plan.</p>

<p>Many people turn to homeopathy for conditions such as allergies, migraines, digestive disorders, skin problems, respiratory issues, and even stress-related illnesses. It is known for its minimal side effects, making it suitable for people of all ages, including children, pregnant women, and the elderly.</p>

<p>While homeopathy has been used for over 200 years, its effectiveness remains a topic of debate in modern medical science. Some studies and anecdotal evidence suggest positive results, while others argue that its effects are due to the placebo effect. Despite this, millions of people worldwide continue to use and trust homeopathy as a complementary or alternative form of healthcare.</p>
`
};

const staticAllBlogs = [
  {
    blogName: "Understanding Homeopathic Remedies",
    blogPhoto: { secure_url: "https://cdn.easyfrontend.com/pictures/blog/homeopathy_2.jpg" },
    description: "Learn how homeopathic medicines work and their holistic approach to healing.",
  },
  {
    blogName: "Why Homeopathy is Gaining Popularity?",
    blogPhoto: { secure_url: "https://cdn.easyfrontend.com/pictures/blog/homeopathy_3.jpg" },
    description: "Explore the growing acceptance of homeopathic treatments worldwide.",
  },
  {
    blogName: "Top 5 Homeopathic Medicines for Common Ailments",
    blogPhoto: { secure_url: "https://cdn.easyfrontend.com/pictures/blog/homeopathy_4.jpg" },
    description: "A guide to the most effective homeopathic treatments for everyday health issues.",
  }
];

const BlogItems = ({ allBlog }) => (
  <div className="border border-gray-200 p-4 rounded-lg shadow-lg bg-[#A6182E]">
    <h4 className="text-lg font-semibold mb-3 text-white uppercase tracking-wide border-b border-gray-300 pb-2">
      Related Blogs
    </h4>
    {allBlog.map((blog, i) => (
      <div className="flex items-start mb-3 bg-gray-100 hover:bg-gray-400 group rounded-md p-2" key={i}>
        <img src={blog.blogPhoto.secure_url} alt={blog.blogName} className="w-14 h-14 object-cover rounded-md shadow mr-3" />
        <div>
          <Link className="text-sm font-medium text-black hover:text-blue-500" to={`#`}>
            {blog.blogName}
          </Link>
          <p className="text-xs text-gray-500 mt-1">{blog.description.slice(0, 60)}...</p>
        </div>
      </div>
    ))}
  </div>
);

const Contents = ({ data }) => (
  <div>
    <img src={blog} alt="" className="max-h-[300px] w-full rounded-md object-cover" />
    <div className="opacity-75 leading-relaxed text-justify mt-6" dangerouslySetInnerHTML={{ __html: data.blogDetail }} />
  </div>
);

const SideBar = ({ data }) => <div><BlogItems allBlog={data} /></div>;

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog " },
    { label: staticBlogData.blogName },
  ];

  return (
    <div>
      <BreadCrumbs headText={staticBlogData.blogName} items={breadcrumbItems} />
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white text-zinc-900">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-6 lg:gap-10">
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <Contents data={staticBlogData} />
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <SideBar data={staticAllBlogs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;