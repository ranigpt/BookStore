import React from 'react'

function Cards({item}) {
    console.log("item",item);
  return (
    <>
    <div className='mt-4 my-3 p-3'>

    <div className="card bg-base-100 w-96 shadow-xl h-96 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary bg-blue-600">NEW</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:text-blue-400">{item.category}</div>
      <div className="badge badge-outline hover:text-blue-400">{item.price}Rs</div>
    </div>
  </div>
</div>
    </div>
    
    
    </>
  )
}

export default Cards