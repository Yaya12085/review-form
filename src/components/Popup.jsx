import React from "react";
import useStore from "../store";
import Button from "./Button";

const Popup = () => {
  const { setPopupReveal } = useStore();
  return (
    <div className="backdrop-blur overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div className="px-3 w-full md:w-2/3 lg:w-1/2">
        <div class="my-4 rounded-lg border shadow-sm bg-white">
          <div class="flex flex-col space-y-1.5 p-6 w-full">
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Thanks for for your review
            </h3>
          </div>
          <div class="relative px-6 py-2 flex-auto">
            <p class="text-sm text-foreground">
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p>
          </div>
          <div className="flex w-full justify-end items-center gap-x-4 p-4">
            <Button title="Close" onClick={setPopupReveal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
