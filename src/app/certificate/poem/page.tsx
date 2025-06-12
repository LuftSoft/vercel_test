"use client";
import { useState } from "react";

export default function Page() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (password === "thotangthanhtuyen") {
      setShowCertificate(true);
    } else {
      alert("Sai mật khẩu rồi, hehe!");
    }
  };
  return (
    <main>
      <div
        className="flex flex-col items-center justify-center min-h-screen h-screen"
        style={{ height: "100vh" }}
      >
        {!showCertificate && (
          <div className="w-full max-w-4xl px-4">
            <h1 className="text-3xl font-bold mb-4">Em là ai, hehe!</h1>
            <input
              type="password"
              style={{ border: "2px solid black", height: "2rem" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <button
              className="ml-2 px-8 py-1 bg-gray-500 text-white rounded"
              onClick={handleSubmit}
            >
              oki
            </button>
          </div>
        )}
        {showCertificate && (
          <div className="w-full max-w-4xl px-4">
            <div className="inline-block">
              <h1 className="text-3xl font-bold mb-4">Ngẫu hứng</h1>
              <p>Hay cười, hay dỗi</p>
              <p>Cũng rất hay cười</p>
              <p>Ngỡ rằng đang giận</p>
              <p>Ra là giỡn thôi.</p>
              <br />
              <p>Mong em vui khỏe</p>
              <p>Ăn, ngủ đúng giờ</p>
              <p>Học hành chăm chỉ</p>
              <p>Hoàn thành ước mơ!</p>
              <br />
              <p
                className="text-right"
                style={{ fontStyle: "italic", fontSize: "0.8rem" }}
              >
                10/6/2025
              </p>
              <p className="text-right">Tân Ngọc.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
