window.addEventListener('DOMContentLoaded', function() {
    var secondHand = document.querySelector('.second-hand');
    var minuteHand = document.querySelector('.minute-hand');
    var hourHand = document.querySelector('.hour-hand');

    function rotateClockHands() {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        
        var secondDegree = seconds * 6; // 6 degrees per second
        var minuteDegree = minutes * 6; // 6 degrees per minute
        var hourDegree = hours * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
        
        secondHand.style.transform = 'rotate(' + secondDegree + 'deg)';
        minuteHand.style.transform = 'rotate(' + minuteDegree + 'deg)';
        hourHand.style.transform = 'rotate(' + hourDegree + 'deg)';
    }

    setInterval(rotateClockHands, 1000); // Update the clock every second
});