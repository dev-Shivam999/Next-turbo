
import client from '@/db'

async function fec(){
  // await  new Promise(r=>setTimeout(4,r))
  const user =await client.nextUser.findFirst()
  const user2 =await client.nextUser.findMany({})

  
  

  return {
   name: user?.name,
   email:user?.email
  
}
}

export default async function Home() {
const data=await fec();

  return(
    <main>
    <div className="flex flex-col  justify-center items-center h-screen">
      <div className="font-bold text-4xl uppercase m-3">
        user data
      </div>
      {data&&
        <div>
            <div>
              email :{" "}{data.name}
            </div>
            <div>
              name :{" "}{data.email}
            </div>
            <div>
              password
            </div>
        </div>
      }
       
    </div>
    </main>
  )
}
