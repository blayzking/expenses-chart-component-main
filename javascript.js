  var label = [];
  var sample_data = '';
  $.getJSON("data.json", function (data) {
      sample_data = data;
      console.log(sample_data);
      const days = data.map((object) => {
          return object["day"];
      });

      const amount = data.map((object) => {
          return object["amount"];
      });

      console.log(days);
      console.log(amount);
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: days,
              datasets: [{
                  //label: 'Spending - Last 7 days',
                  data: amount,
                  backgroundColor: [
                      'hsl(10, 79%, 65%)',
                      'hsl(10, 79%, 65%)',
                      'hsl(186, 34%, 60%)',
                      'hsl(10, 79%, 65%)',
                      'hsl(10, 79%, 65%)',
                      'hsl(10, 79%, 65%)',
                      'hsl(10, 79%, 65%)'
                  ],
                  // borderColor: [
                  //   'hsl(10, 79%, 65%)',
                  //   'hsl(10, 79%, 65%)',
                  //   'hsl(186, 34%, 60%)',
                  //   'hsl(10, 79%, 65%)',
                  //   'hsl(10, 79%, 65%)',
                  //   'hsl(10, 79%, 65%)'
                  // ],
                  hoverBackgroundColor: [
                                         'hsl(10, 79%, 65%, 0.5)',
                                         'hsl(10, 79%, 65%, 0.5)',
                                         'hsl(186, 34%, 60%,0.5)',
                                         'hsl(10, 79%, 65%, 0.5)',
                                         'hsl(10, 79%, 65%, 0.5)',
                                         'hsl(10, 79%, 65%, 0.5)',
                                         'hsl(10, 79%, 65%, 0.5)'

                  ],
                  borderWidth: 1,
                  borderRadius: 5,
                  borderSkipped: false
              }]
          },
        //   options: {
        //       scales: {
        //           y: {
        //               beginAtZero: true
        //           }
        //       }
        //   }
        //This is the config part. removes the gridlines at the background of the chart.
        options : {
          plugins: {
            tooltip: {
              //Removes the little color box in the tooltip
              displayColors: false,
              backgroundColor: 'hsl(25, 47%, 15%)',
              callbacks: {
                // title: (context) => {
                //   console.log(context);
                //   return;
                // },
                title: (item) => {
                  return;
                },
                label: (item, everything) => {
                  console.log(item);
                  let amountinDollar = item.raw;
                  let label = "$" + amountinDollar;
                  console.log(label);
                  return label;
                },
                body: (context) => {
                  console.log(context);
                  return "$" + context;
                }
              }
            },
            //the legend removes the legend key at the top of the chart
            legend: {
              display:false,  
            },  
          },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  color: "hsl(28, 10%, 53%)"
                }
              },
        
              y: {
                grid: {
                   display: false,
                   //drawBorder completely removes the y and x axis line
                   drawBorder: false,
                   beginAtZero: true
                //   color: 'rgba(217,143,7,0.1)',
                },
                ticks: {
                    display: false
                }
              }
            }
        }
      });
  });

//   let options = {
//     scales: {
//         xAxes: [{
//             gridLines: {
//                 display:false
//             }
//         }],
//         yAxes: [{
//             gridLines: {
//                 display:false
//             }   
//         }]
//     }
// }