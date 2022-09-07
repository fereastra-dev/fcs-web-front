import { navigate } from "gatsby";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {

  return (
    <>
      <div className="mt-10">
        <div className="home-div flex-col rounded-tl-3xl bg-primary-dark text-primary-light">
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
            className="btn text-primary-light bg-transparent border-primary-light gap-2 hover:bg-primary-light/90 hover:text-primary-dark hover:border-transparent"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            Programul evenimentului
            <BsArrowRight />{" "}
          </button>
        </div>
      </div>


      <div className="bg-primary-dark">
        <div className="home-div flex-col laptop:flex-row rounded-tr-4xl bg-secondary-1 text-primary-light">
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
              className="btn text-primary-light bg-transparent border-primary-light gap-2 hover:bg-primary-light/90 hover:text-secondary-1 hover:border-transparent"
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


      <div className=" bg-secondary-1">
        <div className="home-div flex-col rounded-tl-4xl bg-secondary-2 text-primary-light">
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
            className="btn text-primary-light bg-transparent border-primary-light gap-2 hover:bg-primary-light/90  hover:text-secondary-2 hover:border-transparent"
            onClick={() => {
              navigate("/about");
            }}
          >
            Despre noi
            <BsArrowRight />{" "}
          </button>
        </div>
      </div>


      <div className="bg-secondary-2">
        <div className="home-div flex-col laptop:flex-row rounded-tr-4xl bg-secondary-3 text-primary-light">
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
              className="btn text-primary-light bg-transparent border-primary-light gap-2 hover:bg-primary-light/90 hover:text-secondary-3 hover:border-transparent"
              onClick={() => {
                navigate("/donate");
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
