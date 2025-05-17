import './style.css'

const buttons = document.querySelectorAll('[data-choice]')
const result = document.getElementById('result')
const resultText = document.getElementById('result-text')

const CHOICES = ['グー', 'チョキ', 'パー']

function judge(player, computer) {
  if (player === computer) return 'draw'
  if ((player === 'グー' && computer === 'チョキ') ||
      (player === 'チョキ' && computer === 'パー') ||
      (player === 'パー' && computer === 'グー')) {
    return 'win'
  }
  return 'lose'
}

function play(index) {
  const player = CHOICES[index]
  const computer = CHOICES[Math.floor(Math.random()*3)]
  const outcome = judge(player, computer)
  let text
  if (outcome === 'win') text = 'あなたの勝ち'
  else if (outcome === 'lose') text = 'あなたの負け'
  else text = 'あいこ'
  resultText.textContent = `${player} vs ${computer} : ${text}`
  resultText.className = `px-4 py-2 rounded-full text-black bg-${outcome}`
  result.removeAttribute('hidden')
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    play(parseInt(btn.dataset.choice))
  })
})
