import React, { useEffect, useState } from "react";
import "./index.css";
import Modal from "../Modal";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_MODAL } from "../../redux/slices/modal";

import { FaSearch } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import { IoTrashBinOutline } from "react-icons/io5";

function Table({ data }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [user, setUser] = useState();

  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleModalOpen = (id) => {
    const user = data.find((item) => item.id === id);
    setUser(user);
    dispatch(SHOW_MODAL());
  };
  console.log(searchData);

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((items) =>
      Object.values(items).some(
        (item) =>
          typeof item === "string" &&
          item.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setSearchData(filteredData);
  }, [searchInput]);

  return (
    <>
      <div className="table-container">
        <div className="table-subcontainer">
          <div className="table-search-container">
            <div className="table-search-subcontainer">
              <FaSearch className="table-search-icon" />
              <input
                type="text"
                className="table-input"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className="table">
            <table className="table-table">
              <thead className="table-header">
                <tr className="table-header-row">
                  <th className="table-header-cell">
                    ID
                    <span className="table-chevron-icon-container">
                      <HiChevronUpDown className="table-chevron-icon" />
                    </span>
                  </th>
                  <th className="table-header-cell">
                    Name ID
                    <span className="table-chevron-icon-container">
                      <HiChevronUpDown className="table-chevron-icon" />
                    </span>
                  </th>
                  <th className="table-header-cell">
                    Username ID
                    <span className="table-chevron-icon-container">
                      <HiChevronUpDown className="table-chevron-icon" />
                    </span>
                  </th>
                  <th className="table-header-cell">
                    Email ID
                    <span className="table-chevron-icon-container">
                      <HiChevronUpDown className="table-chevron-icon" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                {data.length !== 0 ? (
                  searchData.length !== 0 ? (
                    searchData.map((items) => (
                      <tr
                        key={items.id}
                        className="table-row"
                        onClick={() => handleModalOpen(items.id)}
                      >
                        <td className="table-data-cell">{items.id}</td>
                        <td className="table-data-cell">{items.name}</td>
                        <td className="table-data-cell">{items.username}</td>
                        <td className="table-data-cell">{items.email}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="table-nodata-row">
                      <td className="table-nodata-cell" colSpan={4}>
                        <span className="table-nodata-span">
                          <IoTrashBinOutline className="table-trash-icon" />
                          <span>No Data</span>
                        </span>
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <Loader />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && <Modal data={user} />}
    </>
  );
}

export default Table;
