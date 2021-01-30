import * as functions from 'firebase-functions';
import express = require('express');
import { db } from './init.db';
import { IPerformersCard } from './interfaces/IPerformersCard';
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.get('/cards', async (request, response) => {
    const snaps = await db.collection('performers').get()
    const q = request.query;
    let cards: IPerformersCard[] = [];
    snaps.forEach((snap: any) => {
        return cards.push(snap.data());
    })
    if (q) {
        if (q.stars) {
          cards = cards.filter(card => +card.stars >= +(q.stars || '0'))
        }

        if (q.city) {
          cards = cards.filter(card => card.location.city === q.city)
        }

        if (q.metro) {
          cards = cards.filter(card => card.location.metro === q.metro)
        }

        if (q.district) {
          cards = cards.filter(card => card.location.district === q.district)
        }

        if (q.feedback) {
          cards = cards.filter(card => card.orders.length >= +(q.feedback || '0'))
        }

        if (q.discount) {
          cards = cards.filter(card => card.description.discount.toString() === q.discount)
        }

        if (q.contract) {
          cards = cards.filter(card => card.description.contract.toString() === q.contract)
        }

        if (q.face) {
          cards = cards.filter(card => card.description.legalStatus.toString() === q.face)
        }

        if (q.price) {
          cards = cards.filter(card => card.price === q.price)
        }

        if (q.ordersInProgress) {
          cards = cards.filter(card => {
            return card.orders.filter(order => order.status === 'Выполяется').length >= +(q.ordersInProgress || 0)
          })
        }

        if (q.activity) {
          cards = cards.filter(card => card.description.activity === q.activity)
        }
        
        if (q.orderBy === 'abc') {          
          cards.sort((a, b) => {
            return a.description.title.localeCompare(b.description.title)
          })
        } else {
          cards.sort((a, b) => {
            return +b.stars - +a.stars;
          })
        }
      }

      let limit = 10;

      if (q.limit && typeof q.limit === 'string' && +q.limit <= 50 ) {
        limit = parseInt(q.limit);
      }

      let page = 1;

      if (q.page && typeof q.page === 'string') {
        page = parseInt(q.page)
      }

      const startIndex = page - 1;
      const endIndex = page*limit;

      const result = {
        next: {},
        previous: {},
        count: Math.ceil(cards.length / limit),
        result: cards.slice(startIndex, endIndex),
        orderBy: q.orderBy || 'rating',
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
