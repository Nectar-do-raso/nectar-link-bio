import cardPremium from "./assets/card-premium.png"

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8d8b5] flex justify-center items-start p-3">

      {/* CONTAINER PRINCIPAL */}
      <div className="relative w-full max-w-[430px]">

        {/* IMAGEM */}
        <img
          src={cardPremium}
          alt="Néctar do Raso da Catarina"
          className="w-full block rounded-[34px] shadow-2xl"
        />

{/* OVERLAYS */}
<div className="absolute inset-0">

  {/* WHATSAPP */}
  <a
    href="https://api.whatsapp.com/send?phone=5575988263340"
    target="_blank"
    className="absolute left-[10%] w-[80%] top-[68.5%] h-[3.55%] rounded-full"
  >
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/nectardorasooficial"
    target="_blank"
    className="absolute left-[10%] w-[80%] top-[73%] h-[3.55%] rounded-full"
  >
  </a>

  {/* CATÁLOGO */}
  <a
    href="/catalogo-premium-nrco.pdf"
    target="_blank"
    rel="noreferrer"
    className="absolute left-[10%] w-[80%] top-[77.5%] h-[3.3%] rounded-full"
  >
  </a>

  {/* LOCALIZAÇÃO */}
  <a
    href="https://www.google.com/maps/place/R.+Otaviano+Leandro+de+Moraes,+748+-+Centro,+Paulo+Afonso+-+BA,+48602-490"
    target="_blank"
    className="absolute left-[10%] w-[80%] top-[81.5%] h-[3.55%] rounded-full"
  >
  </a>

</div>

      </div>

    </div>
  )
}