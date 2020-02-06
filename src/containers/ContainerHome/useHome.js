import photoTime from 'static/kruglosutochno 1.svg'
import photoOpyt from 'static/opyt 1.svg'
import photoTea from 'static/tea.svg'
import photoProblem from 'static/car-problem.jpg'
import photoDefect from 'static/image-car-defect.jpeg'
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

  const cardsList = [
    {
      img: photoProblem,
      title: 'Не будет дорого',
      text: <div>
        <p>У нас всегда низкая цена. Мы следим за конкурентами, и всегда стараемся предоставить услуги дешевле, чем они.</p>
        <p>Найдете дешевле, сделаем скидку!</p>
      </div>
    },
    {
      img: photoDefect,
      title: 'Вам не придётся долго ждать',
      text: <div>
        <p>Среднее время прибытия эвакуатора по Сыктывкару - 20 минут.</p>
        <p>Если вы находитесь не в пределах города, мы найдем машину поближе.</p>
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
    bottom
  }
}
export default useHome
