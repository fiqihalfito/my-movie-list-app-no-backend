import { useState } from "react"
import Star from "../assets/icons/Star"

const Modal = ({ setShowModal, addList, editList, movie, mode }) => {

    const editMode = mode === 'edit'

    const [data, setData] = useState({
        title: editMode ? movie.title : null,
        stars: editMode ? movie.stars : 0,
        date: editMode ? movie.date : new Date().toString(),
    })

    const [showTitleInput, setShowTitleInput] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((data) => ({
            ...data,
            [name]: value
        }))
        console.log(data)
    }

    const handleRating = (numStars) => {
        setData((data) => ({
            ...data,
            stars: numStars
        }))
        console.log(data)

    }

    const postMovie = (e) => {
        e.preventDefault()
        addList(data)
        setShowModal(false)
    }

    const updateMovie = async (e) => {
        e.preventDefault()
        editList(movie.id, data)
        setShowModal(false)
    }

    return (
        <div className="bg-black bg-opacity-40 h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="w-1/3 h-1/2x p-12 bg-slate-900 border-4 border-indigo-700 rounded-lg text-white ">
                <p className="font-bold mb-4">Let's {mode} the movie</p>

                <form className="flex flex-col items-center">

                    <label htmlFor="title" className="text-lg font-bold mb-2">Title</label>
                    {showTitleInput && <input
                        type="text"
                        className="bg-transparent mb-6 w-full text-2xl font-bold outline-none border-b-2 border-indigo-700 focus:border-indigo-400 "
                        placeholder="title goes here"
                        name="title"
                        value={data.title}
                        autoFocus
                        onChange={handleChange}
                        onBlur={() => data.title && setShowTitleInput(false)} />}

                    {!showTitleInput && <p className="text-2xl mb-6 font-bold border-b-2 border-indigo-700 text-center" onClick={() => setShowTitleInput(true)}>{data.title}</p>}

                    <label htmlFor="stars" className="text-lg font-bold ">Rating</label>

                    <div className="mb-4 flex flex-row-reverse">
                        {[1, 2, 3, 4, 5].reverse().map((num) => (
                            <Star key={num} isOn={num <= data.stars} handleRating={() => handleRating(num)} />
                        ))}
                    </div>


                    <div>
                        <button
                            type="button"
                            className="btn bg-gray-500 rounded-r-none"
                            onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                        <input
                            type="submit"
                            className="btn bg-cyan-500 rounded-l-none"
                            value="Submit"
                            onClick={editMode ? updateMovie : postMovie} />
                    </div>
                </form>
            </div >

        </div >
    )
}

export default Modal