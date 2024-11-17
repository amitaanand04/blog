import React ,{Suspense , useState} from 'react';

const LazyHome = React.lazy(()=> import('./Home'))

export default function LazyLoading() {

    const [showHome,setShowHome] = useState(false);

    const toggleHandle = ()=>{
        setShowHome(!showHome);
    }

  return (
    <div>
      <h1>Lazy Loading</h1>
        <button onClick={toggleHandle}>{showHome ? 'Hide Home':'Show Home'}</button>
        {
            showHome && (<Suspense fallback={<div>Loading</div>}>
                <LazyHome/>
            </Suspense>)
        }
    </div>
  )
}
