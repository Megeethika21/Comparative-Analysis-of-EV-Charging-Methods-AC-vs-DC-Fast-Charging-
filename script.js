const chargingCtx =
document.getElementById('chargingChart');

new Chart(chargingCtx,{
    type:'bar',
    data:{
        labels:['AC Charging','DC Fast Charging'],
        datasets:[{
            label:'Charging Time (Hours)',
            data:[8,0.75]
        }]
    }
});

const efficiencyCtx =
document.getElementById('efficiencyChart');

new Chart(efficiencyCtx,{
    type:'pie',
    data:{
        labels:['AC Efficiency','DC Efficiency'],
        datasets:[{
            data:[92,97]
        }]
    }
});
