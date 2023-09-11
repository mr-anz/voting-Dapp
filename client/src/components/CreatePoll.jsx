import React, { useEffect, useState } from 'react'
import  {FaTimes} from 'react-icons/fa'
import { useStateContext } from '../context'

const CreatePoll = () => {
    const {createPoll, setCreatePoll , account, getCandidates, addCandidate} = useStateContext()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = {name, description, image}
        if(account){
            if(!name || !description || !image) return alert('plz fill in the form') 
            await addCandidate(data)
            onClose()
        } else{
            alert('Connect to metamask')
        }   
    }
    
    const onClose = ()=> {
        setName('')
        setDescription('')
        setImage('')
        setCreatePoll('scale-0')
    }
    
    useEffect(() => {
        getCandidates()
    }, [handleSubmit]);

  return (
    <div className={`fixed h-screen w-screen top-0 z-50 left-0 flex items-center justify-center
            bg-black bg-opacity-50 transform transition-transform duration-400 ${createPoll}`}
        >
            <div className="bg-white shadow-xl shadow-black rounded-xl w-10/12 md:w-2/5 h-7/12 p-6">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-bold text-gray-800">Insert Income Details</p>
                        <button
                            type="button"
                            onClick={onClose} 
                            className="border-0 bg-transparent hover:text-md focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <input 
                            type="text" 
                            className="block w-full p-2 text-sm text-slate-500 bg-transparent rounded-md border-0 focus:outline-none focuse:ring-0"
                            name="name"
                            placeholder="Name"
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <textarea 
                            type="text" 
                            className="block w-full p-2 text-sm text-slate-500 bg-transparent rounded-md border-0 focus:outline-none focuse:ring-0"
                            name="description"
                            placeholder="Description"
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                            required
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <input 
                            type="url" 
                            className="block w-full p-2 text-sm text-slate-500 bg-transparent border-0 rounded-md  focus:outline-none focuse:ring-0"
                            name="image"
                            placeholder="Image"
                            onChange={(e)=>setImage(e.target.value)}
                            value={image}
                            required
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center pt-10  rounded-lg">
                        <button className='btn bg-accent px-10 w-1/2 rounded-full' type='submit'> Submit</button>
                    </div>
                </form>
            </div>            
        </div>
  )
}

export default CreatePoll