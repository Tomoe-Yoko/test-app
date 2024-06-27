import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/post";

const Page01 = () => {
  // 表示したい記事のIDを指定します
  const postIdToDisplay = 1;

  // 指定したIDの記事を取得します
  const post = posts.find((p) => p.id === postIdToDisplay);

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnailUrl} alt={post.title} />
      <p> {new Date(post.createdAt).toLocaleDateString()}</p>
      <div>
        <ul>
          {post.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <div>{renderContent(post.content)}</div>
    </div>
  );
};

const renderContent = (content) => {
  const paragraphs = content
    .split("<br/>")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
};

export default Page01;
