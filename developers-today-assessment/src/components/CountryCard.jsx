const CountryCard = ({ name, code, imgURL, getCountry }) => {
  return (
    <div className="flex flex-col p-10 rounded-lg gap-10 bg-white max-w-[20vw] min-h-[20vh]">
      <h3
        className="font-bold text-lg text-center hover:text-green-600 transition-all duration-100 delay-100 cursor-pointer"
        onClick={() => getCountry(code)}
      >
        {name} - {code}
      </h3>
      <img
        src={imgURL}
        alt=""
        srcSet=""
        width="100%"
        onClick={() => getCountry(code)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default CountryCard;
