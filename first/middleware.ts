
import { NextRequest, NextResponse } from "next/server";


let count=0;
export function middleware(req: Request){
  
    
    if (req.url.slice(21)=="/api/user") {
        
        count++;
        
        
        const res=NextResponse.next()
        console.log(count)
        
        return res;
    }
}