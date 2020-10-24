import React, { useState } from "react";
import Modal from "./Modal";
import uuid from "react-uuid";
import "@reach/dialog/styles.css";

function TableData({ launchDetails }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalDetails, setModalDetails] = useState("");

  const close = () => setOpenModal(false);

  const handleClick = (launchDetail) => {
    setOpenModal(true);
    setModalDetails(launchDetail);
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Mission Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rocket Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Launch Year
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {launchDetails &&
                  launchDetails.map((launchDetail) => {
                    return (
                      <>
                        {modalDetails.flight_number ===
                          launchDetail.flight_number && (
                          <Modal
                            modalDetails={modalDetails}
                            openModal={openModal}
                            close={close}
                          />
                        )}
                        <tr
                          onClick={() => handleClick(launchDetail)}
                          className="cursor-pointer"
                          key={uuid()}
                        >
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={`${launchDetail.links.mission_patch_small}`}
                                  alt="Coming Soon."
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {launchDetail.mission_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {launchDetail.rocket.rocket_name}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {launchDetail.launch_year}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className={
                                  typeof launchDetail.launch_success == "object"
                                    ? "absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                                    : launchDetail.launch_success
                                    ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                    : "absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                }
                              ></span>
                              <span className="relative">
                                {typeof launchDetail.launch_success == "object"
                                  ? "Upcoming"
                                  : launchDetail.launch_success
                                  ? "Success"
                                  : "Failed"}
                              </span>
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableData;
