import { useQuery } from "react-query";
import UseAxiosSecure from "../../components/hook/UseAxiosSecure/UseAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie } from 'recharts';
import UseOrder from "../../components/hook/UseOrder/UseOrder";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
 
const AdminHome = () => {
    const [axiosSecure] = UseAxiosSecure()
    const [allBooking]=UseOrder()
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']; 
    const {data:states={} } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-states')
            return res.data
        }
    })
   
   
    const soups = allBooking.filter(item => item.category === 'soup') 
    const soupTotal =soups.reduce((sum ,currentValue)=>currentValue.price + sum,0)
    const salads = allBooking.filter(item => item.category === 'salad')
    const saladTotal =salads.reduce((sum ,currentValue)=>currentValue.price + sum,0)
    const pizzas = allBooking.filter(item => item.category === 'pizza')
    const pizzaTotal =pizzas.reduce((sum ,currentValue)=>currentValue.price + sum,0)
    const desserts = allBooking.filter(item => item.category === 'dessert')
    const dessertTotal =desserts.reduce((sum ,currentValue)=>currentValue.price + sum,0)
    const  drinks= allBooking.filter(item => item.category === 'drinks')
    const  DrinksTotal =drinks.reduce((sum ,currentValue)=>currentValue.price + sum,0)
    const Data = [
        {
            name: 'Pizzas',
            count: pizzas.length,
            total:pizzaTotal,
        },
        {
            name: 'Salads',
            count: salads.length,
            total:saladTotal,
        },
        {
            name: 'Soups',
            count: soups.length,
            total:soupTotal,
        },
        {
          name: 'Desserts',
            count: desserts.length,
          total:dessertTotal ,
        },
        {
           name: 'Drinks',
           count: drinks.length,
           total: DrinksTotal ,
        }
        
      ];
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <>
            <SectionTittle Heading={'---Home---'} subHeading={'ADMIN HOME'}></SectionTittle>
        <div className="md:flex text-center md:ms-5">
        <div className="stats shadow bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 rounded-md me-2 mb-5">
        <div className="stat">
        <div className="stat-title text-white text-lg">Total Revenue</div>
        <div className="stat-value">${states.revenue}</div>
       <div className="stat-desc">21% more than last month</div>
         </div>
            </div>
            <div className="stats shadow bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 me-2 rounded-md mb-5">
  
       <div className="stat">
      <div className="stat-title text-white text-lg">Total Customers</div>
                    <div className="stat-value">{states.user}</div>
     <div className="stat-desc">21% more than last month</div>
        </div>
  
             </div>
    <div className="stats shadow bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200 me-2 rounded-md mb-5">
  
        <div className="stat">
       <div className="stat-title text-white text-lg">Total Products</div>
                    <div className="stat-value">{states.menuItem}</div>
      <div className="stat-desc">21% more than last month</div>
      </div>
  
        </div>
     <div className="stats shadow bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 me-2 rounded-md mb-5">
  
       <div className="stat">
      <div className="stat-title text-white text-lg">Total Order</div>
                    <div className="stat-value">{states.order}</div>
      <div className="stat-desc">21% more than last month</div>
     </div>
  
      </div>
            </div> 
            <div className="md:flex w-full mt-20">
                <div className="md:w-1/2 w-1/3">
        <BarChart
      width={500}
      height={300}
      data={Data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey='name' />
      <YAxis />
      <Bar dataKey='total' fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <div className="w-1/2">
        <PieChart width={400} height={300}>
          <Pie
            data={Data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
                     
                </div>
          </div>
        </>
    );
};

export default AdminHome;