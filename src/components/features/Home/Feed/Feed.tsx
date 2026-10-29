import SongCard from "@/components/shared/Cards/SongCard/SongCard";
import ArtistCard from "../../../shared/Cards/ArtistCard/ArtistCard";
import Slider from "../../../shared/Slider/Slider";
import Style from "./styles.module.css";
import artists from "@/components/data/artists";
import { songs } from "@/components/data/songs";
import { useNavigate } from "react-router-dom";
import Presentation from "@/components/shared/Presetation/Presetation";
import List from "@/components/shared/List/List";
import ListItem from "@/components/shared/List/ListItem/ListItem";

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className={Style.container}>
      <Slider title="Artistas" onSeeMore={() => alert("ola")}>
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            imgURL={artist.image}
            name={artist.name}
            size={140}
            onClick={() => {
              navigate(`/artist/${artist.id}`);
            }}
          />
        ))}
      </Slider>

      <Presentation
        title="Artistas"
        onSeeMore={() => navigate("/artistas")}
        minColumnWidth={180}
      >
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            imgURL={artist.image}
            name={artist.name}
            size={180}
            adaptative
            onClick={() => {
              navigate(`/artist/${artist.id}`);
            }}
          />
        ))}
      </Presentation>

      <Presentation
        title="Artistas"
        onSeeMore={() => navigate("/artistas")}
        minColumnWidth={180}
      >
        {songs.map((song) => (
          <SongCard
            key={song.id}
            imgURL={song.image}
            name={song.name}
            onClick={() => {
              navigate(`/song/${song.id}`);
            }}
            onPlay={() => {
              navigate(`/song/${song.id}/play`);
            }}
          />
        ))}
      </Presentation>

      <Slider title="Musicas">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            imgURL={song.image}
            name={song.name}
            size={180}
            onClick={() => {
              navigate(`/song/${song.id}`);
            }}
            onPlay={() => {
              navigate(`/song/${song.id}/play`);
            }}
          />
        ))}
      </Slider>

      <List>
        {songs.map((song, index) => (
          <ListItem
            key={song.id}
            id={song.id}
            index={index}
            imgURL={song.image}
            name={song.name}
            duration={song.duration}
            artistName="teste"
            onCardClick={() => {
              navigate(`/song/${song.id}`);
            }}
            onPlay={() => {
              navigate(`/song/${song.id}/play`);
            }}
          />
        ))}
      </List>
    </div>
  );
};

export default Feed;
