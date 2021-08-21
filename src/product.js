import React from 'react';
import './product.css';
//Voeg hier ook nog een kleine hoe werkt het knop toe 


export default class Product extends React.Component {
    componentDidMount() {
        //Voeg een if toe die kijkt of Chart bestaat. Zo niet. Laadt de content dan in vanuit een local copy van alles wat in de chart Chart.js file staat.
        // Bij CDN's zijn er meerdere versies beschikbaar. Dit is een verouderde versie omdat die van W3C komt. Daardoor is een gridLines bijv. grid geworden in de nieuwe.
        // ALLES MET BETREKKING TOT DE GRAFIEK LOSKOPPELEN NAAR APARTE COMPONENT. DAN KAN JE NA EEN STATE CHANGE HEM INLADEN MET DE JUISTE PROPS.
        const Chart = window.Chart;
        const januariZoekvolume = 90;
        new Chart("myChart", {
            type: 'line',
            data: {
              labels: ['januari', 'februari', 'maart', 'april', 'mei','juni','juli', 'augustus', 'september', 'oktober', 'november','december'],
              datasets: [{
                label: 'Zoekvolume (0% - 100%)',
                yAxisID: 'A',
                data: [januariZoekvolume, 70, 60, 76, 10,20,30,40,55,40,30,20],
                borderColor: 'black',
                borderWidth: 3,
                fill: false,
              }, {
                label: 'Temperatuur',
                yAxisID: 'B',
                data: [1,2,3,4,5,6,7,-8,-5,-10,11,12],
                borderColor: 'white',
                borderWidth: 3,
                fill: false,
              }]
            },
            options: {
              legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 14
                }
            },
              title: {
                display: true,
                text: 'Online zoekvolume voor ...',
                fontColor: 'white',
                fontSize: 25
              },
              scales: { 
                xAxes: [{                 
                  ticks: {                    
                      fontColor: "white",
                      fontSize: 14,   
                  }
              }],
                yAxes: 
                [{
                  id: 'A', 
                  type: 'linear',
                  position: 'left',                              
                  font: 'Arial',
                  scaleLabel: {
                    display: true,
                    labelString: 'Zoekvolume',
                    fontColor: 'black',
                    fontSize: 18
                  },  
                  ticks: {                   
                    fontColor: "black",
                    fontSize: 13,                   
                    max: 100,
                    min: 0 },         
                  }, 
                  {
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                  scaleLabel: {
                    display: true,
                    labelString: 'Temperatuur',
                    fontColor: 'white',
                    fontSize: 18
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    max: 40,
                    min: -10,
                    fontColor: "white",
                    fontSize: 13,
                  },                                   
                }]                
              }
            }
          });
        }
    render() {
        return (
            <div>
                <header>
                    <h1>Weather To Sell</h1>
                </header>
                <main>
                    <section className="zoekVak">
                        <p>Vul het product in waarover jij meer te weten wil komen</p>
                        {/* input op enter afvuren en een button om te zoeken*/}
                        <input placeholder="zoek naar een product"onKeyUp={this.props.keyUpHandler} type="text"></input>
                    </section>
                    <section className="grafiek">
                        <canvas id="myChart" style={{width:'100%', height: '35em'}}></canvas>
                    </section>
                    <section className="analyse">
                        <p>Uitleg</p>
                    </section>
                </main>
            </div>
        )
    }
}