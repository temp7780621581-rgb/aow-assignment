import Image from "next/image"

export default function LoginSection() {
  return (
    <section className="py-16 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Left side - Light image */}
          <div className="w-full md:w-1/2 bg-[#f8fbff] p-6 md:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <Image
                src="/images/authenticate-skills-section.png"
                alt="Authenticate Skills, Simplify Hiring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-white mb-6">Sign in to Skill Kwiz</h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="h-4 w-4 mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-white hover:underline">
                    Forget Password?
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                  >
                    Sign In
                  </button>

                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center bg-white text-[#00418d] p-3 rounded-md font-medium border border-white/30 hover:bg-blue-50 transition-all"
                  >
                    Sign Up
                  </a>
                </div>

                <div className="text-center text-white">
                  <p className="mb-2">— Or Login with —</p>
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="white"
                        />
                        <path d="M17.2 10.8H12.8V7.2H11.2V10.8H6.8V12.4H11.2V16H12.8V12.4H17.2V10.8Z" fill="#DB4437" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.0532 12.5282C17.0699 14.0268 17.6762 15.4512 18.7212 16.4962C18.7678 16.5428 18.7911 16.6077 18.7857 16.6733C18.5987 17.6267 18.2697 18.5467 17.8122 19.3992C17.4222 20.1372 16.5372 21.0792 15.6392 21.0852C14.8042 21.0912 14.5022 20.6142 13.5372 20.6142C12.5722 20.6142 12.2342 21.0672 11.4522 21.0912C10.6042 21.1152 9.63221 20.0702 9.23421 19.3362C8.0022 17.3882 7.0252 13.7852 8.3042 11.3582C8.9342 10.1522 10.1042 9.3882 11.3642 9.3642C12.1762 9.3402 12.9342 9.8702 13.4582 9.8702C13.9822 9.8702 14.9232 9.2342 15.9192 9.3402C16.7372 9.3882 17.4702 9.7782 17.9822 10.4022C17.9941 10.4156 18.0026 10.4319 18.0069 10.4496C18.0112 10.4673 18.0111 10.4857 18.0067 10.5033C17.7647 11.1953 17.0622 12.0073 17.0532 12.5282Z"
                          fill="black"
                        />
                        <path
                          d="M15.0002 8.0002C15.0002 7.0722 14.6372 6.1802 14.0002 5.5372C13.3692 4.9002 12.4862 4.5312 11.5702 4.5002C11.5522 4.5002 11.5342 4.5092 11.5222 4.5212C11.5102 4.5332 11.5042 4.5512 11.5042 4.5692V4.5692C11.5042 5.4872 11.8672 6.3792 12.5042 7.0222C13.1352 7.6592 14.0182 8.0282 14.9342 8.0592C14.9522 8.0592 14.9702 8.0502 14.9822 8.0382C14.9942 8.0262 15.0002 8.0082 15.0002 7.9902V8.0002Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

