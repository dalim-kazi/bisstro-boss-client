import featured from '../../../assets/home/featured.jpg'
import chef from '../../../assets/home/featured.jpg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
// import SectionTittle from '../../../components/SectionTittle/SectionTittle';
const Featured = () => {
    return (
        <section>
            <div className="hero bg-fixed mt-20" style={{backgroundImage: `url(${featured} )`}}>
                <div className="hero-overlay bg-opacity-80"></div>

                <div>
                <div className='text-white'>
                        <SectionTittle
                            Heading={'---check it out---'}
                            subHeading={'from our menu'}
                        ></SectionTittle>
     </div>
    <div className='md:flex py-10 px-20 gap-10'>
    <div>
    <img className='sm:mb-10' src={chef} alt="" />          
    </div>
      <div>
        <p className='text-yellow-400'>March 20 ,2023</p>   
            <p className='uppercase italic text-white text-lg'>where can i get some??</p>  
                            <p className='text-white italic text-lg'>Consectetur, adipisicing elit. Dolorem fugit explicabo voluptatem facere consequatur voluptas similique placeat aspernatur provident id ex, quae facilis quod totam. Fuga vel, porro cumque esse, quidem nemo corrupti fugiat illo ipsam atque aspernatur laboriosam eos sit commodi nobis amet laudantium facilis, id maiores consequatur necessitatibus!</p> 
                            <button className="btn btn-neutral text-orange-300 mt-2">ORDER NOW </button>                
        </div>
    </div>
  </div>
</div>
        </section>
    );
};

export default Featured;