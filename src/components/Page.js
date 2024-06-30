//https://tailwindcss.com/docs/utility-first

import React, { useEffect, useState } from "react";
// import { posts } from "../data/post";
import { useParams } from "react-router-dom";

const Page = () => {
  // 表示したい記事のIDを指定
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  // 指定したIDの記事を取得
  const postId = post.find((p) => p.id === Number(id));
  console.log(id);
  //三項演算子（？）よりも早期リターンを使う！
  if (!postId) {
    return <div>記事が見つかりませんでした</div>;
  }
  return (
    <div className="w-9/12 mx-auto my-10 max-w-screen-md">
      <img src={postId.thumbnailUrl} alt={postId.title} />
      <div className="flex mt-4">
        <p> {new Date(postId.createdAt).toLocaleDateString()}</p>
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
      <div className="mt-4">{renderContent(postId.content)}</div>
    </div>
  );
};

const renderContent = (content) => {
  const paragraphs = content.split("<br/>");
  return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
};

export default Page;
