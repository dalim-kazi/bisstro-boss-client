 
const Cover = ({img,name,details}) => {
    return (
        
        <div>
            <div className="hero md:h-96" style={{backgroundImage: `url(${img})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content">
        <div className="bg-opacity-60 z-10 text-white  m-10 rounded-lg p-2">
     <h1 className="mb-5 text-2xl uppercase italic text-center">{name}</h1>
     <p className="mb-5 italic p-5">{details}</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Cover;