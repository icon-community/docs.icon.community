"use client"

import React, { useState, useEffect } from 'react';
import { Callout } from "nextra/components";

  const EmergencyFundComponent = () => {
    const [emergencyFund, setEmergencyFund] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchEmergencyFund = async () => {
        try {
          const response = await fetch('https://tracker.icon.community/api/v1/addresses?address=cx2c7ceac38a597abae0ce3b2ceac497e126725174');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setEmergencyFund(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEmergencyFund();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className=''>
        <div className="flex flex-col space-y-3">
          {emergencyFund && emergencyFund.length > 0 ? (
            <Callout type="info" emoji="💡">
              The ICON Emergency Fund currently holds <span className='px-2 py-1 font-bold border rounded-full border-blue-950/60 dark:border-blue-400'>{parseInt(emergencyFund[0].balance, 10).toLocaleString()} ICX</span>
            </Callout>           
          ) : (
            <p>No data available</p>
          )}
        </div> 
      </div>
    );
  };
  
  export default EmergencyFundComponent;