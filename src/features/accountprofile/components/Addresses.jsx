import React from "react";

const Addresses = ({ user, setActiveSection }) => {
  return (
    <div id="acc-address" className="px-7">
      <div
        id="top-box"
        className="mb-3 border-b-2 pb-10 flex justify-between  bg-white rounded-xl p-10"
      >
        <div id="address-section">
          <h3 className="mb-3 font-semibold text-[20px] uppercase pt-10">
            Address
          </h3>
          <p className="mb-4 pl-5">
            TO: {user.firstName} {user.lastName}
          </p>
          <p className="mb-4  pl-5">
            {user.address.address} Provice:{user.address.province}
          </p>
          <p className="mb-4 pl-5">
            Country:{user.address.country} Zipcode:{user.address.zipcode}
          </p>
        </div>
      </div>
      <div className="mt-7 mb-4 flex justify-end">
        <a
          className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black hover:cursor-pointer"
          onClick={() => {
            setActiveSection("acc-edit-address");
          }}
        >
          Edit
        </a>
      </div>
    </div>
  );
};

export default Addresses;
