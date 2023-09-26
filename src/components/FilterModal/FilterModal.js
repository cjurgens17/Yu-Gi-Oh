import React from "react";
import {TYPES} from "../../constants/properties";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";
import { X } from 'react-feather'


//we need to add an escape that resest the state of the modal to false and then add accessibilty options to this

function FilterModal({setFilterModal}) {
  const id = React.useId();
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const yuGiOhCards= React.useContext(YuGiOhCardContext);

  function filterData(){
    let newData = [...yuGiOhCards];
    
    //Can add more filters in the future here.
    const filters = [
        {key: 'type', value: type},
        {key: 'name', value:  name},
    ];

    filters.forEach((filter) => {
        if(filter.value !== ""){
            newData = newData.filter((item) => {
               return item[filter.key] === filter.value  
            });
        }
    });

    yuGiOhCards.setYugiOhCards(newData);
  }

  return (
    <div>
      <form onSubmit={filterData}>
        <label htmlFor={`name-${id}`}>Name</label>
        <input
          id={`name-${id}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor={`type-${id}`}>Type</label>
        <select
          id={`type-${id}`}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((type, index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        {" "}
        <button>Filter</button>
      </form>

          <button>
            <X onClick={() => setFilterModal(false)}></X>
          </button>

    </div>
  );
}

export default FilterModal;
