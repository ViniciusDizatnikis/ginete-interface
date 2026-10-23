import SongCard from "@/components/shared/Cards/SongCard/SongCard";
import ArtistCard from "../../../shared/Cards/ArtistCard/ArtistCard";
import Slider from "../Slider/Slider";
import Style from "./styles.module.css";
import artists from "@/components/data/artists";
import { songs } from "@/components/data/songs";

const Feed = () => {
  return (
    <div className={Style.container}>
      <Slider title="Artistas">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            imgURL={artist.image}
            name={artist.name}
            size={140}
            onClick={() => {
              alert(artist.name);
            }}
          />
        ))}
      </Slider>

      <Slider title="Musicas">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            imgURL={song.image}
            name={song.name}
            size={180}
            onClick={() => {
              alert(song.name);
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Feed;
