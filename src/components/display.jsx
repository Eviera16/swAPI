import React from 'react';

const Display = ({data, type, id}) => {

    return (
        <div>
            {type === "people" ?
            <div style={{display:"flex", flexDirection:"column", alignItems:"left"}}>
                <h1>{data.name}</h1>
                <p>Height:{data.height}</p>
                <p>Hair Color:{data.hair_color}</p>
                <p>Eye Color:{data.name}</p>
                <p>Skin Color:{data.name}</p>
            </div>
            :
            <div style={{display:"flex", flexDirection:"column", alignItems:"left"}}>
                <h1>{data.name}</h1>
                <p>Climate:{data.climate}</p>
                <p>Terrain:{data.terrain}</p>
                <p>Surface Water:{data.surface_water}</p>
                <p>Population:{data.population}</p>    
            </div>
            }
        </div>
    );
}


export default Display;