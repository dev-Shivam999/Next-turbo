
"use client"
import { useState } from "react";


export default function() {
    const [data, setData] = useState<[{ _id: string, title: string }
]>()
    async function handler() {
      try {
          const data = await fetch('http://localhost:3090/todo/get')

          const res = await data.json()
          setData(res)
      } catch (error) {
        console.log(error);
        
      }
        // console.log(res);
        
        
    }
    return (
        <div>
            sign in with
<div>
    {
        data&&data.length>0?<div>
            {
                data.map((data,i) =><div id={String(i)}>{data.title}</div>)
            }
        </div>:<div> click on button</div>
    }
</div>

            <button onClick={handler}>onclick</button>
        </div>
    );
};
