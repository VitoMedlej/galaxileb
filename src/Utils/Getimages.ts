

export const Getimages = async () => {
    try {
  
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-images?tkn=${process.env.token}`
      
      // ,{next:{revalidate:0}}
    );
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.log('err: ', err);
  
  }
  };