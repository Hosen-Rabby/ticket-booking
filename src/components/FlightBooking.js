import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newBook, deleteBook } from "../redux/booking/actions";

const FlightBooking = () => {
  const booked = useSelector((state) => state);
  const dispatch = useDispatch();

  const newBookDisp = (value) => {
    dispatch(newBook(value));
  };

  const newDeleteDisp = (value) => {
    dispatch(deleteBook(value));
  };

  console.log(booked);
  // booked.shift();
  const [inputData, setInputData] = useState([]);
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInputData = { ...inputData };
    newInputData[field] = value;
    setInputData(newInputData);
  };

  const submitBook = (e) => {
    e.preventDefault();
    console.log("clicked on submit button.");
    const from = inputData.from;
    const to = inputData.to;
    const date = inputData.date;
    const ticketclassName = inputData.ticketclassName;
    const guests = inputData.guests;
    const id = parseInt(booked.length) + 1;

    const allData = {
      from,
      to,
      date,
      ticketclassName,
      guests,
      id,
    };

    newBookDisp(allData);
  };

  const bookDelete = (id) => {
    newDeleteDisp(id);

    console.log(id);
    console.log("id");
  };

  const restrictAlert = () => {
    console.log("alert");
    alert("Can not book more than 3");
  };
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src="./img/lws-logo.svg" alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform" onSubmit={submitBook}>
              {/* <!-- From --> */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    onChange={handleOnChange}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    onChange={handleOnChange}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  onChange={handleOnChange}
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    onChange={handleOnChange}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- className --> */}
              <div className="des-from !border-r-0">
                <p>className</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketclassName"
                    id="lws-ticketclassName"
                    required
                    onChange={handleOnChange}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              {booked.length < 4 ? (
                <button className="addCity" type="submit" id="lws-addCity">
                  <svg
                    width="15px"
                    height="15px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span className="text-sm">Book</span>
                </button>
              ) : (
                <>
                  <button
                    className="addCity"
                    type="submit"
                    id="lws-addCity"
                    disabled
                  >
                    <svg
                      width="15px"
                      height="15px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      onClick={restrictAlert}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span className="text-sm" onClick={restrictAlert}>
                      Book
                    </span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* {state} */}
        {/* Preview Data  */}
        <div className="table-container">
          <table className="booking-table">
            {booked.length > 1 && (
              <thead className="bg-gray-100/50">
                <tr className="text-black text-left">
                  <th>Destination From</th>
                  <th>Destination To</th>
                  <th className="text-center">Journey Date</th>
                  <th className="text-center">Guests</th>
                  <th className="text-center">className</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
            )}

            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {/* booked places */}
              {booked.slice(1).map((b) => (
                <tr key={b.id} className="lws-bookedTable text-black">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <p className="lws-bookedFrom">{b.from}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="lws-bookedTo">{b.to}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedDate">{b.date}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedGustes">{b.guests}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="lws-bookedclassName">
                      {b.ticketclassName}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        className="lws-remove"
                        onClick={() => bookDelete(b.id)}
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FlightBooking;
