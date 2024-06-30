//https://tailwindcss.com/docs/utility-first

import React from "react";
import { posts } from "../data/post";
import { useParams } from "react-router-dom";

const Page = () => {
  // 表示したい記事のIDを指定
  const { id } = useParams();

  // 指定したIDの記事を取得
  const post = posts.find((p) => p.id === Number(id));
  console.log(id);
  // if (!post) {
  //   return <div>記事が見つかりませんでした</div>;
  // }
  return post ? (
    <div className="w-9/12 mx-auto my-10 max-w-screen-md">
      {/* <h2 className="p-6 font-bold text-xl">{post.title}</h2> */}
      <img src={post.thumbnailUrl} alt={post.title} />
      <div className="flex mt-4">
        <p> {new Date(post.createdAt).toLocaleDateString()}</p>
        <div>
          <ul className="flex">
            {post.categories.map((category, index) => (
              <li
                key={index}
                className="p-1 m-1 text-blue-700 border border-solid border-blue-700 rounded"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">{renderContent(post.content)}</div>
    </div>
  ) : (
    <div>記事が見つかりませんでした。</div>
  );
};

const renderContent = (content) => {
  const paragraphs = content.split("<br/>");
  return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
};

export default Page;
