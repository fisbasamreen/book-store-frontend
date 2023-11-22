import { getRequest } from '@/service/bookservice';
import Card from '@/components/Card';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [bookList, setBookList] = useState([]);
  const [refresh, setRefresh] =  useState([]);

  useEffect(() => {
    getAllBooks()
  }, [refresh])

  async function getAllBooks(){
    const allbooks = await getRequest("/api/books");
    setBookList(allbooks)
  }

  function isRefreshRequired(){
    console.log('isRefreshRequired called');
    setRefresh(!refresh)
  }
  
  return (
    <>
     <div className='container'>
        <div className='row gy-5 mt-5'>
          {
            bookList.map((book,key) => {
                return (
                  <div className='col-md-4' key={key}>
                    <Card bookId = {book.id}
                          bookTitle = {book.title}
                          bookImage = {book.imageUrl}
                          bookPrice = {book.price}
                          isRefreshRequired = {isRefreshRequired}
                    />
                   </div> 
                )
            })
          }
        </div>
     </div>
    </>
  )
}
