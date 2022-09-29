import React from 'react'

const Banner = () => {
  return (
    <div>
  <header >
    <div className="container">
      <div className="py-5 bg-light rounded-3">
        <div className="my-4 my-lg-5">
          <h1 className="display-5 fw-bold">A warm welcome!</h1>
          <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
          <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
        </div>
      </div>
    </div>
  </header>
</div>

  )
}

export default Banner