
import prefix from './prefix'

export default function (card, $el) {
  var transform = prefix('transform')
  var transition = prefix('transition')
  var transitionDelay = prefix('transitionDelay')

  card.poker = function (i, cb) {
    var delay = i * 250
    var target = {
      x: (i - 2) * 110,
      y: -125
    }
    setTimeout(function () {
      $el.style[transition] = 'all .25s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
      $el.style[transitionDelay] = delay / 1000 + 's'
      $el.style[transform] = 'translate(' + target.x + '%, ' + target.y + '%)'
    }, 0)
    setTimeout(function () {
      $el.style[transition] = ''
      cb(i)
    }, delay + 250)

  }
}
