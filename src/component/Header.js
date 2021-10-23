import React, { useState } from 'react';


const Header = () =>{
    const [HeaderList,HeaderListValue] = useState(['cong viec can lam'])
    return(
        <header>
            {HeaderList.map(Header => {
                return <h1>{Header}</h1>
            })}
        </header>
    )
}

export default Header