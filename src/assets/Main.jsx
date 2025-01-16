import LanguagesList from "./components/LanguagesList"

const Main = () => {
  return (
    <>
      <h1 className='py-3 px-3 bg-light'>Learn Web development</h1>
      <section>
        <LanguagesList />
        {/* <ul>
          <li className='list-unstyled'>
            <button className='btn btn-primary'>html</button>
          </li>
        </ul>
        <div className='card'>
          <h3 className='my-3 mx-3'>HTML</h3>
          <p className='mx-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quod temporibus fuga adipisci, et doloribus. Eveniet corporis modi nisi voluptas, quis perspiciatis et dolore, voluptates blanditiis officia architecto! Exercitationem, excepturi.</p>
        </div> */}
      </section>
    </>
  )
}

export default Main
