import photoTime from 'static/kruglosutochno 1.svg'
import photoOpyt from 'static/opyt 1.svg'
import photoTea from 'static/tea.svg'

const useHome = () => {
  const advantagesList = [
    {
      icon: photoTime,
      title: 'Работаем 24/7',
      text: 'Вам не придётся долго ждать'
    },
    {
      icon: photoOpyt,
      title: 'Богатый опыт',
      text: 'Вам не придётся долго ждать'
    },
    {
      icon: photoTea,
      title: 'Быстрая подача',
      text: 'Вам не придётся долго ждать'
    }
  ]

  const achievementsList = [
    {
      value: '256',
      title: 'Успешно выполненных заказов'
    },
    {
      value: '256',
      title: 'Успешно выполненных заказов'
    },
    {
      value: '256',
      title: 'Успешно выполненных заказов'
    },
    {
      value: '256',
      title: 'Успешно выполненных заказов'
    }
  ]

  return {
    advantagesList,
    achievementsList
  }
}
export default useHome