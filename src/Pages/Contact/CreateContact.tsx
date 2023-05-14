import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContactItem } from "../../Redux/Contact/contact.action";

const CreateContact = () => {
  const contact = useSelector((state: any) => state.contact.contact);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = React.useState({
    firstName: "",
    lastName: "",
    status: false,
  });

  const handleChange = (e: any) => {
    let { name, value, checked, type } = e.target;
    const inputvalue = type === "checkbox" ? checked : value;
    setFormdata({ ...formdata, [name]: inputvalue });
  };

  const handleCheckboxChange = () => {
    setFormdata({ ...formdata, status: !formdata.status });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addContactItem({ ...formdata, id: contact.length }));
    navigate("/contact");
  };

  return (
    <div className="flex flex-col items-center font-[cursive] font-semibold space-y-4 mt-6">
      <p className="py-4 text-xl font ">Create Contact Screen</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="bg-white border-2 border-black py-8 px-4 ">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstName" className="mr-2">
                    First Name:
                  </label>
                </td>
                <td>
                  <input
                    className="border-2 border-black px-2  py-1  w-44"
                    type="text"
                    name="firstName"
                    value={formdata.firstName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-3">
                  <label htmlFor="lastName" className="mr-2">
                    Last Name:
                  </label>
                </td>
                <td>
                  <input
                    className="border-2 border-black px-2 py-1 w-44"
                    type="text"
                    name="lastName"
                    value={formdata.lastName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-6">
                  <div className="text-center">Status:</div>
                </td>
                <td>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <input
                        className="appearance-none w-5 h-5 m-1 bg-white border-2 rounded-full flex items-center justify-center  border-black  checked:before:content-' ' checked:before:w-3 checked:before:h-3  checked:before:bg-black checked:before:rounded-full "
                        type="checkbox"
                        id="active"
                        name="status"
                        checked={formdata.status === true}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="active">Active</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="appearance-none w-5 h-5 m-1 bg-white border-2 rounded-full flex items-center justify-center  border-black  checked:before:content-' ' checked:before:w-3 checked:before:h-3  checked:before:bg-black checked:before:rounded-full "
                        // defaultChecked
                        type="checkbox"
                        id="inactive"
                        name="status"
                        checked={formdata.status === false}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="inactive">Inactive</label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          onClick={handleSubmit}
          className=" bg-[#CCCCCC] border-2 border-black  p-2 inline-block my-10 cursor-pointer"
        >
          <p>Save Contact</p>
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
