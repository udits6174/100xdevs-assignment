import './App.css'
import BusinessCard from './components/BusinessCard'
function App() {

  return (
    <>
      <BusinessCard 
          name="Ramexx" 
          description="A 5'9 asian with 9'5 wiener"
          linkedInURL="http://linkedin.com/usecfac"
          twitterURL="http://twitter.com/usecfac"
          interests={["Open Source", "Web3", "Sports programming"]}
        />
    </>
  )
}

export default App
