import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);
  //送信中かどうかを管理

  const validate = () => {
    const newErrors = {};
    //↑バリデーションとして生成されたエラーのオブジェクト

    if (!name) {
      newErrors.name = "お名前は必須です";
    } else if (name.length >= 30) {
      newErrors.name = "30文字以内で入力してください";
    }

    if (!email) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //空白以外の文字が1回以上続き、その後@があり、その後再び空白以外の文字が1回以上続き、最後に.があり再び空白以外の文字が1回以上続く。test(email)は、emailがこのパターンにマッチするかどうかをチェック、!はその結果を否定するので、もしemailがこのパターンにマッチしない場合に、ifブロック内のコードが実行
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!message) {
      newErrors.message = "本文は必須です";
    } else if (message.length >= 500) {
      newErrors.message = "本文は500文字以内で入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    //↑エラーが存在しない場合trueを返し、エラーが存在する場合にはfalseを返す。これにより、バリデーションが成功したかどうかを判定。この二つはセット
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      //フォームの送信処理をここに記述
      setSubmitting(true);
      console.log("送信OK");

      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          }
        );
        if (res.ok) {
          alert("送信しました");
          handleClear();
        } else {
          alert("送信に失敗しました");
        }
      } catch (error) {
        alert("送信中にエラーが発生しました");
      } finally {
        setSubmitting(false);
      }
    }
  };
  //clearButton
  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <>
      <h2 className="w-2/4 mx-auto p-6 font-bold text-2xl">問合わせフォーム</h2>
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
        <div className="name flex justify-between mx-16 mb-16 h-full">
          <label htmlFor="name">お名前</label>
          <div className=" w-3/4 h-6">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              className="border border-black w-full p-3"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
        </div>
        <div className="email flex justify-between m-16 h-full">
          <label htmlFor="email">メールアドレス</label>
          <div className=" w-3/4 h-6">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className="border border-black w-full p-3"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>
        <div className="message flex  justify-between m-16 h-full">
          <label htmlFor="message">本文</label>
          <div className=" w-3/4">
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitting}
              className="block border border-current w-full h-48  p-3"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className="block mx-4 py-3 px-4 rounded-xl bg-slate-700 text-white"
          >
            送信
          </button>
          <button
            onClick={handleClear}
            disabled={submitting}
            className="block mx-4 py-3 px-4 rounded-xl bg-gray-500 text-white"
          >
            クリア
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
