import Select from 'react-select';
import { products, serviceData } from '../../Utils/products';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { filterCategory } from "../../Redux/Slices/categorySlice";

const options = [
    { value: "free shipping", label: "free shipping" },
    { value: "secure payment", label: "secure payment" },
    { value: "Back Guarantee", label: "Back Guarantee" },
    { value: "Apple Payment", label: "Apple Payment" },
    { value: "Credit Payment", label: "Credit Payment" },
    { value: "Card Guarantee", label: "Card Guarantee" },
    { value: "free shipping", label: "free shipping" },
    { value: "secure payment", label: "secure payment" },
    { value: "Back Guarantee", label: "Back Guarantee" },
    { value: "Apple Payment", label: "Apple Payment" },
    { value: "Credit Payment", label: "Credit Payment" },
    { value: "Card Guarantee", label: "Card Guarantee" },
    { value: "free shipping", label: "free shipping" },
    { value: "secure payment", label: "secure payment" },
    { value: "Back Guarantee", label: "Back Guarantee" },
    { value: "Apple Payment", label: "Apple Payment" },
    { value: "Credit Payment", label: "Credit Payment" },
    { value: "Card Guarantee", label: "Card Guarantee" },
    { value: "free shipping", label: "free shipping" },
    { value: "secure payment", label: "secure payment" },
    { value: "Back Guarantee", label: "Back Guarantee" },
    { value: "Apple Payment", label: "Apple Payment" },
    { value: "Credit Payment", label: "Credit Payment" },
    { value: "Card Guarantee", label: "Card Guarantee" },
    { value: "free shipping", label: "free shipping" },
    { value: "secure payment", label: "secure payment" },
    { value: "Back Guarantee", label: "Back Guarantee" },
    { value: "Apple Payment", label: "Apple Payment" },
    { value: "Credit Payment", label: "Credit Payment" },
    { value: "Card Guarantee", label: "Card Guarantee" },

];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        borderBottom: "1px solid #ddd", // Adds bottom border
        "&:last-child": {
            borderBottom: "none", // Removes border from last item
        },
        "&:hover": {
        backgroundColor: "#c9e9f5",
        color: "black",
        },
    }),
    menu: (provided) => ({
        ...provided,
        width: "200px", // Decreased dropdown width
    }),
    menuList: (provided) => ({
        ...provided,
        maxHeight: "300px",  // Set max height for scrolling
        overflowY: "auto",   // Enables vertical scrolling
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = () => {
    const dispatch = useDispatch();

    const handleChange = (selectedOption)=> {
    let searchData=serviceData.filter(item => item.title.toLowerCase() ===selectedOption.value.toLowerCase())
            dispatch(filterCategory({ searchData:searchData}));
        
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
