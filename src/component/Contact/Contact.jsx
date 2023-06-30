import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="text-3xl mt-5 font-bold font-mono text-center text-white underline ">
        My Contact
      </p>
      <div className=" mt-5 items-center p-4 bg-gray-500 lg:w-[1055.5px] mx-16 text-neutral-content">
        <div className="grid lg:grid-cols-3  mt-5 mx-0 bg-gray-500 text-white">
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
        <div className=" ">
          <div className="hero-content flex-col  ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-white font-bold">Connect With Me</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                method="POST"
                action="https://formspree.io/f/xzblpkny"
                className="card-body"
              >
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="text" className="label">
                    <span className="label-text">TEXT</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write SomeThing"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="bg-info btn text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
