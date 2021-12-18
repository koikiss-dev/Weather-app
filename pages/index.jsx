import { useState, useEffect } from "react";
import CardMain from "../components/CardMain";
import IndexLayout from "../layaut/indexLayaut";
import Head from "next/head";
import { getLastday } from "../apiconfig/apiIndex";
import useGetLocation from "../hooks/useGetLocation";
export default function Home() {
  const [data, value, loading, lat, lng, pushData, getData, get] =
    useGetLocation();

  return (
    <>
      <IndexLayout>
        <Head>
          <title>Clima | {value === "" ? "Today" : value}</title>
        </Head>
        <main className="container mt-8">
          <form
            className="flex justify-center m-5 "
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <input
                className="outline-none p-3 sm:pr-40 rounded-md bg-gray-300 text-black border-black "
                placeholder="Search"
                onChange={pushData}
                type="text"
                value={value}
              />
            </label>
          </form>
          {loading ? (
            <div className="text-white z-50 top-40 left-0 right-0 absolute text-center flex flex-col items-center">
              <box-icon
                name="loader-alt"
                animation="spin"
                size="lg"
                color="#ffffff"
              ></box-icon>{" "}
            </div>
          ) : null}
          {data.map(({ code, name, main, weather, wind }) => {
            const { speed } = wind;
            const { temp, humidity } = main;
            const icon = weather[0].icon;
            return (
              <div key={code}>
                <CardMain
                  city={name}
                  clima={weather[0].main}
                  velocidad={parseInt(speed)}
                  temp={parseInt(temp)}
                  tempF={parseInt((temp * 9) / 5 + 32)}
                  agua={humidity}
                  icon={icon}
                />
              </div>
            );
          })}
        </main>
      </IndexLayout>
    </>
  );
}
