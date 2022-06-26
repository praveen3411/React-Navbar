import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Avathar from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Avathar
      Uname="Praveen"
      imgaeurl="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"
      Title="Software-Engeneering"
      skills={[
        {
          icon:
            "https://imgs.search.brave.com/gEkpQnMfkwNyRX_9wpZhc-Q6A4RtBAmvHQn7jQdPQx8/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/bEFCNW1MaUItN1It/cnNPWVdWMEpnSGFF/byZwaWQ9QXBp",
          description: "HTML"
        },
        {
          icon:
            "https://imgs.search.brave.com/MDNGj47YMbe7kK2tMqJpjryWRLAzyduE-Qvyw4R4Izw/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/eUFZOWNaVEwyd3Bn/Rzd3Yl9zVmpRSGFF/TSZwaWQ9QXBp",
          description: "CSS"
        },
        {
          icon:
            "https://imgs.search.brave.com/C52rZJjaZz20E00FytizSqMuCr0RJ0CDrWClJXp0s_U/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Z290c0dEZjI5eTEw/a25vNDdDSE93SGFF/byZwaWQ9QXBp",
          description: "Js"
        }
      ]}
    />
    <Avathar
      Uname="Pravallika"
      imgaeurl="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
      Title="Software-Engeneering"
      skills={[
        {
          icon:
            "https://imgs.search.brave.com/gEkpQnMfkwNyRX_9wpZhc-Q6A4RtBAmvHQn7jQdPQx8/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/bEFCNW1MaUItN1It/cnNPWVdWMEpnSGFF/byZwaWQ9QXBp",
          description: "HTML"
        },
        {
          icon:
            "https://imgs.search.brave.com/MDNGj47YMbe7kK2tMqJpjryWRLAzyduE-Qvyw4R4Izw/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/eUFZOWNaVEwyd3Bn/Rzd3Yl9zVmpRSGFF/TSZwaWQ9QXBp",
          description: "CSS"
        },
        {
          icon:
            "https://imgs.search.brave.com/C52rZJjaZz20E00FytizSqMuCr0RJ0CDrWClJXp0s_U/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Z290c0dEZjI5eTEw/a25vNDdDSE93SGFF/byZwaWQ9QXBp",
          description: "Js"
        }
      ]}
    />
  </StrictMode>
);
