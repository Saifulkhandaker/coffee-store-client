import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    name,
    supplier,
    category,
    photo,
    chefe,
    taste,
    details,
    quantity,
  } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const chefe = form.chefe.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      photo,
      chefe,
      taste,
      details,
      quantity,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(
      `https://coffee-store-server-qvkm3c5tt-saifulkhandaker100course-gmailcom.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[#F4F3F0] w-[75%] mx-auto my-10">
        <div className="hero-content flex-col">
          <div className="text-center w-[75%] mx-auto">
            <h1 className="text-5xl text-[#374151] font-bold">
              Update Coffee: {name}
            </h1>
          </div>
          <div className="w-11/12 px-4 py-5 ">
            <form onSubmit={handleUpdateCoffee}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                {/* right side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter coffee name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter Your Supplier"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter coffee Category"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* left side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    placeholder="Enter coffee Quantity"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Chefe</span>
                  </label>
                  <input
                    type="text"
                    name="chefe"
                    defaultValue={chefe}
                    placeholder="Enter coffee Chefe"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Enter Coffee Taste"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter coffee Details"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15]">
                  Update Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
