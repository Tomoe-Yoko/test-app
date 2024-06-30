import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/post";

export default function Home() {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="w-2/4 my-12 mx-auto p-8 outline outline-1"
          >
            <Link to={`/${post.id}`}>
              {/* //URL */}
              <div className="flex justify-between items-center">
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                <div className="flex justify-between items-center">
                  {post.categories.map((category, index) => (
                    <div
                      key={index}
                      className="text-sm p-1 text-blue-700 border border-solid border-1 border-blue-700 rounded-md mx-1"
                    >
                      {category}
                    </div>
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
