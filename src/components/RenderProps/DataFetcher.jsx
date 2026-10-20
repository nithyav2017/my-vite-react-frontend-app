import React from 'react'

const DataFetcher = ({render}) => {
    const [data]= ["React","Vue","Angular"];

    

  return (
     <div>
        {render(data)}
     </div>
  )
}

export default DataFetcher