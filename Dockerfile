FROM node:18

WORKDIR /app

COPY package*.json ./

ENV DATABASE_URL=postgresql://postgres:4sdFULemRXKaSODI@db.jdaydpoemrbcveqbisoe.supabase.co:5432/postgres
ENV SESSION_SECRET=1232131hbfdsoifaboDOIFHBDSO

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["node", "app.js"]