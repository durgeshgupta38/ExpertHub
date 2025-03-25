import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
// import { filterCategory } from "../../Redux/Slices/categorySlice";
import { serviceData } from '../../Utils/products';
import "./filter.css";
const groupedOptions = [
  {
    label: "Vehicle",
    options: [
      { value: "two-wheeler", label: "Two-Wheeler" },
      { value: "three-wheeler", label: "Three-Wheeler" },
      { value: "four-wheeler", label: "Four-Wheeler" },
      { value: "bus", label: "Bus" },
      { value: "truck", label: "Truck" },
      { value: "flight", label: "Flight" },
      { value: "metro", label: "Metro" },
      { value: "train", label: "Train" },
    ],
  },
  {
    label: "Payment",
    options: [
      { value: "secure payment", label: "Secure Payment" },
      { value: "apple payment", label: "Apple Payment" },
      { value: "credit payment", label: "Credit Payment" },
    ],
  },
  {
    label: "Guarantees",
    options: [
      { value: "back guarantee", label: "Back Guarantee" },
      { value: "card guarantee", label: "Card Guarantee" },
    ],
  },
  {
    label: "Others",
    value:"other"
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "300px",
    height: "40px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    color: "#0f3460",
    borderBottom: "1px solid #ddd",
    "&:hover": {
      backgroundColor: "#c9e9f5",
      color: "black",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "300px",
    backgroundColor: "#fff",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "300px",
    overflowY: "auto",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

// Custom Group Component to toggle visibility
const CustomGroup = (props) => {
  const { data, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
      className="filter"
        onClick={toggleVisibility}
      >
        <span>{data.label}</span>
        <span> {isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && children}
    </div>
  );
};

const FilterSelect = ({catAndSubCat}) => {
  const dispatch = useDispatch();

  const handleChange = (selectedOption) => {

    if (!selectedOption) {
      catAndSubCat({ cat: "", subCat: "" });
      return;
    }

    console.log(selectedOption,"selectedOption")
    const parentLabel = groupedOptions.find((group) =>{
        if(group.options){
            return  group.options.some((option) => option.value === selectedOption.value)
          }

            return group.value === selectedOption.value
    } 
    )?.label;
    catAndSubCat({cat:parentLabel,subCat:selectedOption.label})
    console.log("Selected option belongs to:", parentLabel);

    const searchData = serviceData.filter(
      (item) => item.title.toLowerCase() === selectedOption.value.toLowerCase()
    );
    // dispatch(filterCategory({ searchData }));
  };

  return (
    <Select
      options={groupedOptions}
      styles={customStyles}
      onChange={handleChange}
      isClearable
      placeholder="Filter By Category"
      components={{ Group: CustomGroup }} // Use Custom Group Component
    />
  );
};

export default FilterSelect;
