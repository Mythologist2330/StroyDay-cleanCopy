import * as functions from 'firebase-functions';
import express = require('express');
import { db } from './init.db';
import { IPerformersCard } from './IPerformersCard';
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.get('/cards', async (request, response) => {
    const snaps = await db.collection('performersCard').get()
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
          cards = cards.filter(card => card.city === q.city)
        }

        if (q.metro) {
          cards = cards.filter(card => card.description.metro === q.metro)
        }

        if (q.feedback) {
          cards = cards.filter(card => +card.feedback >= +(q.feedback || '0'))
        }

        if (q.discount) {
          cards = cards.filter(card => card.description.discount === q.discount)
        }

        if (q.contract) {
          cards = cards.filter(card => card.description.contract.toString() === q.contract)
        }

        if (q.face) {
          cards = cards.filter(card => card.description.face.toString() === q.face)
        }

        if (q.price) {
          cards = cards.filter(card => card.statistics.prices === q.price)
        }

        if (q.ordersInProgress) {
          cards = cards.filter(card => +card.statistics.ordersInProgress >= +(q.ordersInProgress || '0'))
        }

        if (q.activity) {
          cards = cards.filter(card => card.description.activity === q.activity)
        }
        
        if (q.orderBy === 'abc') {          
          cards.sort((a, b) => {
            return a.description.header.localeCompare(b.description.header)
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
