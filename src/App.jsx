
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);



  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-3xl font-bold text-center my-10'>Coffee Shop:{coffees.length}</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
   {
      coffees.map(coffee => <CoffeeCard
      key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      ></CoffeeCard>)
    }
   </div>
    </div>
  )
}

export default App
