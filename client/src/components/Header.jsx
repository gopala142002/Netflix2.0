import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
const Header = () => {
  return (
    <div className="absolute z-10 flex w-[100%] justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://saasradar.net/wp-content/uploads/2022/07/netflix-2048x634.png"
        alt="Netflix-logo"
      />
      <div className="flex items-center">
        <ArrowDropDownCircleOutlinedIcon className='w-24 h-24 text-white'/>
        <h1 className="text-lg font-medium text-white">Gopala Patel</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Log Out</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movie</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
