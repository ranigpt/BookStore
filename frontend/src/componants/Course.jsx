import React, { useEffect, useState } from 'react'
//import list from '../../public/booklist.json'
import Cards from './Cards'
import axios from 'axios';

function Course() {
const [book , setBook] = useState([]);
useEffect(()=>{
  const getBook = async()=>{
    try{

      const res = await axios.get("http://localhost:3000/book");
      console.log(res.data);
      setBook(res.data)
    }catch(error){
     console.log(error);
    }
  }
  getBook();
},[])
  return (
    <>
    <div className='max-w-screen-2xl max-auto md:px-20 px-4 mt-20 pt-2'> 
      <div>
        <h1>
        Welcome to our curated collection of free books. Whether you're a lifelong learner, a curious reader, or just exploring new topics, we have something for you. Our selection of free books spans various genres and subjects to spark your interest and enrich your knowledge.
        </h1>

        <section>
        <h2>Genres You Can Explore</h2>
        <p>
          From adventurous journeys across the world to self-improvement guides, our free book collection has something for everyone. Explore stories filled with suspense, travel tales, history, science fiction, or even tech innovations. Whatever your passion, our diverse collection will keep you engaged.
        </p>
        <h3>Adventure and Fantasy</h3>
        <p>
          Get lost in the world of epic tales where heroes embark on thrilling quests and face incredible challenges. If you're a fan of mythical creatures or action-packed stories, our adventure and fantasy section is a must-read.
        </p>
        <h3>Self-Development and Wellness</h3>
        <p>
          Discover books that focus on personal growth, mindfulness, and self-improvement. These resources offer insights on how to live a more fulfilling life and achieve your personal and professional goals.
        </p>
      </section> 
      </div>

<button className='bg-blue-700 p-4 m-3 w-80-'> Back</button>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 '> 

          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }

      
        </div>
      </div>
    </div>
    </>
  )
}

export default Course