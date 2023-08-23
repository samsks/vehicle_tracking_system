"use client";

import type {
  DirectionsResponseData,
  FindPlaceFromTextResponseData,
} from "@googlemaps/google-maps-services-js";
import { Loader } from "@googlemaps/js-api-loader";
import { FormEvent, useEffect } from "react";

function NewRoutePage() {
  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        libraries: ["routes", "geometry"],
      });
      await Promise.all([
        loader.importLibrary("routes"),
        loader.importLibrary("geometry"),
      ]);
      new google.maps.Map(document.getElementById("maps") as any, {
        zoom: 15,
        center: { lat: -23.5505, lng: -46.6333 },
      });
    })();
  }, []);

  async function handleSearchPlaces(event: FormEvent) {
    event.preventDefault();

    const source = (document.getElementById("source") as HTMLInputElement)
      .value;
    const destination = (
      document.getElementById("destination") as HTMLInputElement
    ).value;

    const [sourceResponse, destinationResponse] = await Promise.all([
      fetch(`http://localhost:3000/places?text=${source}`),
      fetch(`http://localhost:3000/places?text=${destination}`),
    ]);

    const [sourcePlace, destinationPlace]: FindPlaceFromTextResponseData[] =
      await Promise.all([sourceResponse.json(), destinationResponse.json()]);

    if (sourcePlace.status !== "OK") {
      console.error(sourcePlace);
      alert("Não foi possível encontrar a origem");
      return;
    }

    if (destinationPlace.status !== "OK") {
      console.error(destinationPlace);
      alert("Não foi possível encontrar o destino");
      return;
    }

    const placeSourceId = sourcePlace.candidates[0].place_id;
    const placeDestinationId = destinationPlace.candidates[0].place_id;

    const directionsResponse = await fetch(
      `http://localhost:3000/directions?originId=${placeSourceId}&destinationId=${placeDestinationId}`
    );
    const directionsData: DirectionsResponseData & { request: any } =
      await directionsResponse.json();

    console.log(directionsData);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <h1>Nova rota</h1>
        <form
          onSubmit={handleSearchPlaces}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <input id="source" type="text" placeholder="origen" />
          </div>
          <div>
            <input id="destination" type="text" placeholder="destino" />
          </div>
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <div
        id="maps"
        style={{
          height: "100%",
          width: "100%",
        }}
      ></div>
    </div>
  );
}

export default NewRoutePage;
