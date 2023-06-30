import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="text-3xl mt-5 font-bold font-mono text-center text-white  ">
        My Contact
      </p>
      <div className=" mt-5 items-center p-4 bg-gray-500 lg:mx-20 mx-16 text-neutral-content">
        <div className="grid lg:grid-cols-3  mt-5 mx-0 lg:mx-40 bg-gray-500 text-white">
          <p>
            Email : <br />
            <span>shaikarshadrahman02@gmail.com</span>
          </p>
          <p className="lg:mt-0 mt-8">
            Phone : <br />
            <span>+880-1854859267</span>
          </p>
          <p className="lg:mt-0 mt-8">
            Address : <br />
            <span>Halishahar K-Block , Chattagram, Bangladesh</span>
          </p>
        </div>
      </div>
      <div>
        <div className=" lg:mx-24">
          <div className="hero-content flex-col  ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-white font-bold">Connect With Me</h1>
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-gray-500">
              <form
                method="POST"
                action="https://formspree.io/f/xzblpkny"
                className="card-body"
              >
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="text" className="label">
                    <span className="label-text text-white">TEXT</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write SomeThing"
                    className="input input-bordered"
                    name="text"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="bg-info btn text-white mb-5 hover:bg-green-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-cyan-300 w-full text-8xl text-center h-48">
              Let's Start Your Next Project !!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
