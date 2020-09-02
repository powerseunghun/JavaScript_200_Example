function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height} chart draw.`);
}

drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} X ${height} chart draw.`);
}

drawChart2(300);
drawChart2();
