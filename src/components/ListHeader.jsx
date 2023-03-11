import { useState } from "react"
import AddIcon from "../assets/icons/AddIcon";
import SignoutIcon from "../assets/icons/SignoutIcon";
import Modal from "./Modal"

const ListHeader = ({ addList }) => {
    const [showModal, setshowModal] = useState(false)


    return (
        <div className="flex justify-between items-center h-24 px-8 border-2 border-amber-500 bg-amber-200 rounded-md mb-4">
            <h1 className="text-2xl font-bold">My Movie List</h1>
            <div className="space-x-2">
                <button
                    className="btn bg-cyan-500"
                    onClick={() => setshowModal(true)}>
                    <AddIcon />
                </button>
                <button
                    className="btn bg-slate-700">
                    <SignoutIcon />
                </button>
            </div>
            {showModal && <Modal setShowModal={setshowModal} addList={addList} mode="create" />}
        </div>
    )
}

export default ListHeader