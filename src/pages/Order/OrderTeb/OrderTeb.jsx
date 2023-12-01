import FoodCard from "../../../components/FoodCard/FoodCard";

 

const OrderTeb = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-12 p-5 md:p-0'>
                 {
                  items.map(item=><FoodCard key={item._id} items={item}></FoodCard>)
                  }
             </div>
    );
};

export default OrderTeb;