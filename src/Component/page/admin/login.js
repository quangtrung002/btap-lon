import React, { useRef, useState } from 'react'

import clsx from 'clsx'
import style from './admin.module.scss'

function Login() {
  const [checkLogin, setCheckLogin] = useState(false)
  const refUser = useRef()
  const refPassWord = useRef()

  return (
    <div className={clsx(style.formLogin, {[style.unLockLogin] : checkLogin})}>
      <section className={clsx(style.gradientCustom, "vh-100")}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" >
                <div class="card-body p-5">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase  text-center">Login</h2>
                    <p class="text-white-50 mb-5  text-center">Please enter your login and password!</p>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">Email or username</label>
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" ref={refUser} />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" ref={refPassWord} />
                    </div>
                    <button
                      class="btn btn-outline-light btn-lg px-5 mt-2" type="submit"
                      onClick={() => {
                        if(refUser.current.value === "admin" && refPassWord.current.value === "admin"){
                          setCheckLogin(true)
                        }
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
