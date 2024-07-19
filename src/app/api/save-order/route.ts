import { v4 as uuidv4 } from 'uuid';
import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function POST(req: NextRequest, res: NextApiResponse) {
  const {order} = await req.json()
  if (req.method === 'POST') {
    // Process a POST request
    if (!order) return NextResponse.json({success:false})

    // Generate a unique order number
    const orderNumber = uuidv4();

    // Add the unique order number to the order object
    let nb = `${orderNumber}`?.split("-")[0]?.toUpperCase();

    const insertReq = await client.db("URBG").collection("Orders").insertOne({...order,orderNumber:nb});
    if (insertReq.acknowledged) {         
      return NextResponse.json({success:true, orderNumber: nb});
    }
  }
  return NextResponse.json({success:false});
}
