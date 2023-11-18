import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [players, setPlayers] = useState<any[]>([]);

  const getFiftyPlayers = async () => {
    const response = await fetch(
      `https://lichess.org/api/player/top/${50}/${`bullet`}`
    );
    const fiftyPlayers = await response.json();
    const users = fiftyPlayers.users;
    setPlayers(users);
  };
  useEffect(() => {
    getFiftyPlayers();
  }, []);
  return (
    <>
      <div className="bg-white rounded-md p-8 mb-5">
        <h1 className="text-3xl font-bold mb-10">Chess Players</h1>

        <hr className="my-5" />
        <div className="grid grid-cols-1 gap-4">
          {players.map((player) => (
            <Link
              href={`/players/${player?.username}`}
              className="cursor-pointer"
              key={player?.id}
            >
              <div className="flex justify-between bg-gray-200 p-3 rounded-md">
                <h2>{player.id}</h2>
                <h2>{player.username}</h2>
                <span>{player?.perfs?.bullet?.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
