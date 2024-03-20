import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateAucion() {
const [itemName, setItemName] = useState('');
const [description, setDescription] = useState('');
const [endDateTime, setEndDateTime] = userState('');
const [response, setResponse] = useState('');

const handleAuctionSubmit = async (e) => {
    e.preventDefault();

    try {
        const result = await axios.post('http://localhost:3000/auction' , {
            itemName, description, endDateTime
        });
        setResponse(result.data);
        if (result.data.success) {
            alert('Your auction created successfully, Auction ID: ${result.data.auctionID}')
        } else {
            
        }
    } catch(error){
        console.error('Error saving auction: ', error);
        setErrorMessage('An error occurred while saving the action. ');
    }

    
}
}

export default CreateAucion;
