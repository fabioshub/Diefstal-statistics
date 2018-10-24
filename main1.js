$(document).ready(function() {
// diagram1()
// hideandshowv2()
// hideandshowv1()

  var typesoort = 'bar'
  $('#vraag2').hide()

  function hideandshowv2() {
    $('#vraag2a').on('click', function() {
      $('#vraag1').slideUp(200)
      $('#vraag2').slideDown(200)
    })
  }

  function hideandshowv1() {
    $('#vraag1a').on('click', function() {
      $('#vraag1').slideDown(200)
      $('#vraag2').slideUp(200)
    })
  }

  // function diagram1() {
    $.getJSON("MOCK_DATA.json", function (json) {
         // will generate array with ['Monday', 'Tuesday', 'Wednesday']
         var labels = json.map(function(item) {
           return item.first_name;
         });
         var dataset1 = json.map(function(item) {
           return item.id;
         });

          Chart.defaults.global.legend.labels.usePointStyle = true;
          Chart.defaults.global.legend.labels.fontSize = 13;
          Chart.defaults.global.defaultFontColor = 'darkgrey';
          Chart.defaults.global.legend.position = 'bottom';
          var config1 = {
            type: typesoort,
            data: {
              labels: labels,
                datasets: [{
                    type: 'bar',
                    fill: false,
                    label: "Fietsen gestolen",
                    backgroundColor: '#f8c54d',
                    borderColor: '#f8c54d',
                    data: dataset1,
                },{
                    label: "Overvallen gepleegd",
                    fill: false,
                    backgroundColor: '#eb5080',
                    borderColor: '#eb5080',
                    data: data3,
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


          $('#bar').on('click', function() {
            chart1.destroy();

            // chart1.destroy();
            var temp = jQuery.extend(true, {}, config1);
            temp.type = 'bar'; // The new chart type
            var chart1 = new Chart(ctx1, temp);
            chart1.update()
          })
          $('#radar').on('click', function() {
            var temp = jQuery.extend(true, {}, config1);
            temp.type = 'radar'; // The new chart type
            chart1.destroy();
            var chart1 = new Chart(ctx1, temp);
            chart1.update()
          })
      });
  // }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
});
