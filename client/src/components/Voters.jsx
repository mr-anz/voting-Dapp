import { useStateContext } from '../context'


const Voters = () => {
  const {  voters, participants } = useStateContext()

  
  return (
    <div className="flex  flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
    <div
      className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
      shadow-md rounded-md w-full mb-10 bg-white"
    >
      <table className="min-w-full">
        <thead className="border-b border-gray-400">
          <tr>
            <th
              scope="col"
              className="text-sm flex justify-between font-medium
              px-6 py-4 text-left"
            >
              <span>Voters</span>
              <span>Number of voters: {Number(voters)}</span>
            </th>

          </tr>
        </thead>
        <tbody>
        {participants ? participants.map((item,key)=> (
            <Voter key={key}  item={item} />
        )): null}
          </tbody>
      </table>
    </div>
  </div>
  )
}

const Voter = ({item}) => (
    
      
        <tr className="border-b border-gray-300">
        <td
          className="text-sm font-light
          px-6 py-4 whitespace-nowrap"
        >
          <div className="flex h-full w-full justify-start items-center space-x-4">
          <img src='/profi.svg'  alt="voter" className="h-10 w-10 object-contain rounded-full shadow-md"/>
            <span className='px-2'>{item}</span>
          </div>
        </td>
  
      </tr>
     
    )


export default Voters