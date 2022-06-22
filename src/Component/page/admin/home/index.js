import React, { memo } from 'react'

import {Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';


import clsx from 'clsx'
import style from "./home.module.scss"

function Home() {
  const customer = JSON.parse(localStorage.getItem("customer"))
  const visiter = JSON.parse(localStorage.getItem("visiter"))
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const notValue = labels.map(obj => {
    return {
      dayBuy: obj,
      amount: 0
    }
  })

  const dataVisiter = notValue.map(obj => {
    let amount = 0
    visiter.forEach(visit => {
      if (visit.dayBuy.toUpperCase() === obj.dayBuy.toUpperCase()) {
        amount = amount + Number(visit.amount)
      }
    })
    return amount
  })

  const dataCustomer = notValue.map(obj => {
    let amount = 0
    customer.forEach(cus => {
      cus.sold.forEach(item => {
        if(item.dayBuy.toUpperCase() === obj.dayBuy.toUpperCase()){
          amount = amount + Number(item.amount)
        }
      })
    })
    return amount
  })

  

  return (
    <div className={clsx(style.home, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>thống kê</h1>
      <div className={clsx("mb-4")}>
        <div>
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: 'customer',
                  data: dataCustomer,
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1,
                },
                {
                  label: 'visiter',
                  data: dataVisiter,
                  backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
