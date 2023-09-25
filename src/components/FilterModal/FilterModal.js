import React from "react";
import { TYPES } from "constants/properties.js";




function FilterModal({data,setData}) {
  const id = React.useId();
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function filterData(){
    let newData = [...data];
    
    //Can add more filters in the future here.
    const filters = [
        {key: 'type', value: type},
        {key: 'name', value:  name},
        {key: 'description', value: description}
    ];

    filters.forEach((filter) => {
        if(filter.value !== ""){
            newData = newData.filter((item) => {
               return item[filter.key] === filter.value ||
               (filter.key === 'description' && item[filter.key].includes(filter.value)); 
            });
        }
    });

    setData(newData);
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

        <label htmlFor={`description-${id}`}>Description/Effect</label>
        <input
          id={`description-${id}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
      </form>
    </div>
  );
}

export default FilterModal;
