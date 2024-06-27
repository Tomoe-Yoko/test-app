import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/post";

export default function Home() {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="postwrap">
            <Link to={`/${post.id}`}>
              {/* //URL */}
              <div className="flex">
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                <div className="categories flex">
                  {post.categories.map((category, index) => (
                    <div key={index}>{category}</div>
                  ))}
                </div>
              </div>
              <h2>{post.title}</h2>
              <p>{renderContent(post.content)}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Outlet /> */}
    </>
  );
}

const renderContent = (content) => {
  const homeContent = content.slice(0, 24);
  return `${homeContent}…`;
};
