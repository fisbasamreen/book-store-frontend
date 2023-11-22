import { postRequest } from "@/service/bookservice";
import { useRouter } from "next/router";
import { useState } from "react"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function AddBook() {

    const router = useRouter();
    const [bookId, setBookId] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [bookImage, setBookImage] = useState("");
    const [bookPrice, setBookPrice] = useState(0);
    const [alert, setAlert] = useState(false);

    async function onSubmitHandler(e) {
        e.preventDefault();
        const book = {
            id: bookId,
            title: bookTitle,
            imageUrl: bookImage,
            price: bookPrice
        }
        await postRequest("/api/books", book);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1000)

        await delay(1000);
        router.push("/");
        
    }

    return (
        <>
            <h1 className="mt-5 text-center">Add Book</h1>
            <div className="container mt-5">
                {
                    alert ? <div className="alert alert-success" role="alert">
                        New book added successfully
                    </div>
                        : <></>
                }
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <div className="mb-3">
                        <label htmlFor="bookId" className="form-label">Book Id</label>
                        <input type="text" className="form-control" id="bookId" value={bookId} onChange={(e) => setBookId(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookTitle" className="form-label">Book Title</label>
                        <input type="text" className="form-control" id="bookTitle" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookImage" className="form-label">Book Image</label>
                        <input type="text" className="form-control" id="bookImage" value={bookImage} onChange={(e) => setBookImage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookPrice" className="form-label">Book Price</label>
                        <input type="number" className="form-control" id="bookPrice" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </>
    )
}