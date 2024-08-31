import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {FilesUpload, FileUpload, Widget} from "@uploadcare/react-widget";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface IImageForm {
    HandleImagesChange :  Dispatch<SetStateAction<string[] | any[]>>
    defaultValue ?: string[] | undefined | null;
  }

const ImageForm = ({defaultValue,HandleImagesChange}:IImageForm) => {
 const [load,setLoad] = useState(true)
//  useEffect(() => {
//   setLoad(true)
//  }, [])
 const [imgs,
  setImages] = useState < string[] > ([])
  return (
        <Box sx={{
        
        }}>
            {/* <Typography sx={{
                mt: '0'
            }} >Add Images</Typography> */}
            {/* <Widget
            clearable
                multiple
                onFileSelect={async(group : any) => {
                if (group) {
                    const files = await Promise.all(group.files());
                    const urls = files.map((file: { cdnUrl: any; }) => file.cdnUrl);
                    // console.log('urls: ', urls);
                    HandleImagesChange(urls)
                }
            }}

                imagesOnly={true}
                multipleMax={15}

                publicKey={`${'7e81c368cf8509445c24'}`}/> */}


{load && <Widget
multiple
multipleMax={1}

                                    clearable
                                    imagesOnly
                                    
                                    // values={imgs}
                                    onChange={() => {
                                    // setProduct({
                                    //     ...product,
                                    //     images: imgs
                                    // })
                                    HandleImagesChange(imgs)
                                }}
                                    onFileSelect={async(e : any) => {
                                    let filess = e && e.files();
                                    if (!filess) return;
                                    const immg : string[] = [];
                                    for (let i = 0; i < filess.length; i++) {
                                        filess[i].done((file : any) => {
                                            if (file
                                                ?.cdnUrl) {
                                                immg.push(`${file.cdnUrl}`)
                                            }
                                        })
                                    }
                                    setImages(immg)
                                }}

                                publicKey="7e81c368cf8509445c24"


                                    />
                                    }

        </Box>
    )
}

export default ImageForm
