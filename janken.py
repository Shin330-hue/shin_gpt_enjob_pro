import random

CHOICES = ['グー', 'チョキ', 'パー']


def judge(player, computer):
    if player == computer:
        return 'あいこ'
    if ((player == 'グー' and computer == 'チョキ') or
            (player == 'チョキ' and computer == 'パー') or
            (player == 'パー' and computer == 'グー')):
        return 'あなたの勝ち'
    else:
        return 'あなたの負け'


def main():
    print('じゃんけんゲームへようこそ！')
    print('入力: 0=グー, 1=チョキ, 2=パー, q=終了')
    while True:
        choice = input('あなたの手を選んでください: ')
        if choice.lower() == 'q':
            print('ゲームを終了します。')
            break
        if choice not in ['0', '1', '2']:
            print('無効な入力です。もう一度入力してください。')
            continue
        player = CHOICES[int(choice)]
        computer = random.choice(CHOICES)
        print(f'あなた: {player}, コンピュータ: {computer}')
        result = judge(player, computer)
        print(result)


if __name__ == '__main__':
    main()
