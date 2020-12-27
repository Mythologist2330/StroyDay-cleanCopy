import * as functions from 'firebase-functions';
import express = require('express');
import { db } from './init.db';
import { IPerformersCard } from './IPerformersCard';
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.get('/cards', async (request, response) => {
    console.log(request.query)
    const snaps = await db.collection('performersCard').get()
    let cards: IPerformersCard[] = [];
    snaps.forEach((snap: any) => {
        return cards.push(snap.data());
    })
    if (request.query) {
        if (request.query.stars) {
          cards = cards.filter((card) => {
            return +card.stars >= +(request.query.stars || '0')
          })          
          console.log('Виден запрос: ' + request.query.stars)
          console.log(request.query)
        }

        if (request.query.city) {
          cards = cards.filter((card) => {
            return card.city === request.query.city
          })
        }

        if (request.query.metro) {
          cards = cards.filter((card) => {
            return card.description.metro === request.query.metro
          })
        }

        if (request.query.feedback) {
          cards = cards.filter((card: IPerformersCard) => {
            return +card.feedback >= +(request.query.feedback || '0')
          })
        }

        if (request.query.discount) {
          cards = cards.filter((card: IPerformersCard) => {
            return card.description.discount === request.query.discount
          })
        }

        if (request.query.contract) {
          cards = cards.filter((card: IPerformersCard) => {
            return card.description.contract === request.query.contract
          })
        }

        if (request.query.face) {
          cards = cards.filter((card: IPerformersCard) => {
            return card.description.face === request.query.face
          })
        }

        if (request.query.price) {
          cards = cards.filter((card: IPerformersCard) => {
            return card.statistics.prices === request.query.price
          })
        }

        if (request.query.ordersInProgress) {
          cards = cards.filter((card: IPerformersCard) => {
            return +card.statistics.ordersInProgress >= +(request.query.ordersInProgress || '0')
          })
        }

        if (request.query.activity) {
          cards = cards.filter((card: IPerformersCard) => {
            return card.description.activity === request.query.activity
          })
        }
      }

      let limit = 10;

      if (request.query.limit && typeof request.query.limit === 'string' && +request.query.limit <= 50 ) {
        limit = parseInt(request.query.limit);
      }

      let page = 1;

      if (request.query.page && typeof request.query.page === 'string') {
        page = parseInt(request.query.page)
      }

      const startIndex = page - 1;
      const endIndex = page*limit;

      const result = {
        next: {},
        previous: {},
        count: Math.ceil(cards.length / limit),
        result: cards.slice(startIndex, endIndex),
      }

      if (endIndex <= result.count) {
        result.next = {
          page: +page + 1,
          limit,
        }
      }

      if (startIndex > 0) {
        result.previous = {
          page: +page - 1,
          limit,
        }
      }

      response.status(200).json({result});
})

export const getCards = functions.https.onRequest(app);
