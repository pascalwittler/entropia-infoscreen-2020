class Clock {
  constructor(hour, minute, second, hourHand, minuteHand, secondHand) {
    this.hourHand = hourHand;
    this.minuteHand = minuteHand;
    this.secondHand = secondHand;
    this.hourHandPosition = hour * 30 + minute / 2;
    this.minuteHandPosition = minute * 6 + second / 10;
    this.secondHandPosition = second * 6;
  }

  setCurrentTime() {
    const now = new Date();
    this.hourHandPosition = now.getHours() * 30 + now.getMinutes() / 2;
    this.minuteHandPosition = now.getMinutes() * 6 + now.getSeconds() / 10;
    this.secondHandPosition = now.getSeconds() * 6;
  }

  rotateClockHands() {
    this.hourHand.setAttribute(
      'style',
      'transform: translate(-50%, -50%) rotate(' + this.hourHandPosition + 'deg);'
    );
    this.minuteHand.setAttribute(
      'style',
      'transform: translate(-50%, -50%) rotate(' + this.minuteHandPosition + 'deg);'
    );
    this.secondHand.setAttribute(
      'style',
      'transform: translate(-50%, -50%) rotate(' + this.secondHandPosition + 'deg);'
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let clock = new Clock(0, 0, 0,
    document.querySelector('.hour-hand'),
    document.querySelector('.minute-hand'),
    document.querySelector('.second-hand')
  );

  window.setInterval(function() {
    clock.setCurrentTime();
    clock.rotateClockHands();
  }, 1000);
});
