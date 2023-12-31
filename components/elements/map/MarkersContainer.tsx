"use client";
import { useMap } from "react-leaflet";
import L from "leaflet";
import {
  Loading,
  LocationContext,
  Marker,
  SetView,
  useGetGamesData,
} from "@/index";
import { useContext } from "react";

const MarkersContainer = () => {
  const { displayLocations, isEmpty, isLoading } = useGetGamesData();
  const { cityCenter: mapCenter } = useContext(LocationContext);
  const map = useMap();
  const markerGroup = L.featureGroup().addTo(map);
  markerGroup.clearLayers();
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  if (isLoading) {
    return (
      <div className="z-[401] bg-white relative w-full h-full">
        <Loading />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <>
        <SetView markerGroup={markerGroup} map={map} mapCenter={mapCenter} />
        <span className="relative text-white py-2 top-6 px-6 rounded-xl bg-accent-dark font-peyda-bold leading-leading-3 z-[401]">
          آگهی در این شهر وجود ندارد
        </span>
      </>
    );
  }

  return (
    <>
      {displayLocations.map((game) => (
        <Marker key={game.id} game={game} markerGroup={markerGroup} />
      ))}
      <SetView markerGroup={markerGroup} map={map} mapCenter={mapCenter} />
    </>
  );
};

export default MarkersContainer;
