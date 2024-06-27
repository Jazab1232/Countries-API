import '../components/card.css'

export default function Header({ isDark, setIsDark }) {


  return (

    <>
      <header className={isDark ? 'navbar darkElement' : 'navbar'}>
        <div className="nav">
          <h2>Where in the world?</h2>
          <h5 onClick={() => { setIsDark(!isDark) }} > <i className={isDark ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>{isDark ? "Light Mode" : "Dark Mode"}</h5>
        </div>
      </header>
    </>
  )
}