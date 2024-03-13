import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
const VideoTitle = () => {
  return (
    <div className="absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Gopala Patel</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem!
      </p>
      <div className="mt-8 flex gap-3">
        <button className="px-3 py-2 flex gap-1 items-center bg-white text-black rounded-md hover:bg-opacity-50">
          <PlayArrowRoundedIcon size="24px" />
          <span>Play</span>
        </button>
        <button className="px-3 py-2 flex gap-2 items-center bg-gray-500 bg-opacity-50 text-black rounded-md">
          <InfoRoundedIcon size="24px" />
          <span>Watch more</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
