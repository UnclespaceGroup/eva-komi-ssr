import photoTime from 'static/kruglosutochno 1.svg'
import photoOpyt from 'static/opyt 1.svg'
import photoTea from 'static/tea.svg'
import photoProblem from 'static/car-problem.jpg'
import photoDefect from 'static/image-car-defect.jpeg'
import photoEva from 'static/Evakuator-Dzerzhinsk-66-511-66.jpg'
import React from 'react'
import { MdPhone } from 'react-icons/md'

const useHome = () => {
  const advantagesList = [
    {
      icon: photoTime,
      title: <h2>Работаем 24/7</h2>,
      text: <div>
        Круглосуточно, без выходных.<br /> Звоните в любое удобное для вас время
      </div>
    },
    {
      icon: photoOpyt,
      title: <h2>Богатый опыт</h2>,
      text: <div>
        Более 10 лет мы помогаем людям на дороге. На нашем счету сотни довольных клиентов
      </div>
    },
    {
      icon: photoTea,
      title: <h2>Быстрая подача</h2>,
      text: <div>Вам не придётся долго ждать, в парке много машин, мы всегда найдём ту, что ближе к вам</div>
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

  const topCardsList = [
    {
      img: photoEva,
      title: <h2>Самая дешёвая и надёжная служба в Сыктывкаре</h2>,
      text: <div>
        <p>Если сломались в дороге, просто позвоните нам. Доставим Ваш автомобиль в целости и сохранности, в любое место России.</p>
      </div>
    }
  ]

  const cardsList = [
    {
      img: photoProblem,
      title: <h2>Не будет дорого</h2>,
      text: <div>
        <p>Цена наших услуг всегда ниже, чем у конкурентов. Найдете дешевле, сделаем скидку!</p>
      </div>
    },
    {
      img: photoDefect,
      title: <h2>Вам не придётся долго ждать</h2>,
      text: <div>
        <p>Среднее время прибытия эвакуатора по Сыктывкару - 20 минут.</p>
        <p>Для клиентов за пределами города найдем машину поближе.</p>
      </div>
    }
  ]

  const bottom = <div className={'block'}>
    <MdPhone size={'8rem'} />
    <p>Если остались вопросы - Звоните</p>
    <p>Консультация бесплатна</p>
  </div>

  return {
    advantagesList,
    achievementsList,
    cardsList,
    bottom,
    topCardsList
  }
}
export default useHome
