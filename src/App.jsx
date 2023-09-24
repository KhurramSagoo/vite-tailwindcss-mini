import './App.css'

function App() {

  return (
    <>
  <form
          className="pt-20 pb-10 px-4 sm:px-20 flex flex-col"
        >
          <h6 className="text-3xl font-bold mb-10 text-center">Create your account</h6>
          <div className="space-y-5 w-full mb-20">
            <input
              className="h-[54px] w-full border border-gray-200 outline-none ps-3 
              rounded-[4px] focus:border-[#F4AF01] transition duration-100 ease-in"
              type="text"
              value={name}
              placeholder="Name"
            />
            <input
              className="h-[54px] w-full border border-gray-200 outline-none ps-3 
              rounded-[4px] focus:border-[#F4AF01] transition duration-100 ease-in"
              type="email"
              placeholder="Email"
            />
            <div
              className="h-[54px] w-full border border-gray-200 outline-none
              rounded-[4px] focus-within:border-[#F4AF01] transition duration-100 ease-in flex
              items-center pe-3"
            >
              <input
                className="h-full w-full outline-none ps-3"
                placeholder="Password"
              />
              <div
                className="w-7 h-7 text-gray-400 cursor-pointer"
              >
              </div>
            </div>
          </div>
          <button className="bg-[#F4AF01] text-white h-[48px] rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in">
            Sign Up
          </button>
        </form>

    </>
  )
}

export default App
