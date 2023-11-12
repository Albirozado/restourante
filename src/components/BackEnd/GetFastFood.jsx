"use client"
import React, { useState, useEffect } from 'react';
import { Image } from 'antd';

export default function GetFastFood() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restouranteapinode.onrender.com/api/getallgaleria", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        // Lidar com erros aqui
        console.error("Erro ao buscar dados:", error);
      });
  }, []); // O array vazio assegura que o efeito é executado apenas uma vez (equivalente a componentDidMount)

  return (
    <>
    {data === 0 ? 
        <>
              <h1>CARREGANDO...</h1>
        </>
        :
        <>


        {data.map((p) => (

              <Image.PreviewGroup 
                  preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                  }}
                  
                  
                >
                  <Image width={200} style={{maxWidth: "100%"}} src={p.galeriafoto} key={p._id} />
              </Image.PreviewGroup>
        ))}
        </>
    }
    </>
  );
}
