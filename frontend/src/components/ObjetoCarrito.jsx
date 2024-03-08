import React from "react";

const ObjetoCarrito = () => {
  return (
    <tr className="flex justify-center items-center py-2 px-5 shadow-md rounded-xl mb-5">
      <td className="basis-6/12 flex justify-center items-center">
        <div className="basis-2/5">
          <img src="/img/star-wars/baby-yoda-1.webp" alt="BabyYoda" />
        </div>
        <div className="basis-3/5">
          <p className="text-2xl font-bold uppercase">Baby Yoda Blueball</p>
          <p className="text-xl uppercase">Star Wars</p>
          <p>
            Precio: <span className="font-bold">$1800</span>
          </p>
        </div>
      </td>
      <td className="basis-3/12 flex justify-center items-center gap-2">
        <input
          className="w-2/4 px-5 py-2 border-gray-300 border text-center "
          value={3}
        />
        <div className="flex flex-col gap-1 text-red-500">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm1.062 4.312a1 1 0 1 0-2 0v2.75h-2.75a1 1 0 0 0 0 2h2.75v2.75a1 1 0 1 0 2 0v-2.75h2.75a1 1 0 1 0 0-2h-2.75Z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zm149.3 277.3c0 11.8-9.5 21.3-21.3 21.3H128c-11.8 0-21.3-9.6-21.3-21.3v-42.7c0-11.8 9.5-21.3 21.3-21.3h256c11.8 0 21.3 9.6 21.3 21.3v42.7z"
              ></path>
            </svg>
          </button>
        </div>
      </td>
      <td className="basis-2/12 text-center">
        <p>$4000</p>
      </td>
      <td className="basis-1/12 text-red-500">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"
            ></path>
            <path
              fill="currentColor"
              d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
            ></path>
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default ObjetoCarrito;
