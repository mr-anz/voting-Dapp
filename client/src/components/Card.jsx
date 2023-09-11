import { Link } from 'react-router-dom'
import { useStateContext } from '../context'

const Card = () => {
    
    const { candidates, getCandidate } = useStateContext()
    

  return (
    <div className='p-12'>
        <h1 className='mx-auto py-auto text-white text-4xl font-bold'>Polls</h1>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    candidates?.map((items, key) => (
                        
                        <article className="w-[320px] mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <Link onClick={()=>{getCandidate(key)}} to={'/projects/' + (key+1)}>
                                <img src={items.imageUri} loading="lazy" alt={items.name}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={'/identi.png'} className="w-8 h-8 rounded-full" alt={items.name} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-300">{items.creator.slice(0,6)+ '....' + items.creator.slice(36)}</span>
                                        
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-300">
                                        {items.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.description.slice(0,300) + ' ...'}</p>
                                </div>
            
                                    
                            
                            <div className="flex justify-center p-3">
                                <button className="btn px-24 glass rounded-full bg-[#b6e206]" >View</button>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </div>
    </div>
  )
}

export default Card