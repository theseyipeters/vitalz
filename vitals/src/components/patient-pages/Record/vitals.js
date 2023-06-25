import React from 'react';
import './record.css';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';

export default function Vitals({ healthRecord }) {
  return (
    <div className='vitals-container'>
      <div className='vitals'>
        <h3>Vital Signs</h3>
      </div>
      <div className='sign-container'>
        <div className='sign'>
          <div className='icon-container'>
            <BloodtypeOutlinedIcon />
          </div>
          <div className='descriptionn'>
            <p className='weight'>
              {healthRecord && healthRecord.HealthRecords.length > 0
                ? healthRecord.HealthRecords[0].bloodPressure
                : 'N/A'}
            </p>
            <small>Blood Pressure</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <MonitorHeartOutlinedIcon />
          </div>
          <div className='descriptionn'>
            <p className='weight'>
              {healthRecord && healthRecord.HealthRecords.length > 0
                ? healthRecord.HealthRecords[0].heartRate
                : 'N/A'}
            </p>
            <small>Heart Rate</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <GasMeterOutlinedIcon />
          </div>
          <div className='descriptionn'>
            <p className='weight'>
              {healthRecord && healthRecord.HealthRecords.length > 0
                ? healthRecord.HealthRecords[0].bloodSugar
                : 'N/A'}
            </p>
            <small>Blood Sugar</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <DeviceThermostatOutlinedIcon />
          </div>
          <div className='descriptionn'>
            <p className='weight'>
              {healthRecord && healthRecord.HealthRecords.length > 0
                ? healthRecord.HealthRecords[0].temperature
                : 'N/A'}
            </p>
            <small>Temperature</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <BlurOnOutlinedIcon />
          </div>
          <div className='descriptionn'>
            <p className='weight'>
              {healthRecord && healthRecord.HealthRecords.length > 0
                ? healthRecord.HealthRecords[0].oxygenLevel
                : 'N/A'}
            </p>
            <small>Oxygen Level</small>
          </div>
        </div>
      </div>
    </div>
  );
}
