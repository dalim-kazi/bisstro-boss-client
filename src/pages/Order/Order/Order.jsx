import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../../shared/cover/Cover";
import imgCover from '../../../assets/shop/order.jpg'
import UseMenu from '../../../components/hook/useMenu/UseMenu';
import { useState } from 'react';
import OrderTeb from '../OrderTeb/OrderTeb';
 
 
const Order = () => {
    const [menus] = UseMenu()
    const soups = menus.filter(item => item.category === 'soup')
    const salads = menus.filter(item => item.category === 'salad')
    const pizzas = menus.filter(item => item.category === 'pizza')
    const desserts = menus.filter(item => item.category === 'dessert')
    const drinks=menus.filter(item=>item.category==='drinks')
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="mb-10">
            <Cover img={imgCover} name={'Order Food'} details={' Totam, eum possimus similique, soluta fugiat quaerat ipsam impedit inventore, necessitatibus eos assumenda officiis a beatae earum illum molestias omnis enim sed numquam optio expedita? Quibusdam quia dolores, rerum repellat recusandae, alias veritatis inventore qui corporis quam voluptatibus ea nostrum ad dolore cupiditate dicta itaque, in sapiente iusto ipsum suscipit assumenda fugit esse odit.'}></Cover>
        <Tabs className='mt-10' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       <TabList className='uppercase font-medium text-center'>
        <Tab>Pizza</Tab>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
         
      </TabList>
        <TabPanel>
             <OrderTeb items={pizzas}></OrderTeb>
      </TabPanel>
        <TabPanel>
        <OrderTeb items={salads}></OrderTeb>
                </TabPanel>
                <TabPanel>
                <OrderTeb items={soups}></OrderTeb>
                </TabPanel>
                <TabPanel>
                <OrderTeb items={desserts}></OrderTeb>
                </TabPanel>
                <TabPanel>
                <OrderTeb items={drinks}></OrderTeb>
                </TabPanel>

    </Tabs>
        </div>
    );
};

export default Order;