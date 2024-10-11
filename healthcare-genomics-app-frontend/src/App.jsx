import './App.css'
import CustomFooter from './components/CustomFooter'
import Dashboard from './components/Dashboard'
import DiseaseRisk from './components/DiseaseRisk'
import EyeDiseaseScan from './components/EyeDiseaseScan'
import HealthProfile from './components/HealthProfile'
import HeartDiseaseScan from './components/HeartDiseaseScan'
function App() {
  

  return (
    <>
      
      <Dashboard></Dashboard>
      <DiseaseRisk></DiseaseRisk>
      <EyeDiseaseScan></EyeDiseaseScan>
      <HealthProfile></HealthProfile>
      <HeartDiseaseScan></HeartDiseaseScan>
      <CustomFooter></CustomFooter>
    </>
  )
}

export default App
