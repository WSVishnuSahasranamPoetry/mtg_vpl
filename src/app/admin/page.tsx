"use client";

import { handle4Sell, handleWishList } from "@/lib/queries";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [buingOrSelling, setBuingOrSelling] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [card4sellName, setCard4sellName] = useState("");
  const [card4sellQuantity, setCard4sellQuantity] = useState("");
  const [card4sellURL, setCard4sellURL] = useState("");
  const [wishCardName, setWishCardName] = useState("");
  const [wishCardQuantity, setWishCardQuantity] = useState("");
  const [wishCardURL, setWishCardURL] = useState("");

  const [supabase] = useState(() => createBrowserSupabaseClient());

  const imgRef = useRef(null);

  supabase.auth.getSession().then((res) => {
    if (res.data.session) {
      setIsAdmin(true);
    }
  });

  return (
    <main className="flex text-white text-center flex-col min-h-[90vh] justify-center items-center">
      <Toaster />
      <div className="bg-black/60 h-full flex-col w-[80vw]">
        <div className="flex justify-center">
          <div className="flex-col">
            <h2 className="lg:text-6xl font-bold mt-4 text-white/70 text-2xl">
              Панель управления
            </h2>
            {!isAdmin ? (
              <>
                <div>
                  <Image
                    width={600}
                    height={600}
                    className="aimg bg-transparent"
                    alt="admin"
                    src="/admin-angel.png"
                    priority
                    quality={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="text-[0.2em] md:text-sm">
                  {`*Только VV17CH3R может управлять сайтом`}
                </div>
                <form
                  className="flex-col flex "
                  onSubmit={async (e) => {
                    e.preventDefault();

                    if (email !== "kravdovidova33@mail.ru") {
                      return toast.error("Неверные данные администратора");
                    } else {
                      const { data: sUpData, error: sUpErr } =
                        await supabase.auth.signInWithOtp({
                          email: email.trim(),
                          options: {
                            data: {
                              username,
                            },
                          },
                        });

                      if (sUpErr) {
                        return toast.error(sUpErr.message);
                      }
                    }

                    toast.success("Доступ предоставлен");
                  }}
                >
                  <input
                    className="mt-6 placeholder:text-black/50 text-black bg-white/50 mx-6 p-2"
                    value={email}
                    type="email"
                    placeholder="e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="mt-3 mx-6 placeholder:text-black/50 text-black bg-white/50 p-2"
                    value={username}
                    type="text"
                    placeholder="Имя"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <button className="bg-black/70 mx-7 mb-4 transition duration-200 p-2 hover:bg-gray-500/70 hover:text-black mt-3">
                    Подтвердить
                  </button>
                </form>
              </>
            ) : (
              <div className="flex items-center flex-col justify-center">
                <div className="flex ">
                  <button
                    className={`text-white/${
                      buingOrSelling ? "20" : "70"
                    } font-bold text-${
                      buingOrSelling ? "xl" : "sm"
                    } mr-4 transition duration-200 p-2 hover:bg-blue-400/50 mt-3`}
                    onClick={() => {
                      setBuingOrSelling(true);
                    }}
                  >
                    Карта на продажу
                  </button>
                  <button
                    className={`text-white/${
                      buingOrSelling ? "70" : "20"
                    } font-bold text-${
                      buingOrSelling ? "sm" : "xl"
                    } transition duration-200 p-2 hover:bg-blue-400/50 mt-3`}
                    onClick={() => {
                      setBuingOrSelling(false);
                    }}
                  >
                    Карта в WishList
                  </button>
                </div>

                {buingOrSelling ? (
                  <form className="flex text-black w-full flex-col" onSubmit={() => {}}>
                    
                    <input
                      className="mt-6 p-2 bg-white"
                      value={card4sellName}
                      type="text"
                      placeholder="Название..."
                      onChange={(e) => setCard4sellName(e.target.value)}
                    />
                    Карта
                    <input
                      className="mt-6 p-2 bg-white"
                      value={card4sellQuantity}
                      type="text"
                      placeholder="0"
                      onChange={(e) => setCard4sellQuantity(e.target.value)}
                    />
                    Количество
                    <input
                      className="mt-6 p-2 bg-white"
                      value={card4sellURL}
                      type="text"
                      placeholder="URL/..."
                      onChange={(e) => setCard4sellURL(e.target.value)}
                    />
                    Картинка
                    <button
                      className="bg-blue-600/70 transition duration-200 p-2 mb-4 hover:bg-blue-400 mt-3"
                      onClick={() => {
                        handle4Sell({
                          card4sellName: card4sellName,
                          card4sellQuantity: card4sellQuantity,
                          card4sellURL: card4sellURL,
                        });
                      }}
                    >
                      Подтвердить
                    </button>
                  </form>
                ) : (
                  <form className="flex w-full text-black flex-col">
                    <input
                      className="mt-6 p-2 bg-white"
                      value={wishCardName}
                      placeholder="Название..."
                      onChange={(e) => setWishCardName(e.target.value)}
                    />
                    Карта
                    <input
                      className="mt-6 p-2 bg-white"
                      value={wishCardQuantity}
                      placeholder="0"
                      onChange={(e) => setWishCardQuantity(e.target.value)}
                    />
                    Количество
                    <input
                      className="mt-6 p-2 bg-white"
                      value={wishCardURL}
                      placeholder="URL/..."
                      onChange={(e) => setWishCardURL(e.target.value)}
                    />
                    Картинка
                    <button
                      className="bg-blue-600/70 transition duration-200 p-2 mb-4 hover:bg-blue-400 mt-3"
                      onClick={() => {
                        handleWishList({
                          wishCardName: wishCardName,
                          wishCardQuantity: wishCardQuantity,
                          wishCardURL: wishCardURL,
                        });
                      }}
                    >
                      Подтвердить
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
