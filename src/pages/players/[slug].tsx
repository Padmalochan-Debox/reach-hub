import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const RatingHistory = ({ player }: any) => {
  console.log(player);
  const router = useRouter();
  const [filteredCategory, setFilterdCategory] = useState([]);
  console.log(filteredCategory);
  useEffect(() => {
    const filterCat = player.filter((cat: any) => cat.name === "Bullet");
    setFilterdCategory(filterCat);
  }, []);
  return (
    <div className="min-h-screen p-5 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">{router?.query?.slug}</h1>
        <div>
          {filteredCategory.map((filcat: any) => (
            <div className="" key={filcat.name}>
              <h2 className="pt-2 font-bold text-xl text-gray-600">
                {filcat.name}
              </h2>
              <div className="pt-4">
                {filcat.points.map((rating: any, i: any) => (
                  <div
                    key={i}
                    className="my-4 bg-gray-200 flex gap-x-6 justify-between rounded-md"
                  >
                    {rating.map((rat: any, i: any) => (
                      <div key={i} className="p-2">
                        {rat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingHistory;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    `https://lichess.org/api/user/${params.slug}/rating-history`
  );
  const player = await res.json();
  return { props: { player } };
}
