import { generateRandomDate } from "./randomDate.js";

export function fillProductRating(clientList, comments) {
  const rating = {
    star_1: [],
    star_2: [],
    star_3: [],
    star_4: [],
    star_5: []
  }

  const randoNumber = Math.floor(Math.random() * 50) + 1

  for (let i = 0; i < randoNumber; i++) {
    const estrella = Math.floor(Math.random() * 5) + 1
    const cliente = {
      _id: `${estrella}-${i}`,
      name: clientList[Math.floor(Math.random() * clientList.length)]
    }
    const comment = comments[Math.floor(Math.random() * comments.length)]
    const fecha = generateRandomDate()
    const ratingStar = { client: cliente, comment: comment, date: fecha }
    switch (estrella) {
      case 1:
        rating.star_1.push(ratingStar)
        break
      case 2:
        rating.star_2.push(ratingStar)
        break
      case 3:
        rating.star_3.push(ratingStar)
        break
      case 4:
        rating.star_4.push(ratingStar)
        break
      case 5:
        rating.star_5.push(ratingStar)
        break
      default:
        break
    }
  }

  return rating
}