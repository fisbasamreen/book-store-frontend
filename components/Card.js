import { deleteRequest } from "@/service/bookservice";
import { useRouter } from "next/router";

export default function Card(props) {

    const router = useRouter();
    const { bookId, bookImage, bookTitle, bookPrice,isRefreshRequired} = props;

    function onUpdateEventHandler(e) {
        router.push("/updateBook?bookId=" + bookId)
    }

    async function OnDeleteHandler(e) {
        await deleteRequest(`/api/books/${bookId}`);
        isRefreshRequired();
    }

    return (
        <>
            <div className="card">
                <img src={bookImage} className="card-img-top card-img" alt={bookTitle} />
                <div className="card-body">
                    <h5 className="card-title">{bookTitle}</h5>
                    <p className="card-text">Price : {bookPrice}</p>
                    <hr />
                    <div className="d-flex">
                        <button type="button" className="btn btn-primary" onClick={(e) => onUpdateEventHandler(e)}>Update</button>
                        <button type="button" className="btn btn-warning ms-auto" data-bs-toggle="modal" data-bs-target={`#modalId-${bookId}`}>Delete</button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={`modalId-${bookId}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{bookTitle}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete {bookTitle}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={(e) => OnDeleteHandler(e)}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}