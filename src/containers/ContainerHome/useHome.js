import photoTime from 'static/kruglosutochno 1.svg'
import photoOpyt from 'static/opyt 1.svg'
import photoTea from 'static/tea.svg'
import photoProblem from 'static/car-problem.jpg'

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
      value: '200+',
      title: 'довольных клиентов'
    },
    {
      value: '8',
      title: 'машин в автопарке'
    },
    {
      value: '10',
      title: 'лет опыта эвакуации'
    },
    {
      value: '256',
      title: 'Успешно выполненных заказов'
    }
  ]

  const cardsList = [
    {
      img: photoProblem,
      title: 'Не будет дорого',
      text: 'Мы всегда поддерживаем самый низкий ценник, по сравнению с конкурентами'
    },
    {
      img: photoProblem,
      title: 'Не будет дорого',
      text: 'Мы всегда поддерживаем самый низкий ценник, по сравнению с конкурентами'
    },
    {
      img: photoProblem,
      title: 'Не будет дорого',
      text: 'Мы всегда поддерживаем самый низкий ценник, по сравнению с конкурентами'
    }
  ]

  return {
    advantagesList,
    achievementsList,
    cardsList
  }
}
export default useHome
