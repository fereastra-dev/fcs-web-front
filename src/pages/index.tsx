import { navigate } from "gatsby";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {

  return (
    <>
      <div className="mt-10">
        <div className="home-div flex-col rounded-tl-3xl bg-primary-light text-primary-dark">
          <h1 className="font-cond-black text-left laptop:text-center">
            Fereastra Către ȘtIintă e aici!
          </h1>
          <div className="flex flex-row gap-10">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <button
            className="btn btn-primary btn-outline gap-2"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            Programul evenimentului
            <BsArrowRight />{" "}
          </button>
        </div>
      </div>


      <div className="bg-primary-light">
        <div className="home-div flex-col laptop:flex-row rounded-tr-3xl bg-primary-dark text-primary-light">
          <h1 className="font-cond-black text-left laptop:text-center">
            Întâlnește Speakerii!
          </h1>
          <div className="flex flex-col la gap-10">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button
              className="btn btn-primary gap-2"
              onClick={() => {
                navigate("/speakers");
              }}
            >
              Către speakeri
              <BsArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <div className="home-div flex-col rounded-tl-3xl bg-secondary-1 text-primary-light">
          <h1 className="font-cond-black text-left laptop:text-center">
            Cunoaște Echipa!
          </h1>
          <div className="flex flex-row gap-10">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <button
            className="btn text-primary-light bg-secondary-1 border-primary-light gap-2 hover:bg-primary-dark hover:border-primary-dark"
            onClick={() => {
              navigate("/about");
            }}
          >
            Despre noi
            <BsArrowRight />{" "}
          </button>
        </div>
      </div>


      <div className="bg-secondary-1">
        <div className="home-div flex-col laptop:flex-row rounded-tr-3xl bg-secondary-2 text-primary-light">
        <h1 className="font-cond-black text-left laptop:text-center">
            Cu leul trece greul
          </h1>
          <div className="flex flex-col la gap-10">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button
              className="btn text-primary-light bg-secondary-3 border-none hover:bg-secondary-3/50 gap-2"
              onClick={() => {
                navigate("/speakers");
              }}
            >
              Donează
              <BsArrowRight />{" "}
            </button>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
