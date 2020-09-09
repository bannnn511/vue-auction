export function clearArray<T>(arr: T[]) {
  console.log(arr);
  while (arr.length) {
    arr.pop();
    console.log("helo");
  }
}

export function countdown(endDate: Date) {
  // Update the count down every 1 second
  const d = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = endDate.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      return "Expired";
    }
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  return d;
}
