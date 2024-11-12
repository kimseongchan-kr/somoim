'use client';

const SEOUL = { latitude: 37.3595704, longitude: 127.105399 };
const MAP_OPTION = {
  center: new naver.maps.LatLng(SEOUL.latitude, SEOUL.longitude),
  zoom: 10,
};

export default function SearchPage() {
  new naver.maps.Map('map', MAP_OPTION);

  return (
    <>
      <div id="map" className="h-screen w-screen"></div>
    </>
  );
}
