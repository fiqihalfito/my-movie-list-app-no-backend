import { useState } from "react"
import Modal from "./Modal"
import EditIcon from "../assets/icons/EditIcon"
import RenameIcon from "../assets/icons/RenameIcon"
import DeleteIcon from "../assets/icons/DeleteIcon"
import StarSmall from "../assets/icons/StarSmall"

const ListItem = ({ movie, deleteList, editList }) => {

    const [showModal, setShowModal] = useState(false)


    return (
        <div className="flex justify-between items-center h-24 pl-8 border-2 border-l-4 border-l-blue-600 rounded-lg overflow-hidden">

            <div className="space-y-1">
                <p className="text-lg font-bold">{movie.title}</p>
                <p className="text-xs border border-gray-400 text-gray-800 rounded-full px-3 py-1">{movie.date}</p>
            </div>

            <div className="flex items-center font-bold">
                {[1, 2, 3, 4, 5].map(num => (
                    <StarSmall isOn={num <= movie.stars} />
                ))}
            </div>

            <div className="group h-full w-24 hover:w-1/3 flex justify-center items-center bg-transparent hover:border-l-4 hover:border-l-red-800 rounded-l-lg transition-all">
                <div className="group-hover:hidden">
                    <EditIcon />
                </div>
                <div className="hidden group-hover:grid grid-cols-2 w-full h-full transition-all overflow-hidden">
                    <button className=" bg-red-500 flex justify-center items-center" onClick={() => deleteList(movie.id)}>
                        <DeleteIcon />
                    </button>
                    <button className=" bg-yellow-300 flex justify-center items-center" onClick={() => setShowModal(true)}>
                        <RenameIcon />
                    </button>
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} movie={movie} mode="edit" editList={editList} />}
        </div>
    )
}

export default ListItem