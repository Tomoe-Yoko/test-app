import React from "react";
import { posts } from "../data/post";

export default function Home() {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="postwrap">
            <a href="">
              <div className="flex">
                <p> {new Date(post.createdAt).toLocaleDateString()}</p>
                <div className="categories flex">
                  {post.categories.map((category) => {
                    return <div>{category}</div>;
                  })}
                </div>
              </div>
              <h2>{post.title}</h2>
              <p>{renderContent(post.content)}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
const renderContent = (content) => {
  const homeContent = content.slice(0, 24);
  return `${homeContent}…`;
};
