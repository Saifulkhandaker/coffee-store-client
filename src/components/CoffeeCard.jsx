import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-qvkm3c5tt-saifulkhandaker100course-gmailcom.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{supplier}</p>
            <p>{quantity}</p>
            <p>{chefe}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-3 ">
              <button className="btn text-white font-medium bg-green-500 ">
                View
              </button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn text-white font-medium  bg-orange-500">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn text-white font-medium bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
