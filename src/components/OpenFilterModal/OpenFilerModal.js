import React from 'react';
import {Search} from "react-feather";

function OpenFilterModal({setFilterModal}){
    return (
        <button onClick={() => setFilterModal(true)}>
            <Search/>          
            Filter Cards</button>
    );
}

export default OpenFilterModal;