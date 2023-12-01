import { Helmet } from "react-helmet";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../components/hook/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";

 
const AddItem = () => {
    const [axiosSecure]=UseAxiosSecure()
    const imgKey = import.meta.env.VITE_imgbb_key
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        const image = data.image[0]
   
        const FormImage = new FormData()
        FormImage.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: "POST",
            body: FormImage
        })
            .then(res => res.json())
            .then(imgData => {
                const imgURL = imgData.data.url
                const { name, price, category, recipe } = data 
                const menuItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                axiosSecure.post('/menus', menuItem)
                    .then((data) => {
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'successful add your item',
                                showConfirmButton: false,
                                timer: 1500
                              })
                     }
                })
            })
    };
     
    return (
        <div>
             <Helmet>
                <title>bistro boss | addItem</title>
            </Helmet> 
            <div className="w-full">
            <SectionTittle Heading={"-----What's Now-----"} subHeading={"ADD AN ITEM"}></SectionTittle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-stone-200 md:ms-5 p-5 m-5">
            <div className="form-control mb-5">
            <label className="label">
            <span className="label-text">Recipe Name*</span>
             </label>
                        <input type="text" placeholder="Recipe Name" {...register("name", { required: true})} className="input" />
           </div>
                <div className="md:flex justify-between gap-5 mb-5">
                <div className="form-control w-full">
                     <label className="label">
                  <span className="label-text">Category*</span>
                 </label>
                 <select className="select bg-white w-full" {...register("category", { required: true})}>
                  <option>pizza</option>
                  <option>Soup</option>
                    <option>Desserts</option>
                    <option>salad</option>
                    <option>Drinks</option>
                  </select>
                    </div>
                    <div className="form-control w-full">
                     <label className="label">
                   <span className="label-text">Price*</span>
                   </label>
                        <input type="number" placeholder="price" {...register("price", { required: true})} className="input  w-full" />
                </div>
                </div>
                <div className="form-control">
              <label className="label">
              <span className="label-text">Recipe Details*</span>
               </label>
                <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true})} placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control">
              <label className="label">
              <span className="label-text">Add Image</span>
               </label>
               <input type="file" {...register("image", { required: true})}  className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>
                    <input type="submit" className="btn btn-outline btn-sm mt-5 bg-slate-100 border-orange-400 text-orange-400 hover:bg-orange-400" value={`ADD ITEM `} />
            </div>
           </form>
        </div>
    );
};

export default AddItem;