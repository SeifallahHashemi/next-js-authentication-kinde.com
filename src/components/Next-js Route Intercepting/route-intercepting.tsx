import React from "react";
import photoData from "../../../utils/photos"
import Link from "next/link";
import Image from "next/image";

const RouteIntercepting = () => {
    const photos = photoData
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default RouteIntercepting;
