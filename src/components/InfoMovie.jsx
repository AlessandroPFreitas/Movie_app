import MovieHeader from "./MovieHeader";
import MovieImages from "./MovieImages";
import MovieDetails from "./MovieDetails";

const InfoMovie = () => {
  const boxShadow = {
    boxShadow:
      "0px 12px 32px 0px rgba(206, 206, 251, 0.02) inset, 0px 0px 100px 0px rgba(171, 139, 255, 0.3)",
    borderRadius: "6px",
    width: "85%",
    margin: "auto",
  };

  return (
    <section style={boxShadow} className="rounded-2xl text-white p-[50px]">
      <MovieHeader/>
      <MovieImages/>
      <MovieDetails />
    </section>
  );
};

export default InfoMovie;
