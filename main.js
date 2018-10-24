$(document).ready(function() {
  setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);
diagram1()
// hideandshowv2()
// hideandshowv1()
  //
  // var typesoort = 'bar'
  // $('#vraag2').hide()

  // function hideandshowv2() {
  //   $('#vraag2a').on('click', function() {
  //     $('#vraag1').slideUp(200)
  //     $('#vraag2').slideDown(200)
  //   })
  // }
  //
  // function hideandshowv1() {
  //   $('#vraag1a').on('click', function() {
  //     $('#vraag1').slideDown(200)
  //     $('#vraag2').slideUp(200)
  //   })
  // }

  $.getJSON("data.json", function appel(json){});
  $.getJSON("data2.json", function appel(ja){});

  function diagram1() {
    $.getJSON("data.json", function (json) {
         // will generate array with ['Monday', 'Tuesday', 'Wednesday']
         var labels = json.slice(0, 20).map(function(item) {
           return item.plek;
         });
         var dataset1 = json.map(function(item) {
           return item.fiets;
         })
         var dataset2 = json.map(function(item) {
           return item.val;
         })



          Chart.defaults.global.legend.labels.usePointStyle = true;
          Chart.defaults.global.legend.labels.fontSize = 13;
          Chart.defaults.global.defaultFontColor = 'darkgrey';
          Chart.defaults.global.legend.position = 'bottom';
          var config1 = {
            type: 'bar',
            data: {
              labels: labels,
                datasets: [{
                    type: 'bar',
                    fill: false,
                    label: "Fietsen gestolen",
                    backgroundColor: '#f8c54d',
                    borderColor: '#f8c54d',
                    data: dataset2,
                },{
                    label: "Overvallen gepleegd",
                    fill: false,
                    backgroundColor: '#eb5080',
                    borderColor: '#eb5080',
                    data: dataset1,
                }]
            },
            options: {
              scales: {
            xAxes: [{
                        gridLines: {
                            color: "rgba(240, 240, 240, 1)",
                        }
                    }],
            yAxes: [{
                        gridLines: {
                            color: "rgba(240, 240, 240, 1)",
                        }
                    }]
              }
            }
          }
          var ctx1 = document.getElementById('vraag1').getContext('2d');
          var chart1 = new Chart(ctx1, config1);
          var startnode = 0;
          var endnode = 20;

          $('.red').on('click', function() {
            // startnode = startnode - 1
            endnode = endnode - 2
            chart1.config.data.labels = json.slice(0, endnode).map(function(item) {
              return item.plek;
            });
            chart1.update()
          })

          $('.yellow').on('click', function() {
            // startnode = startnode + 1
            endnode = endnode + 2
            chart1.config.data.labels = json.slice(0, endnode).map(function(item) {
              return item.plek;
            });
            chart1.update()
          })

          $('#vraag2a').on('click', function() {
            chart1.config.data.datasets = [{
                type: 'bar',
                fill: false,
                label: "Fietsen gestolen",
                backgroundColor: '#f8c54d',
                borderColor: '#f8c54d',
                data: data1,
            },{
                label: "Fietstrommels gestolen",
                fill: false,
                backgroundColor: '#eb5080',
                borderColor: '#eb5080',
                data: data2,
            }]
            chart1.update()
          })

          $('#vraag1a').on('click', function() {
            chart1.config.data.datasets = [{
                type: 'bar',
                fill: false,
                label: "Fietsen gestolen",
                backgroundColor: '#f8c54d',
                borderColor: '#f8c54d',
                data: dataset2,
            },{
                label: "Overvallen gepleegd",
                fill: false,
                backgroundColor: '#eb5080',
                borderColor: '#eb5080',
                data: dataset1,
            }]
            chart1.update()
          })
          $.getJSON("data2.json", function (json) {
            chart1.config.data.labels = json.slice(0, 100).map(function(item) {
              return item.stad;
            });
            // var dataset1 = json.map(function(item) {
            //   return item.fiets;
            // })
            // var dataset2 = json.map(function(item) {
            //   return item.val;
            // })
            chart1.update()

          });
      });
  }
});
