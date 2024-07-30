"use client"
import { useEffect, useState } from 'react';
import CardReview from './cardReview';
import Spinner from './spinner';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews');
      console.log("reviews")
      console.log(response)

      const data = await response.json();
      console.log(data)
      setReviews(data);
      setLoading(false)
    };

    fetchReviews();
  }, []);

  return (
    <div> 
      <div className='flex flex-col gap-6 '>
        {reviews.map((review, index) => (
          
          <CardReview key={index} review={review} />
        ))}
      </div>
      {
                        loading &&(
                           <div className='  w-screen h-screen flex items-center justify-center bg-gray-400 bg-opacity-50'>
                                <Spinner/>
                           </div>
                        )
                        
                    }
      
    </div>
  );
}
