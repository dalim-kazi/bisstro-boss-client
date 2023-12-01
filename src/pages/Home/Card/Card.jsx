import img1 from '../../../assets/home/card1.jpg'
import img2 from '../../../assets/home/card4.jpg'
import img3 from '../../../assets/home/card3.jpg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
const Card = () => {
    return (
        <>
            <section className='mt-20 mb-10'>
                <SectionTittle
                    Heading={'----Should Try----'}
                    subHeading={'CHEF RECOOMMENDS'}
                >
                </SectionTittle>
            </section>
            <section className='grid md:grid-cols-3 gap-5 mt-12 p-5 md:p-0'>
            <div className="card shadow-md">
  <figure><img src={img1} /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase italic">
    Cheese
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='italic'>Sit amet consectetur adipisicing elit. Blanditiis, voluptas.</p>
    <div className="card-actions justify-center w-full">
    <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 text-orange-400">ADD TO CARD </button>
    </div>
  </div>
                </div>
                <div className="card shadow-md">
  <figure><img src={img2} /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase italic">
    Yoghurt
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='italic'>Dolor sit amet consectetur adipisicing elit. Voluptatem, recusandae?</p>
    <div className="card-actions justify-center mt-3">
    <button className="btn btn-neutral text-orange-300">ADD TO CARD </button>
    </div>
  </div>
    </div>
    <div className="card shadow-md">
  <figure><img src={img3} /></figure>
  <div className="card-body ">
    <h2 className="card-title uppercase italic">
    Sandwich
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='italic'>Ipsum dolor sit amet consectetur adipisicing elit. Ullam, fugiat!</p>
    <div className="card-actions justify-center">
    <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 text-orange-400">ADD TO CARD </button>
    </div>
  </div>
</div>
        </section>
        </>
    );
};

export default Card;