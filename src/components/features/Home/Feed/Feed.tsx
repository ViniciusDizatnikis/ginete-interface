import ArtistCard from "../../../shared/Cards/ArtistCard/ArtistCard";
import Slider from "../Slider/Slider";
import Style from "./styles.module.css";
import artists from "@/components/data/artists";

const Feed = () => {
  return (
    <div className={Style.container}>
      <Slider title="Artistas">
        {artists.map((song) => (
          <ArtistCard
            key={song.id}
            imgURL={song.image}
            name={song.name}
            size="small"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Feed;
