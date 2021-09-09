document.getElementById("history1").innerHTML=JSON.parse(localStorage.getItem("history"))

var myFunction = function(cityInput) {
    cityName = document.getElementById("cityname")
    cityTemp = document.getElementById("citytemp")
    cityWind = document.getElementById("citywind")
    cityHumidity = document.getElementById("cityhumid")
    cityUV = document.getElementById("cityuv")
    var name = ["name1","name2","name3","name4","name5",]
    
    var cityInput = document.getElementById("text").value
    
    document.querySelector("#btn").addEventListener("click", function(){
       
        historyArray = []
        historyArray.push(cityInput)
        localStorage.setItem("history", JSON.stringify(historyArray))
        console.log(historyArray)
        console.log(localStorage.historyArray)
    })
            
    weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityInput +'&appid=57939b6cb981d3243e87a7e8802caa3e&units=imperial'


        fetch(weatherURL).then(function(response){
            if(response.ok) {
                response.json().then(function(data){
                    lat = data.coord.lat
                    lon = data.coord.lon
                    //this worked
                    document.getElementById("cityname").innerHTML=""
                    cityName.append(data.name)
                    document.getElementById("citytemp").innerHTML=""
                    cityTemp.append(data.main.temp + " F\xB0")
                    document.getElementById("citywind").innerHTML=""
                    cityWind.append(data.wind.speed + " MPH")
                    document.getElementById("cityhumid").innerHTML=""
                    cityHumidity.append(data.main.humidity + "%")
                    for(i=0;i< name.length;i++){
                        document.getElementById(name[i]).innerHTML=""
                        document.getElementById(name[i]).append(data.name)
                    }
                    oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&appid=57939b6cb981d3243e87a7e8802caa3e&units=imperial&cnt=3'
                    fetch(oneCallUrl).then(function(response){
                        if(response.ok) {
                            response.json().then(function(data){
                                 var uvstats = data.current.uvi
                                 
                                
                                if(uvstats < 3) {
                                    document.getElementById("cityuv").classList.add("safe")
                                }
                                else if(uvstats >= 3 && uvstats < 6){
                                    document.getElementById("cityuv").classList.add("unsafe")
                                }
                                else if(uvstats >= 6){
                                    document.getElementById("cityuv").classList.add("dangerous")
                                }
                                document.getElementById("cityuv").innerHTML=""
                                cityUV.append(data.current.uvi)

                                //Tried to make this DRY but couldnt find a solution

                                var data0 = data.daily[0].temp.day
                                document.getElementById("day1").innerHTML=""
                                document.getElementById("day1").append(data0+ " F\xB0")
                                document.getElementById("wind1").innerHTML=""
                                document.getElementById("wind1").append(data.daily[0].wind_speed + " MPH")
                                document.getElementById("humid1").innerHTML=""
                                document.getElementById("humid1").append(data.daily[0].humidity + " %")

                                var data1 = data.daily[1].temp.day
                                document.getElementById("day2").innerHTML=""
                                document.getElementById("day2").append(data1+ " F\xB0")
                                document.getElementById("wind2").innerHTML=""
                                document.getElementById("wind2").append(data.daily[1].wind_speed + " MPH")
                                document.getElementById("humid2").innerHTML=""
                                document.getElementById("humid2").append(data.daily[1].humidity + " %")


                                var data2 = data.daily[2].temp.day
                                document.getElementById("day3").innerHTML=""
                                document.getElementById("day3").append(data2+ " F\xB0")
                                document.getElementById("wind3").innerHTML=""
                                document.getElementById("wind3").append(data.daily[2].wind_speed + " MPH")
                                document.getElementById("humid3").innerHTML=""
                                document.getElementById("humid3").append(data.daily[2].humidity + " %")


                                var data3 = data.daily[3].temp.day
                                document.getElementById("day4").innerHTML=""
                                document.getElementById("day4").append(data3+ " F\xB0")
                                document.getElementById("wind4").innerHTML=""
                                document.getElementById("wind4").append(data.daily[3].wind_speed + " MPH")
                                document.getElementById("humid4").innerHTML=""
                                document.getElementById("humid4").append(data.daily[3].humidity + " %")


                                var data4 = data.daily[4].temp.day
                                document.getElementById("day5").innerHTML=""
                                document.getElementById("day5").append(data4+ " F\xB0")
                                document.getElementById("wind5").innerHTML=""
                                document.getElementById("wind5").append(data.daily[4].wind_speed + " MPH")
                                document.getElementById("humid5").innerHTML=""
                                document.getElementById("humid5").append(data.daily[4].humidity + " %")


                                

                            })

                        }
                    })
                })
            }
        })
        
    
};
