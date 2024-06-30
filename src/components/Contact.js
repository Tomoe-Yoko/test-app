import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="w-2/4 mx-auto p-6 font-bold text-2xl">問合わせフォーム</h2>
      <form action="" className="w-2/4 mx-auto">
        <div className="name flex justify-between m-12">
          <label htmlFor="name">お名前</label>
          <div className=" w-3/4 h-6">
            <input
              id="name"
              type="text"
              className="border border-black w-full py-3"
            />
          </div>
        </div>
        <div className="email flex justify-between m-12">
          <label htmlFor="email">メールアドレス</label>
          <div className=" w-3/4 h-6">
            <input
              id="email"
              type="email"
              className="border border-black w-full py-3"
            />
          </div>
        </div>
        <div className="message flex  justify-between m-12">
          <label htmlFor="message">本文</label>
          <div className=" w-3/4">
            <textarea
              name="message"
              id="message"
              defaultValue={""}
              className="block border border-current w-full h-48"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="block mx-4 py-3 px-4 rounded-xl bg-slate-700 text-white"
          >
            送信
          </button>
          <button
            type="submit"
            className="block mx-4 py-3 px-4 rounded-xl bg-slate-700 text-white"
          >
            クリア
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
