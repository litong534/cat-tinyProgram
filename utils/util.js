const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

let ret = 7200;
let timer;

timer = setInterval(() => {
  ret -= 1;
}, 1000);

const countDown = () => {
  if (ret < 0) {
    clearInterval(timer);
    return ['00', '00', '00'];
  }
  let hours = parseInt(ret / 3600);
  let minutes = parseInt((ret - hours * 3600) / 60);
  let seconds = ret % 60;
  return [hours, minutes, seconds].map(formatNumber);
}

module.exports = {
  formatTime: formatTime,
  countDown: countDown
}
