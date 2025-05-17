import './style.css';

const CHOICES = ['グー', 'チョキ', 'パー'];
const app = document.getElementById('app');

function createButton(text, color) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.className = `${color} text-black px-6 py-3 rounded-full text-lg font-bold transform transition-transform duration-150 hover:scale-105 hover:drop-shadow-lg`;
  return btn;
}

function getResult(player, computer) {
  if (player === computer) return 'draw';
  if ((player === 'グー' && computer === 'チョキ') ||
      (player === 'チョキ' && computer === 'パー') ||
      (player === 'パー' && computer === 'グー')) return 'win';
  return 'lose';
}

function play(player) {
  const computer = CHOICES[Math.floor(Math.random() * 3)];
  const result = getResult(player, computer);
  let colorClass = '';
  if (result === 'win') colorClass = 'bg-green-300';
  if (result === 'lose') colorClass = 'bg-red-300';
  if (result === 'draw') colorClass = 'bg-yellow-300';
  resultDiv.textContent = `あなた: ${player}, コンピュータ: ${computer}`;
  badge.textContent = result === 'win' ? '🟢 勝ち' : result === 'lose' ? '🔴 負け' : '🟡 あいこ';
  badge.className = `px-4 py-2 rounded-full text-black ${colorClass}`;
}

const buttonContainer = document.createElement('div');
buttonContainer.className = 'flex gap-6';

const colors = ['bg-gradient-to-r from-blue-400 to-blue-600',
                'bg-gradient-to-r from-pink-400 to-pink-600',
                'bg-gradient-to-r from-green-400 to-green-600'];
CHOICES.forEach((choice, idx) => {
  const btn = createButton(choice, colors[idx]);
  btn.addEventListener('click', () => play(choice));
  buttonContainer.appendChild(btn);
});

const resultDiv = document.createElement('div');
const badge = document.createElement('div');
badge.className = 'px-4 py-2 rounded-full text-black bg-gray-200';

app.appendChild(buttonContainer);
app.appendChild(resultDiv);
app.appendChild(badge);

