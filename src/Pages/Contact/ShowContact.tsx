import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactItem } from "../../Redux/Contact/contact.action";

import crossIcon from "../../assets/svg/crossIcon.svg";

function ShowContact() {
  const dispatch = useDispatch();
  const contact = useSelector((state: any) => state.contact.contact);

  return (
    <div className="flex flex-col items-center gap-8 h-full overflow-y-scroll no-scrollbar">
      <Link to="/contact/create">
        <div className="bg-gray-400 border-2 border-black p-2 inline-block my-10">
          <p className="font-semibold text-lg md:text-2xl font-cursive">Create Contact</p>
        </div>
      </Link>

      {contact.length === 0 ? (
        <div className="flex flex-col items-center text-center gap-5 py-3 pl-2 border-2 border-black bg-gray-300 w-3/5 font-semibold md:flex-col lg:flex-row lg:text-start">
          <div className="flex items-start ">
            <img className="w-24 md:w-48 lg:w-48" src={crossIcon} alt="" />
          </div>
          <div className="text-lg md:text-4xl font-cursive">
            <p>No Contact Found</p>
            <p>Please add contact from Create Contact Button</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 w-full gap-4 px-6 pb-4 items-center border-2 md:grid-cols-3 lg:grid-cols-4">
          {contact.map((el: any) => (
            <div key={el.id} className="flex flex-col gap-2 py-3 px-3 shadow-lg bg-white">
              <div className="flex space-x-4 text-center m-auto">
                <p>First Name: </p>
                <span>{el.firstName}</span>
              </div>
              <div className="flex space-x-4 text-center m-auto">
                <p>Last Name: </p>
                <span>{el.lastName}</span>
              </div>
              <div className="flex space-x-8 text-center m-auto">
                <p>Status: </p>
                <span>{el.status ? "Active" : "Inactive"}</span>
              </div>
              <div className="flex flex-col space-y-4 justify-between items-between m-auto">
                <button className="border-2 border-gray-300 rounded-md text-white text-lg bg-greenhalf px-4 py-1 font-bold">
                  <Link to={`/contact/edit/${el.id}`}>Edit</Link>
                </button>
                <button
                  className="border-2 border-gray-300 bg-redhalf rounded-md text-white text-lg px-4 py-1 font-bold"
                  onClick={() => dispatch(deleteContactItem(el.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowContact;
