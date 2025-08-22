import { Spotify } from "react-spotify-embed";

export default function RecentlyPlayed() {
  // Sample Spotify track/album/playlist URLs - replace with your actual recently played tracks
  const spotifyItems = [
    "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC", // Never Gonna Give You Up - Rick Astley
    "https://open.spotify.com/track/7mhznv7CcII49UthEbZhYE", // Partner In Crime - Ocean Alley
    "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh", // Watermelon Sugar - Harry Styles
    "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl", // Bohemian Rhapsody - Queen
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Recently Played
      </h2>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {spotifyItems.map((url, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"
          >
            <Spotify
              link={url}
              width="100%"
              height={80}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
