import CardMain from "../components/CardMain";
import IndexLayout from "../layaut/indexLayaut";
import Head from "next/head";
import useGetLocation from "../hooks/useGetLocation";
export default function Home() {
  const [data, value, lat, lng, pushData, getData, get, loading] = useGetLocation();
  return (
    <>
      <IndexLayout>
        <Head>
          <title>Clima | {value}</title>
        </Head>
        <main className="container mx-auto">
          <form
            className="flex justify-center m-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <input
                className="outline-none p-3 rounded-md bg-gray-300 text-black border-black"
                placeholder="Search"
                onChange={pushData}
                type="text"
                value={value}
              />
            </label>
          </form>
          {loading ? <span className="text-white">cargando</span> : null}
          {data.map(({ code, name, main, weather, wind }) => {
            const { speed } = wind;
            const { temp, humidity } = main;

            return (
              <div key={code}>
                <CardMain
                  city={name}
                  clima={weather[0].main}
                  velocidad={parseInt(speed)}
                  temp={parseInt(temp)}
                  tempF={parseInt(temp * 9/5 + 32)}
                  agua={humidity}
                  icon={weather[0].icon}
                />
              </div>
            );
          })}
        </main>
      </IndexLayout>
    </>
  );
}
