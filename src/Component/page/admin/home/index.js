import React, { memo } from 'react'
<<<<<<< HEAD
// import { Bar } from "react-chartjs-2"
function Home() {
  // const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },]
  // }
=======
import clsx from 'clsx'
import style from "./home.module.scss"

function Home() {

>>>>>>> 5b496765aa95effd456143ff041d19345b6333d6
  return (
    <div className={clsx(style.home, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>thống kê</h1>
      <div className={clsx("mb-4")}>
        
      </div>
    </div>
  )
}

export default memo(Home)
