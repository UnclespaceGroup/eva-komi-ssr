import photoTime from 'static/kruglosutochno 1.svg'
import photoOpyt from 'static/opyt 1.svg'
import photoTea from 'static/tea.svg'
import photoProblem from 'static/car-problem.jpg'

const useHome = () => {
  const advantagesList = [
    {
      icon: photoTime,
      title: 'Работаем 24/7',
      text: 'Круглосуточно, без выходных\n'
    },
    {
      icon: photoOpyt,
      title: 'Богатый опыт',
      text: 'Более 10 лет мы помогаем людям на дороге'
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
      value: '0',
      title: 'Не выполненных заказов'
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
    }
  ]

  return {
    advantagesList,
    achievementsList,
    cardsList
  }
}
export default useHome
