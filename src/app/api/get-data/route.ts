import client from '@/database/mongodb';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
    try {
        const ProductsCollection = await client.db("GLXI").collection("Products");

        const featuredProducts = await ProductsCollection.find({ isFeatured: true }).limit(30).toArray();
        const products = await ProductsCollection.find({ isFeatured2: true }).limit(20).toArray();

        if (!featuredProducts.length && !products.length) {
            return NextResponse.json({ success: false });
        }

        return NextResponse.json({
            success: true,
            data: {
                products,
                featuredProducts
            }
        });
    } catch (error : any) {
        console.log('error get-data: ', error);
        return NextResponse.json({ success: false, error: error?.message });
    }
}

export const revalidate = 0;
