import { useState } from "react";
import Button from "./components/Button";
import FormHeader from "./components/FormHeader";
import Recommand from "./components/Recommand";
import Select from "./components/Select";
import StarRating from "./components/StarRating";
import Textarea from "./components/Textarea";
import useStore from "./store";
import Popup from "./components/Popup";

function App() {
  const reviewsData = [
    {
      title: "Safety",
      description: "How safe did you feel with DevIt ?",
      type: "star"
    },
    {
      title: "Communication",
      description: "How easy was to communicate with DevIt ?",
      type: "star"
    },
    {
      title: "Would you recommand DevIt ?",
      description: "Your opinion won't be posted publicy",
      type: "like"
    },
    {
      title: "Praise",
      description: "What traits best describe DevIt ?",
      type: "select"
    },
    {
      title: "Care to share more ?",
      description:
        "How was your overall experience? What's that one thing you won't forget DevIt for ?",
      type: "textarea"
    }
  ];
  const {
    totalRating,
    formReveal,
    setFormReveal,
    popupReveal,
    setPopupReveal
  } = useStore();

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-start py-16">
      {popupReveal && <Popup />}
      <h1
        className="text-center text-5xl font-bold"
        style={{
          fontFamily: "'IM FELL English PRO', sans-serif"
        }}
      >
        Leave a review
      </h1>

      {!formReveal && (
        <div className="flex flex-col items-center justify-center mt-4">
          <Button title="Give a review" onClick={setFormReveal} />
        </div>
      )}
      {formReveal && (
        <div className="container flex flex-col items-center justify-center ">
          <div className="px-3 w-full md:w-2/3 lg:w-1/2">
            {reviewsData.map((data, index) => (
              <div key={index} className="my-4 rounded-lg border shadow-sm">
                <FormHeader title={data.title} description={data.description} />
                <div className="p-6 pt-0">
                  {data.type === "star" && <StarRating name={data.title} />}
                  {data.type === "like" && <Recommand />}
                  {data.type === "select" && <Select />}
                  {data.type === "textarea" && <Textarea />}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center items-center gap-x-4 pb-4">
            <Button title="CANCEL" onClick={setFormReveal} />
            <Button title="PUBLISH REVIEW" onClick={setPopupReveal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
