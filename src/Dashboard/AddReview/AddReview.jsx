import { Helmet } from "react-helmet";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UseAxiosSecure from "../../components/hook/UseAxiosSecure/UseAxiosSecure";

 
const AddReview = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        const review = {
            name: data.name,
            details: data.details,
            email:user?.email,
            ratting: parseFloat(data.ratting)
        }
        axiosSecure.post('review', review)
            .then(() => {
            reset()
        })
    }
    return (
        <div>
            <SectionTittle Heading={"---What's Now---"} subHeading={"ADD REVIEW"}></SectionTittle>
            <Helmet><title>bistro boss | addReview</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-slate-100 p-10 ms-5 rounded-lg">
              <div className="md:flex gap-5">
                <div className="form-control max-w-xs md:w-full mx-auto">
           <label className="label">
            <span className="label-text">Name</span>
          </label>
           <input type="text" {...register("name", {required: true})} defaultValue={user?.displayName} placeholder="enter your name" className="input input-bordered" />
                </div>
                <div className="form-control max-w-xs md:w-full mx-auto">
           <label className="label">
            <span className="label-text">Ratting</span>
          </label>
          <select {...register("ratting", {required: true})} className="select select-bordered w-full max-w-xs">
            <option>1</option>
            <option>2</option>
            <option>3</option>
             <option>4</option>
             <option>5</option>                
            </select>
         </div>
                </div>
                <div className="form-control md:w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea className="textarea textarea-bordered w-full" {...register("details", {required: true})} placeholder="details"></textarea>
            </div> 
            <div className="text-center mt-5">
            <input type="submit" className="btn btn-sm hover:bg-amber-600 bg-yellow-500 mx-auto" value="Submit" />
               </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;