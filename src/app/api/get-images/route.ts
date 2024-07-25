import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const Imgs = await client
        .db("SHLD")
        .collection("Images");
        const Imgs2 = await client
        .db("SHLD")
        .collection("Images2");
        
    const Images = await Imgs
    .find({})
    .limit(20)
    .toArray()

    const Images2 = await Imgs2
    .find({})
    .limit(1)
    .toArray()
    console.log('Imgs2: ', Images, Images2);


    if (!Images) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            Images
        },
        data2: {
            Images2
        }
    });
}

catch (error) {
    console.log('error get-Images: ', error);

}
}


export const dynamic = 'force-dynamic'
