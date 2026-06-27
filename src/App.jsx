import { useState } from 'react'

const mapsUrl =
  'https://www.google.com/maps/place/Caf%C3%A9+San+Pedro+-+Catedral/data=!4m7!3m6!1s0x8428b1771a1feb49:0x470ff3508f2b66cb!8m2!3d20.6764562!4d-103.3475371!16s%2Fg%2F11t2q5hn22!19sChIJSesfGnexKIQRy2Yrj1DzD0c?authuser=0&hl=es-419&rclk=1'
const phone = '523338014805'
const whatsappText = encodeURIComponent(
  'Hola, quiero más información de Café San Pedro - Catedral.',
)
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`

function SafeImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${className} image-fallback`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />
}

const highlights = [
  {
    title: 'Capuchino de la casa',
    text: 'Café cremoso y aromático para pausar el recorrido por el Centro Histórico.',
  },
  {
    title: 'Chilaquiles y desayunos',
    text: 'Sabores abundantes, ideales para comenzar el día cerca de la Catedral.',
  },
  {
    title: 'Cheesecake y postres',
    text: 'Opciones dulces para cerrar la comida o acompañar una tarde de café.',
  },
]

const reviews = [
  'Excelente servicio, muy atenta la atención y un lugar al que volvería.',
  'Los cafés son deliciosos y el trato del equipo hace muy agradable la visita.',
  'Muy buena opción para cenar cerca de Catedral: porciones bastas, bebidas ricas y postres.',
]

function App() {
  return (
    <main>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>

      <section className="hero" id="inicio">
        <div className="hero__overlay" />
        <SafeImage src="/hero.jpg" alt="Café San Pedro - Catedral" className="hero__image" />
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#inicio">
            <SafeImage src="/logo.png" alt="Logo Café San Pedro" className="brand__logo" />
            <span>Café San Pedro</span>
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="nav__link">
            Cómo llegar
          </a>
        </nav>

        <div className="hero__content section-shell">
          <p className="eyebrow">Cafetería y restaurante en Centro Guadalajara</p>
          <h1>Café San Pedro - Catedral</h1>
          <p className="hero__text">
            Desayunos, café, postres y platillos abundantes a unos pasos de la Catedral de
            Guadalajara. Un espacio cálido para comer rico, reunirte y seguir disfrutando el centro.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
            <a className="btn btn--ghost" href={mapsUrl} target="_blank" rel="noreferrer">
              Ver ubicación
            </a>
          </div>
          <div className="trust-strip" aria-label="Datos de confianza">
            <span>★ 4.6 en Google</span>
            <span>2,169+ reseñas</span>
            <span>$200-300 por persona</span>
          </div>
        </div>
      </section>

      <section className="section-shell menu" id="menu">
        <p className="eyebrow">Favoritos de la casa</p>
        <h2>Antojos para desayuno, comida o cena</h2>
        <div className="cards-grid">
          {highlights.map((item) => (
            <article className="menu-card" key={item.title}>
              <div className="menu-card__icon">☕</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section-shell" id="galeria">
        <div className="section-heading">
          <p className="eyebrow">Ambiente y platillos</p>
          <h2>Un café con sabor a Centro Histórico</h2>
        </div>
        <div className="gallery__grid">
          <SafeImage src="/galeria1.jpg" alt="Platillo servido en Café San Pedro" className="gallery__image gallery__image--large" />
          <SafeImage src="/galeria2.jpg" alt="Café y pan dulce" className="gallery__image" />
          <SafeImage src="/galeria3.jpg" alt="Ambiente cálido del restaurante" className="gallery__image" />
        </div>
      </section>

      <section className="story">
        <div className="section-shell story__grid">
          <div>
            <p className="eyebrow">Nuestra experiencia</p>
            <h2>Una parada cómoda y confiable cerca de Catedral</h2>
          </div>
          <p>
            Café San Pedro - Catedral recibe a visitantes, familias y locales con atención amable,
            cocina reconfortante y bebidas para cualquier momento del día. Si estás recorriendo el
            Centro de Guadalajara, aquí tienes un punto práctico para desayunar, comer, cenar o
            disfrutar un postre sin complicaciones.
          </p>
        </div>
      </section>

      <section className="reviews section-shell" id="resenas">
        <p className="eyebrow">Reseñas y confianza</p>
        <h2>Lo que más recomiendan los visitantes</h2>
        <div className="reviews__grid">
          {reviews.map((review) => (
            <blockquote key={review}>
              <span>★★★★★</span>
              <p>“{review}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="location section-shell" id="ubicacion">
        <div className="location__card">
          <p className="eyebrow">Ubicación</p>
          <h2>Visítanos en José María Morelos 367</h2>
          <p>
            Zona Centro, 44100 Guadalajara, Jal. Ubicado en One Guadalajara Centro Histórico.
          </p>
          <p className="schedule">Horario referencial: abierto hasta las 11:00 p.m. Confirma por WhatsApp antes de visitar.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Reservar o preguntar
            </a>
            <a className="btn btn--outline" href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell final-cta__content">
          <h2>¿Listo para un buen café cerca de Catedral?</h2>
          <p>Haz clic, escríbenos y planea tu visita a Café San Pedro - Catedral.</p>
          <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
