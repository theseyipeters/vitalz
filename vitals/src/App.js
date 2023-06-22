
import './App.css'
import Dashboard from './components/patient-pages/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import AccessPatients from './components/patient-pages/AccessPatients/AccessPatients';
import Landing from './components/landing-page/landing';
import Home from './components/register/register';
import Login from './components/login/login';
import PatientLogin from './components/login/patient-login/patientlogin';
import DoctorLogin from './components/login/doctor-login/doctorlogin';
import DoctorRegister from './components/register/doctor-register/doctorregister';
import PatientRegister from './components/register/patient-register/patientregister'
import HospitalRegister from './components/register/hospital-register/hospitalregister';
import HospitalLogin from './components/login/hospital-login/hospitallogin';
import AccessPatientRecords from './components/doctors-pages/AccessPatientRecord/AccessPatientRecords';
import DrDashboard from './components/doctors-pages/Dashboard/Dashboard';
import Appointments from './components/patient-pages/Appointments/Appointments';
import Records from './components/doctors-pages/Records/Records';
import UpdateRecord from './components/doctors-pages/UpdateRecord';
import AccessControl from './components/judon/Access/Access'
import Notifications from './components/patient-pages/Notifications/Notifications';
import ProfilePage from './components/patient-pages/Profile/Profile';
import NewRecord from './components/doctors-pages/NewRecord/NewRecord';
import { UserProvider } from './components/patient-pages/UserContext';




function App() {
  return (
    <>    
      <div>
        <UserProvider>

{/* -------------PATIENT'S ROUTES ----------------------- */}

        <Routes>

          <Route path='/' element= {<Landing />} />
          <Route path='/patientdashboard' element={<Dashboard />} />
          <Route path='/patientappointments' element={<Appointments />} />
          <Route path='/accesspatients' element= {<AccessPatients />} />
          <Route path='/register' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/patient-login' element={<PatientLogin />} />
          <Route path='/patient-register' element={<PatientRegister />} />
          <Route path='/accesscontrol' element={<AccessControl />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/profile' element={<ProfilePage />} />
          
        </Routes>


{/* -----------------DOCTOR'S ROUTES ----------------------- */}

          <Routes>
          <Route path='/doctor-login' element={<DoctorLogin />} />
          <Route path='/doctor-register' element={<DoctorRegister />} />
          <Route path='/doctordashboard' element={<DrDashboard />} />   
          <Route path='/patients' element={<AccessPatientRecords />} />
          <Route path='/patientrecords' element={<Records />} />
          <Route path='/updaterecords' element={<UpdateRecord />} />
          <Route path='/newrecord' element={<NewRecord />} />
          {/* <Route path='/doctorappointments' element={<Appointment />} /> */}
          </Routes>

  {/* ---------------------- HOSPITAL'S ROUTES -------------------- */}

          <Routes>
              <Route path='/hospital-register' element={<HospitalRegister />} />
              <Route path='/hospital-login' element={<HospitalLogin />} />


          </Routes>

          
        </UserProvider>
      </div>
    </>
  );
}

export default App;
