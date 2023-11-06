"use client";

import { addMetaDeck, handle4Sell, handleWishList } from "@/lib/queries";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { Stalinist_One } from "next/font/google";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});

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
  const [deckName, setDeckName] = useState("");
  const [playes, setPlayes] = useState("");
  const [metaDialogOpen, setMetaDialogOpen] = useState(false);


  const [supabase] = useState(() => createBrowserSupabaseClient());

  supabase.auth.getSession().then((res) => {
    if (res.data.session) {
      setIsAdmin(true);
    }
  });

  return (
    <main className=" text-white text-center flex-col min-h-[90vh] ">
      <h2
        className={`${alumni.className} text-white/70 text-xl  bg-black/50 px-3 rounded-t-none rounded-xl`}
      >
        Панель управления
      </h2>
      <Toaster />
      <Dialog open={metaDialogOpen} onOpenChange={setMetaDialogOpen}>
        <DialogContent className="text-center absolute border-none left-1/2 transform -translate-x-1/2  p-6">
          <div className="bg-black/90 p-2 mx-3 my-6">
            <form
                    className="flex text-black w-full flex-col"
                  >
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={deckName}
                      type="text"
                      placeholder="Название..."
                      onChange={(e) => setDeckName(e.target.value)}
                    />
                    Название
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={playes}
                      type="text"
                      placeholder="1"
                      onChange={(e) => setPlayes(e.target.value)}
                    />
                    Игр сыграно
                    <button
                      className="bg-gradient-to-r text-white from-black border-2 border-white/50 to-gray-600/70 w-[240px] rounded-2xl mx-auto mb-4 transition duration-200 p-2 hover:bg-gray-500/70 hover:text-black mt-3"
                      onClick={() => {
                        addMetaDeck({
                          deckName: deckName,
                          playes: playes
                        });
                      }}
                    >
                       Добавить колоду
                    </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center items-center">
      <div className="bg-black/60 mt-[15vh] max-w-[600px] h-full flex-col rounded-2xl w-[80vw]">
        <div className="flex justify-center">
          <div className="flex-col mt-4">
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
                <div className="text-[10px] md:text-sm">
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

                  <button className="bg-gradient-to-r from-black border-2 border-white/50 to-gray-600/70 w-[240px] rounded-2xl mx-auto mb-4 transition duration-200 p-2 hover:bg-gray-500/70 hover:text-black mt-3">
                    Подтвердить
                  </button>
                </form>
              </>
            ) : (
              <div className="flex items-center flex-col justify-center">
                <div className="flex">
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
                  <form
                    className="flex text-black w-full flex-col"
                    onSubmit={() => {}}
                  >
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={card4sellName}
                      type="text"
                      placeholder="Название..."
                      onChange={(e) => setCard4sellName(e.target.value)}
                    />
                    Карта
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={card4sellQuantity}
                      type="text"
                      placeholder="0"
                      onChange={(e) => setCard4sellQuantity(e.target.value)}
                    />
                    Количество
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={card4sellURL}
                      type="text"
                      placeholder="URL/..."
                      onChange={(e) => setCard4sellURL(e.target.value)}
                    />
                    Картинка
                    <button
                      className="bg-gradient-to-r text-white from-black border-2 border-white/50 to-gray-600/70 w-[240px] rounded-2xl mx-auto mb-4 transition duration-200 p-2 hover:bg-gray-500/70 hover:text-black mt-3"
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
                  <>
                  <form className="flex w-full mx-2 text-black flex-col">
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={wishCardName}
                      placeholder="Название..."
                      onChange={(e) => setWishCardName(e.target.value)}
                    />
                    Карта
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={wishCardQuantity}
                      placeholder="0"
                      onChange={(e) => setWishCardQuantity(e.target.value)}
                    />
                    Количество
                    <input
                      className="mt-6 p-2 placeholder:text-gray-800 mx-4 bg-white/70"
                      value={wishCardURL}
                      placeholder="URL/..."
                      onChange={(e) => setWishCardURL(e.target.value)}
                    />
                    Картинка
                    <button
                      className="bg-gradient-to-r text-white from-black border-2 mx-auto border-white/50 to-gray-600/70 w-[240px] rounded-2xl mb-4 transition duration-200 p-2 hover:bg-gray-500/70 hover:text-black mt-3"
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
                  
                  </>
                )}
                <button
                    className="bg-gradient-to-r text-white from-blue-600 border-2 mx-auto border-white/50 to-gray-600/70 w-[240px] rounded-2xl mb-4 transition duration-200  hover:bg-gray-500/70 hover:text-black mt-3"
                    onClick={()=>{setMetaDialogOpen(true)}}
                  >
                      Добавить колоду в мету
                  </button>
              </div>
            )}

          </div>
        </div>
      </div>
      </div>
      
    </main>
  );
};

export default AdminPanel;
